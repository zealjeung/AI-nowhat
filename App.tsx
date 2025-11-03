import React, { useState, useEffect, useCallback } from 'react';
import type { NewsCategory, LLMRankingItem, GroundingSource } from './types';
import { fetchNewsData, fetchLLMRankings } from './utils/gemini';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import LLMRankings from './components/LLMRankings';
import Sources from './components/Sources';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsCategory[] | null>(null);
  const [rankingsData, setRankingsData] = useState<LLMRankingItem[] | null>(null);
  const [sources, setSources] = useState<GroundingSource[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [newsResult, rankingsResult] = await Promise.all([
        fetchNewsData(),
        fetchLLMRankings(),
      ]);
      setNewsData(newsResult.newsData);
      setSources(newsResult.sources);
      setRankingsData(rankingsResult);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefresh = () => {
    fetchData();
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSkeleton />;
    }

    if (error) {
      return <ErrorDisplay message={error} onRetry={handleRefresh} />;
    }

    if (newsData && rankingsData) {
      return (
        <>
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <LLMRankings rankings={rankingsData} />
            <div className="space-y-12">
              {newsData.map((category) => (
                <CategorySection key={category.id} category={category} />
              ))}
            </div>
          </main>
          <Sources sources={sources || []} />
        </>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans">
      <Header onRefresh={handleRefresh} isLoading={isLoading} />
      {renderContent()}
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>AI-generated daily briefing. Information may not be 100% accurate.</p>
      </footer>
    </div>
  );
};

export default App;
