import React from 'react';
import { RefreshIcon } from './icons';

interface HeaderProps {
    onRefresh: () => void;
    isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ onRefresh, isLoading }) => {
  return (
    <header className="py-12 sm:py-16 bg-slate-900 text-center border-b border-slate-700 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 tracking-tight">
          AI & Tech Briefing
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
          A curated summary of exponential trends, breakthroughs, and future targets in the world of artificial intelligence and technology.
        </p>
        <button
            onClick={onRefresh}
            disabled={isLoading}
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
            aria-label="Refresh news"
        >
            <RefreshIcon className={`w-5 h-5 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Refreshing...' : 'Refresh Now'}
        </button>
      </div>
    </header>
  );
};

export default Header;
