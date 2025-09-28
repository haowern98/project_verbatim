import React from 'react';
import { Monitor, Mic, Settings, MessageSquare, Clock, User } from 'lucide-react';

export const LiveInterview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Left Column - Screen Share */}
      <div className="xl:col-span-2 space-y-8">
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Monitor className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Screen Share
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
                Waiting for Screen Share
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Start sharing your screen to begin analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Column - Audio Transcript & AI */}
      <div className="xl:col-span-1 space-y-8">
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
              <Mic className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Audio Transcript
              </h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    Interviewer
                  </span>
                  <span className="text-xs text-gray-500">00:01:30</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Can you walk me through your experience with React development?
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    Candidate
                  </span>
                  <span className="text-xs text-gray-500">00:01:45</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  I've been working with React for over 3 years, primarily focusing on component architecture and state management...
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                    AI Analysis
                  </span>
                  <span className="text-xs text-gray-500">00:02:00</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Candidate demonstrates strong technical vocabulary and structured thinking. Consider asking about specific projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
          </div>
          <div className="p-6 space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              Generate Summary
            </button>
            <button className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              Export Transcript
            </button>
            <button className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              Save Analysis
            </button>
          </div>
        </div>
      </div>

        {/* AI Insights */}
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                AI Insights
              </h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                Skills Match
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                85% match with required React skills from job description
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                Communication
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clear articulation and structured responses
              </p>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-2">
                Suggested Questions
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Ask about specific React performance optimization techniques
              </p>
            </div>
          </div>
        </div>

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
              <span className="text-gray-600 dark:text-gray-400">Recording</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">
                  Active
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Duration</span>
              <span className="text-gray-900 dark:text-white font-mono">00:15:23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Participants</span>
              <span className="text-gray-900 dark:text-white">2</span>
            </div>
          </div>
        </div>
    </div>
  );
};
