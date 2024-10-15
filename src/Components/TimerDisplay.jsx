import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Button from './Button';

const TimerDisplay = () => {
  const { state } = useLocation();
  const { totalTime } = state || { totalTime: 0 }; // Fallback to 0 if no state
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (!isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1000);
      }, 1000);
    } else if (timeLeft <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused, timeLeft]);

  const formatTime = (time) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleExit = () => {
    navigate('/');
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const isFullScreen = () => {
    return !!document.fullscreenElement;
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <Nav toggleFullScreen={toggleFullScreen} isFullScreen={isFullScreen()} />

      <h1 className="text-[16vw] font-bold mb-6 neon-glow">{formatTime(timeLeft)}</h1>

      <div className="flex space-x-4">
        <Button
          onClick={handlePauseResume}
          className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-200"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </Button>

        <Button
          // onClick={handleExit}
          to={'/'}
          className="bg-red-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-200"
        >
          Exit
        </Button>
      </div>
    </div>
  );
};

export default TimerDisplay;
