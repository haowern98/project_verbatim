import React, { useState } from 'react';
import { Search, Filter, Star, MessageSquare, Clock, Eye, FileText, ChevronLeft, ChevronRight, Monitor, Mic } from 'lucide-react';
import { AiLectureAssistantPanel } from './AiLectureAssistantPanel';

export const ReviewSlides: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('recent');

  const slides = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      duration: '00:02:15',
      notes: 3,
      views: 1,
      thumbnail: 'slide',
      description: 'Overview of machine learning fundamentals including supervised, unsupervised, and reinforcement learning...',
      tags: ['ML', 'algorithms', 'data']
    },
    {
      id: 2,
      title: 'Neural Network Architecture',
      duration: '00:05:30',
      notes: 5,
      views: 2,
      thumbnail: 'slide',
      description: 'Deep dive into neural network structure, including input layers, hidden layers, and output layers with activation...',
      tags: ['neural networks', 'layers', 'neurons']
    },
    {
      id: 3,
      title: 'Training Algorithms',
      duration: '00:08:45',
      notes: 2,
      views: 1,
      thumbnail: 'slide',
      description: 'Explanation of how neural networks learn through backpropagation and various optimization techniques.',
      tags: ['backpropagation', 'gradient descent', 'optimization']
    },
    {
      id: 4,
      title: 'Practical Applications',
      duration: '00:12:20',
      notes: 4,
      views: 1,
      thumbnail: 'slide',
      description: 'Real-world applications of machine learning in computer vision, natural language processing, and recommendation...',
      tags: ['applications', 'computer vision', 'NLP']
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Slide Library */}
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Slide Library
                </h2>
              </div>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                4 slides
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search slides by title or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="flex space-x-1 mt-4">
              {[
                { key: 'favorites', label: 'Favorites', icon: Star },
                { key: 'annotated', label: 'Most Annotated', icon: MessageSquare },
                { key: 'recent', label: 'Recent', icon: Clock }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === key
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slides.map((slide) => (
                <div key={slide.id} className="bg-gray-50 dark:bg-black rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer border dark:border-gray-800">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-900 rounded-lg mb-4 flex items-center justify-center relative group">
                    <FileText className="w-12 h-12 text-gray-400" />
                    <button className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-6 h-6 text-white" />
                    </button>
                  </div>
                  
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {slide.title}
                    </h3>
                    <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                      <Star className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{slide.duration}</span>
                    </div>
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <MessageSquare className="w-3 h-3" />
                      <span>{slide.notes} notes</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {slide.tags.map((tag) => (
                      <span key={tag} className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-4 mt-8">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Page 1 of 1
              </span>
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - AI Assistant (same as LiveAnalysis) */}
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





