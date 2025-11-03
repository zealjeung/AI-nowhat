
import React from 'react';
import type { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10">
      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-slate-400 text-base leading-relaxed">{item.description}</p>
    </div>
  );
};

export default NewsCard;
