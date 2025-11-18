
import React from 'react';
import type { NewsItem } from '../types';
import { ArrowUpRightIcon } from './icons';

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10 group h-full"
      aria-label={`Read more about ${item.title}`}
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-semibold text-white mb-2 flex-1">{item.title}</h3>
        <ArrowUpRightIcon className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0 mt-1" />
      </div>
      <p className="text-slate-400 text-base leading-relaxed">{item.description}</p>
    </a>
  );
};

export default NewsCard;