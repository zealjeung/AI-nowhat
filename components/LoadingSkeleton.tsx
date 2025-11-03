import React from 'react';

const SkeletonBar = ({ width, height = 'h-4' }: { width: string, height?: string }) => (
  <div className={`bg-slate-700/50 rounded ${height} ${width} animate-pulse`}></div>
);

const SkeletonCard = () => (
  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
    <SkeletonBar width="w-3/4" height="h-6" />
    <div className="mt-4 space-y-2">
      <SkeletonBar width="w-full" />
      <SkeletonBar width="w-5/6" />
    </div>
  </div>
);

const SkeletonCategory = () => (
  <section>
    <div className="flex items-center mb-6">
      <div className="w-8 h-8 bg-slate-700/50 rounded-md mr-4 animate-pulse"></div>
      <SkeletonBar width="w-1/3" height="h-8" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  </section>
);

const LLMRankingsSkeleton = () => (
  <section className="mb-12">
    <div className="flex justify-center mb-6">
        <SkeletonBar width="w-1/2" height="h-8" />
    </div>
    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 shadow-lg">
      <ul className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i} className="space-y-2">
            <div className="flex justify-between items-center">
              <SkeletonBar width="w-2/5" />
              <SkeletonBar width="w-1/6" />
            </div>
            <SkeletonBar width="w-full" height="h-2.5" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const LoadingSkeleton: React.FC = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <LLMRankingsSkeleton />
      <div className="space-y-12">
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
      </div>
    </main>
  );
};

export default LoadingSkeleton;