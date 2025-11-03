
import React from 'react';
import type { NewsCategory } from '../types';
import NewsCard from './NewsCard';

interface CategorySectionProps {
  category: NewsCategory;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const Icon = category.icon;

  return (
    <section>
      <div className="flex items-center mb-6">
        <Icon className="w-8 h-8 text-cyan-400 mr-4" />
        <h2 className="text-3xl font-bold text-white tracking-wide">{category.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
