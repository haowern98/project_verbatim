import React from 'react';

type StartRecordingButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const StartRecordingButton: React.FC<StartRecordingButtonProps> = ({
  className = '',
  ...props
}) => (
  <button
    className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${className}`}
    {...props}
  >
    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
    <span>Start Recording</span>
  </button>
);


