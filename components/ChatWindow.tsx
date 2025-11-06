import React, { useState, useEffect, useRef, FormEvent } from 'react';
import type { Chat } from '@google/genai';
import type { NewsCategory, LLMRankingItem, ChatMessage } from '../types';
import { createChat } from '../utils/gemini';
import { SendIcon, CloseIcon } from './icons';

interface ChatWindowProps {
  onClose: () => void;
  newsData: NewsCategory[];
  rankingsData: LLMRankingItem[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose, newsData, rankingsData }) => {
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! Ask me anything about the tech news you see here.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the chat session with the page context
    const chat = createChat({ newsData, rankingsData });
    setChatSession(chat);
  }, [newsData, rankingsData]);

  useEffect(() => {
    // Auto-scroll to the latest message
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatSession) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatSession.sendMessage({ message: input });
      const modelMessage: ChatMessage = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage: ChatMessage = { role: 'model', text: 'Sorry, something went wrong. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 sm:right-8 w-[calc(100%-2rem)] max-w-md h-[70vh] max-h-[600px] bg-slate-800/80 backdrop-blur-md rounded-xl shadow-2xl flex flex-col border border-slate-700/50 z-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-slate-700/50">
        <h3 className="text-lg font-bold text-white">Ask about the news</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors" aria-label="Close chat">
          <CloseIcon className="w-6 h-6" />
        </button>
      </header>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-br-none' 
                : 'bg-slate-700 text-slate-200 rounded-bl-none'
            }`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 rounded-lg px-4 py-2 rounded-bl-none">
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-700/50">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            disabled={isLoading || !chatSession}
            className="flex-1 bg-slate-700 text-white placeholder-slate-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            aria-label="Chat input"
          />
          <button 
            type="submit" 
            disabled={isLoading || !chatSession || !input.trim()}
            className="bg-indigo-600 text-white p-2.5 rounded-full hover:bg-indigo-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <SendIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
