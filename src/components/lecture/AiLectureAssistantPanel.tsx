import React, { useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  ClipboardList,
  Clock,
  MessageSquare,
  Send,
  Zap,
  FileText,
  Sparkles,
  Brain,
} from 'lucide-react';

interface SummaryCard {
  id: number;
  label: string;
  tone: 'blue' | 'purple' | 'green';
  time: string;
  message: string;
}

const SUMMARY_CARDS: SummaryCard[] = [
  {
    id: 1,
    label: 'Summary',
    tone: 'blue',
    time: '00:00:30',
    message: 'Introduction to machine learning fundamentals and basic concepts.',
  },
  {
    id: 2,
    label: 'Key Point',
    tone: 'purple',
    time: '00:01:45',
    message: 'Neural networks process information through interconnected nodes.',
  },
  {
    id: 3,
    label: 'Question',
    tone: 'green',
    time: '00:02:30',
    message: 'What are the main types of machine learning algorithms?',
  },
];

const SUGGESTIONS = ['Explain slide', 'Key takeaways', 'Practice questions'];

const scrollContainerClass = 'ai-scrollable-panel';
const scrollContainerStyle: React.CSSProperties = {
  scrollbarWidth: 'thin',
  scrollbarColor: '#6366F1 transparent',
};

const scrollbarStyles = `
  .${scrollContainerClass}::-webkit-scrollbar {
    width: 8px;
  }
  .${scrollContainerClass}::-webkit-scrollbar-track {
    background: transparent;
  }
  .${scrollContainerClass}::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.6);
    border-radius: 9999px;
  }
  .${scrollContainerClass}:hover::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.9);
  }
`;

const chipToneClasses: Record<SummaryCard['tone'], string> = {
  blue: 'bg-blue-600 text-white',
  purple: 'bg-purple-600 text-white',
  green: 'bg-green-600 text-white',
};

const chipIcons: Record<SummaryCard['tone'], React.ReactNode> = {
  blue: <FileText className="w-3 h-3" />,
  purple: <Sparkles className="w-3 h-3" />,
  green: <Brain className="w-3 h-3" />,
};

const buttonToneClasses = 'text-gray-400 hover:bg-purple-600 hover:text-white';

export const AiLectureAssistantPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'summaries' | 'chat'>('summaries');

  const baseTabButton =
    'inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors outline-none border border-transparent focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';
  
  const renderSummaries = () => (
    <div
      className={`${scrollContainerClass} min-h-[24rem] max-h-96 overflow-hidden hover:overflow-y-auto space-y-4 pr-1 pb-6 transition-all duration-200`}
      style={scrollContainerStyle}
    >
      {SUMMARY_CARDS.map((card) => (
        <div
          key={card.id}
          className="bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${chipToneClasses[card.tone]}`}>
              {chipIcons[card.tone]}
              {card.label}
            </span>
            <span className="text-xs text-gray-400">{card.time}</span>
          </div>
          <p className="text-sm text-gray-700 dark:text-white mb-4 leading-relaxed">{card.message}</p>
          <button className={`w-full py-1.5 px-3 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${buttonToneClasses}`}>
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );

  const renderChat = () => (
    <div
      className={`${scrollContainerClass} min-h-[24rem] max-h-96 overflow-hidden hover:overflow-y-auto pr-1 transition-all duration-200`} 
      style={scrollContainerStyle}
    >
      <div className="flex flex-col justify-between h-full min-h-[24rem]">
        <div className="flex-1 pb-1 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div className="flex-1 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-3">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Hello! I'm your AI lecture assistant. I can help you understand concepts, clarify doubts, and provide additional insights based on the current lecture content. What would you like to know?
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>10:30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Ask about the lecture content..."
              className="flex-1 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="h-10 w-10 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <Zap className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Lecture Assistant</h2>
        </div>
      </div>

      <div className="px-6 pb-8 pt-2 space-y-3">
        <style>{scrollbarStyles}</style>
        <div className="grid grid-cols-2 gap-1 w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('summaries')}
            className={`${baseTabButton} ${
              activeTab === 'summaries'
                ? 'bg-white text-gray-900 shadow-sm border border-gray-200 dark:bg-black dark:text-white dark:border-blue-500'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/80'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>Summaries</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('chat')}
            className={`${baseTabButton} ${
              activeTab === 'chat'
                ? 'bg-white text-gray-900 shadow-sm border border-gray-200 dark:bg-black dark:text-white dark:border-blue-500'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/80'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>AI Chat</span>
          </button>
        </div>

        {activeTab === 'summaries' ? renderSummaries() : renderChat()}
      </div>
    </div>
  );
};