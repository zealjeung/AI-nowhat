
import React, { useState, useEffect, useCallback } from 'react';
import type { NewsCategory, LLMRankingItem, GroundingSource } from './types';
import { fetchNewsData, fetchLLMRankings, generateDailyBackground } from './utils/gemini';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import LLMRankings from './components/LLMRankings';
import Sources from './components/Sources';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorDisplay from './components/ErrorDisplay';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsCategory[] | null>(null);
  const [rankingsData, setRankingsData] = useState<LLMRankingItem[] | null>(null);
  const [sources, setSources] = useState<GroundingSource[] | null>(null);
  const [bgImage, setBgImage] = useState<string | null>(null);
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

      // Trigger background generation after content is loaded to not block UI
      const allTrends = newsResult.newsData.flatMap(cat => cat.trendingTopics || []);
      if (allTrends.length > 0) {
          generateDailyBackground(allTrends).then(img => {
              if (img) setBgImage(img);
          }).catch(console.error);
      }

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
    <div className="min-h-screen text-gray-200 font-sans relative selection:bg-cyan-500/30">
      {/* Static Radial Gradient Fallback */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black" />
      
      {/* Generated AI Background Layer */}
      <div 
          className={`fixed inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out ${bgImage ? 'opacity-100' : 'opacity-0'}`}
          style={bgImage ? { 
              backgroundImage: `url(${bgImage})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
          } : undefined} 
      />
      
      {/* Dark Overlay for Readability - Reduced opacity to allow GFX to show through better */}
      <div className={`fixed inset-0 z-0 transition-all duration-[2000ms] ${bgImage ? 'bg-slate-900/80' : 'bg-transparent'}`} />

      {/* Content Layer */}
      <div className="relative z-10">
          <Header onRefresh={handleRefresh} isLoading={isLoading} />
          {renderContent()}
          <ChatWidget newsData={newsData} rankingsData={rankingsData} />
          <footer className="text-center py-6 text-slate-500 text-sm">
            <p>AI-generated daily briefing. Information may not be 100% accurate.</p>
          </footer>
      </div>
    </div>
  );
};

export default App;
