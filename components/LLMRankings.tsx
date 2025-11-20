
import React from 'react';
import type { LLMRankingItem } from '../types';
import { 
  OpenAIIcon, 
  GoogleIcon, 
  AnthropicIcon, 
  MetaIcon, 
  MistralIcon, 
  XAIIcon, 
  DeepSeekIcon,
  BrainIcon,
  AlibabaIcon
} from './icons';

interface LLMRankingsProps {
  rankings: LLMRankingItem[];
}

const LLMRankings: React.FC<LLMRankingsProps> = ({ rankings }) => {
  
  const getBarColor = (score: number) => {
    if (score >= 95) return 'from-cyan-400 to-blue-600';
    if (score >= 90) return 'from-indigo-400 to-purple-600';
    if (score >= 80) return 'from-emerald-400 to-teal-600';
    return 'from-slate-500 to-slate-400';
  };

  const getBrandIcon = (developer: string, name: string) => {
    const lowerDev = developer.toLowerCase();
    const lowerName = name.toLowerCase();

    if (lowerDev.includes('openai') || lowerName.includes('gpt')) return <OpenAIIcon className="w-6 h-6 text-white" />;
    if (lowerDev.includes('google') || lowerName.includes('gemini')) return <GoogleIcon className="w-6 h-6 text-white" />;
    if (lowerDev.includes('anthropic') || lowerName.includes('claude')) return <AnthropicIcon className="w-6 h-6 text-white" />;
    if (lowerDev.includes('meta') || lowerName.includes('llama')) return <MetaIcon className="w-6 h-6 text-blue-400" />;
    if (lowerDev.includes('mistral')) return <MistralIcon className="w-6 h-6 text-amber-400" />;
    if (lowerDev.includes('xai') || lowerName.includes('grok')) return <XAIIcon className="w-6 h-6 text-white" />;
    if (lowerDev.includes('deepseek')) return <DeepSeekIcon className="w-6 h-6 text-blue-500" />;
    if (lowerDev.includes('alibaba') || lowerDev.includes('qwen')) return <AlibabaIcon className="w-6 h-6 text-orange-500" />;
    
    return <BrainIcon className="w-6 h-6 text-slate-300" />;
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white tracking-wide mb-8 text-center">Top LLM Rankings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {rankings.sort((a, b) => a.rank - b.rank).slice(0, 10).map((item) => (
          <div key={`${item.rank}-${item.name}`} className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 shadow-lg flex items-center gap-4 hover:border-cyan-400/30 transition-colors group">
            
            {/* Rank */}
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-700 text-lg font-bold text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/50 transition-all">
              #{item.rank}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700/30 border border-white/5 shadow-inner">
              {getBrandIcon(item.developer, item.name)}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg truncate group-hover:text-cyan-100 transition-colors">
                {item.name}
              </h3>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-medium truncate">
                {item.developer}
              </p>
            </div>

            {/* Score & Bar */}
            <div className="w-24 flex-shrink-0 flex flex-col items-end justify-center gap-1">
              <span className="text-2xl font-extrabold text-white leading-none">{item.score}</span>
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${getBarColor(item.score)} shadow-[0_0_10px_rgba(34,211,238,0.5)]`} 
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default LLMRankings;
