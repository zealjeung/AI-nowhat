import React from 'react';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
}

export interface NewsCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: NewsItem[];
}

export interface LLMRankingItem {
  rank: number;
  name: string;
  developer: string;
  score: number;
}

export interface GroundingSource {
  uri: string;
  title: string;
}
