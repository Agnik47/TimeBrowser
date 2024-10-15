import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Button from './Button';

const TimerInput = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const totalTime = (hours * 3600 + minutes * 60 + seconds) * 1000; // Convert to milliseconds

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
      <Nav />

      <h1 className="text-8xl font-serif mb-6">Set Your Timer</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="number"
          placeholder="Hour"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-30 p-2 border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Minute"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="w-30 p-2 border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Second"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          className="w-30 p-2 border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
        />
      </div>

      {totalTime > 0 ? (
        <Link
          to="/timerDisplay"
          state={{ totalTime }}
          className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-200"
        >
          Start Timer
        </Link>
      ) : (
        <Button
          className="bg-gray-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg cursor-not-allowed"
          disabled
        >
          Start Timer
        </Button>
      )}
    </div>
  );
};

export default TimerInput;
