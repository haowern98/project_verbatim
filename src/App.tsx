import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { LectureMode } from './components/lecture/LectureMode';
import { InterviewMode } from './components/interview/InterviewMode';

function App() {
  const [activeMode, setActiveMode] = useState<'lecture' | 'interview'>('lecture');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors">
        <Header activeMode={activeMode} onModeChange={setActiveMode} />
        {activeMode === 'lecture' ? <LectureMode /> : <InterviewMode />}
      </div>
    </ThemeProvider>
  );
}

export default App;



