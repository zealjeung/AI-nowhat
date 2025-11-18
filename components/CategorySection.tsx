
import React, { useState } from 'react';
import type { NewsCategory } from '../types';
import NewsCard from './NewsCard';
import { ChevronDownIcon } from './icons';

interface CategorySectionProps {
  category: NewsCategory;
}

const INITIAL_VISIBLE_COUNT = 6;
const INCREMENT_COUNT = 6;

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const Icon = category.icon;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const showMoreItems = () => {
    setVisibleCount(prevCount => prevCount + INCREMENT_COUNT);
  };

  const hasMoreItems = category.items.length > visibleCount;
  const itemsToShow = category.items.slice(0, visibleCount);

  return (
    <section>
      <div className="flex items-center mb-6">
        <Icon className="w-8 h-8 text-cyan-400 mr-4" />
        <h2 className="text-3xl font-bold text-white tracking-wide">{category.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsToShow.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
      {hasMoreItems && (
        <div className="mt-8 text-center">
          <button
            onClick={showMoreItems}
            className="inline-flex items-center px-6 py-2 border border-slate-600 text-sm font-medium rounded-full text-slate-300 bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
            aria-label={`Show more news for ${category.title}`}
          >
            Show More
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      )}
    </section>
  );
};

export default CategorySection;
