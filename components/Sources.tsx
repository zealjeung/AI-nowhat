import React from 'react';
import type { GroundingSource } from '../types';

interface SourcesProps {
    sources: GroundingSource[];
}

const Sources: React.FC<SourcesProps> = ({ sources }) => {
    if (!sources || sources.length === 0) {
        return null;
    }

    const validSources = sources.filter(source => source && source.uri);

    if (validSources.length === 0) {
        return null;
    }

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-2xl font-bold text-white tracking-wide mb-4">Sources</h2>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm">
                    {validSources.map((source, index) => (
                        <li key={index} className="truncate">
                            <a 
                                href={source.uri} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                                title={source.title || source.uri}
                            >
                                {source.title || new URL(source.uri).hostname}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Sources;
