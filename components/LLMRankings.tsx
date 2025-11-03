import React from 'react';
import type { LLMRankingItem } from '../types';

interface LLMRankingsProps {
  rankings: LLMRankingItem[];
}

const LLMRankings: React.FC<LLMRankingsProps> = ({ rankings }) => {
  const getBarColor = (score: number) => {
    if (score > 90) return 'from-cyan-400 to-indigo-500';
    if (score > 80) return 'from-sky-400 to-blue-500';
    if (score > 70) return 'from-teal-400 to-cyan-500';
    return 'from-slate-500 to-slate-400';
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white tracking-wide mb-6 text-center">Top LLM Rankings</h2>
      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 shadow-lg">
        <ul className="space-y-4">
          {rankings.sort((a, b) => a.rank - b.rank).map((item) => (
            <li key={item.name} className="space-y-2">
              <div className="flex justify-between items-center text-slate-300">
                <p className="font-semibold">
                  <span className="text-cyan-400">{item.rank}. {item.name}</span>
                  <span className="text-slate-500 text-sm"> by {item.developer}</span>
                </p>
                <p className="font-bold text-white">{item.score}</p>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className={`bg-gradient-to-r ${getBarColor(item.score)} h-2.5 rounded-full`}
                  style={{ width: `${item.score}%` }}
                  aria-valuenow={item.score}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                  aria-label={`${item.name} score`}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LLMRankings;
