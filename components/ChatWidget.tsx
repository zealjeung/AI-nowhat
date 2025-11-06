import React, { useState } from 'react';
import type { NewsCategory, LLMRankingItem } from '../types';
import { ChatIcon, CloseIcon } from './icons';
import ChatWindow from './ChatWindow';

interface ChatWidgetProps {
    newsData: NewsCategory[] | null;
    rankingsData: LLMRankingItem[] | null;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ newsData, rankingsData }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!newsData || !rankingsData) {
        return null; // Don't render if there's no data to chat about
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 sm:right-8 bg-gradient-to-r from-cyan-400 to-indigo-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform z-50"
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatIcon className="w-8 h-8" />}
            </button>
            {isOpen && <ChatWindow onClose={() => setIsOpen(false)} newsData={newsData} rankingsData={rankingsData} />}
        </>
    );
};

export default ChatWidget;
