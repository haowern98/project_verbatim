import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  activeMode: 'lecture' | 'interview';
  onModeChange: (mode: 'lecture' | 'interview') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeMode, onModeChange }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 border-b border-gray-200/60 dark:border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Verbatim
              </span>
            </div>
            
            <nav className="flex space-x-1">
              <button
                onClick={() => onModeChange('lecture')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeMode === 'lecture'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
                }`}
              >
                Lecture
              </button>
              <button
                onClick={() => onModeChange('interview')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeMode === 'interview'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
                }`}
              >
                Interview
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-900/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};