import React from 'react';
import { Monitor, Mic, Settings, Clock } from 'lucide-react';
import { AiLectureAssistantPanel } from './AiLectureAssistantPanel';

export const LiveAnalysis: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Screen and Audio Capture */}
      <div className="lg:col-span-2 space-y-8">
        {/* Screen Capture */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Monitor className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Screen Capture
                </h2>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
              <Monitor className="w-16 h-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
                Screen Capture Ready
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Start recording to begin screen analysis
              </p>
            </div>
          </div>
        </div>

        {/* Audio Analysis */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mic className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Audio Analysis
                </h2>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="aspect-[2/1] bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center">
              <Mic className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Audio capture ready - waiting for recording to start
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - AI Assistant */}
      <div className="space-y-8">
        <AiLectureAssistantPanel />

        {/* Session Status */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Session Status
              </h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Screen Capture</span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                <Monitor className="w-3 h-3" />
                Inactive
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Audio Capture</span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                <Mic className="w-3 h-3" />
                Inactive
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Session Time</span>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-900 dark:text-white font-mono">00:00:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





