import React from 'react';

interface ErrorDisplayProps {
    message: string;
    onRetry: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRetry }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="bg-red-900/50 border border-red-700/50 text-red-300 px-4 py-3 rounded-lg relative max-w-2xl mx-auto" role="alert">
            <strong className="font-bold">An error occurred!</strong>
            <span className="block sm:inline ml-2">{message}</span>
            <button
                onClick={onRetry}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
                Try Again
            </button>
        </div>
    </div>
);

export default ErrorDisplay;
