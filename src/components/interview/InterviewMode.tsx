import React, { useState } from 'react';
import { MessageSquare, FileText } from 'lucide-react';
import { StartRecordingButton } from '../StartRecordingButton';
import { LiveInterview } from './LiveInterview';
import { DocumentsPanel } from './DocumentsPanel';

export const InterviewMode: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'live' | 'documents'>('live');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Interview Analysis
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Real-time interview analysis and document context
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
            onClick={() => setActiveTab('documents')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
              activeTab === 'documents'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Documents</span>
          </button>
        </div>

        {activeTab === 'live' ? <LiveInterview /> : <DocumentsPanel />}
      </div>
    </div>
  );
};





