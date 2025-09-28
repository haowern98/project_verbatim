import React, { useState } from 'react';
import { MessageSquare, FileText } from 'lucide-react';
import { StartRecordingButton } from '../StartRecordingButton';
import { LiveAnalysis } from './LiveAnalysis';
import { ReviewSlides } from './ReviewSlides';

export const LectureMode: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'review'>('live');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Lecture Analysis
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Real-time analysis and slide review
            </p>
          </div>
          <StartRecordingButton className="w-full sm:w-auto" />
        </div>

        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
              activeTab === 'live'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Live Analysis</span>
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
              activeTab === 'review'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Review Slides</span>
          </button>
        </div>

        {activeTab === 'live' ? <LiveAnalysis /> : <ReviewSlides />}
      </div>
    </div>
  );
};






