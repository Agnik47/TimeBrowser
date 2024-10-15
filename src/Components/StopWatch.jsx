import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo, FaRegClock } from 'react-icons/fa'; // Importing icons
import Button from './Button'; // Adjust the import path based on your project structure
import Nav from './Nav'; // Adjust the import path based on your project structure

const StopWatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const start = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pause = () => {
    setIsPaused(true);
  };

  const reset = () => {
    setTime(0);
    setLaps([]); 
    setIsRunning(false);
    setIsPaused(false);
  };

  const recordLap = () => {
    if (laps.length < 5) { 
      setLaps(prevLaps => [...prevLaps, time]);
    } 
  };

  const formatTime = (time) => {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
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
    <div className="flex flex-col items-center justify-center flex-grow mb-4 bg-gradient-to-b from-black to-gray-800 min-h-screen"> {/* Apply gradient classes here */}
      <Nav toggleFullScreen={toggleFullScreen} isFullScreen={isFullScreen()} />

      <h1 className="text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[22vw] 2xl:text-[20vw] text-white font-bold neon-glow">
        {formatTime(time)}
      </h1>

      <div className='flex space-x-4 mt-4'>
        {!isRunning && !isPaused && (
          <Button
            to={null}
            onClick={start}
            className="bg-gray-800 hover:bg-gray-700 transition duration-200"
          >
            <FaPlay className="inline-block mr-1" /> Start
          </Button>
        )}

        {isRunning && !isPaused && (
          <Button
            to={null}
            onClick={pause}
            className="bg-gray-800 hover:bg-gray-700 transition duration-200"
          >
            <FaPause className="inline-block mr-1" /> Pause
          </Button>
        )}

        {isPaused && (
          <Button
            to={null}
            onClick={start}
            className="bg-gray-800 hover:bg-gray-700 transition duration-200"
          >
            <FaPlay className="inline-block mr-1" /> Resume
          </Button>
        )}

        <Button
          to={null}
          onClick={reset}
          className="bg-gray-800 hover:bg-gray-700 transition duration-200"
        >
          <FaRedo className="inline-block mr-1" /> Reset
        </Button>

        {isRunning && (
          <Button
            to={null}
            onClick={recordLap}
            className="bg-gray-800 hover:bg-gray-700 transition duration-200"
          >
            <FaRegClock className="inline-block mr-1" /> Lap
          </Button>
        )}
      </div>

      <div className="mt-4 text-white">
        <h2 className="text-lg font-bold">Lap Times</h2>
        <ul className="list-disc list-inside">
          {laps.map((lap, index) => (
            <li key={index}>{formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StopWatch;
