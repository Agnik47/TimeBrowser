import React, { useState, useEffect } from 'react';
import Button from './Button';
import Nav from './Nav'; 

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: showSeconds ? '2-digit' : undefined,
    hour12: !is24HourFormat,
  });

  const [mainTime, ampm] = formattedTime.split(' ');

  const toggleFormat = () => {
    setIs24HourFormat((prevFormat) => !prevFormat);
  };

  const toggleSeconds = () => {
    setShowSeconds((prev) => !prev);
  };

  // Toggle full screen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-black to-gray-800  p-4">
      {/* Nav Component */}
      <Nav toggleFullScreen={toggleFullScreen} isFullScreen={isFullScreen} />

      {/* Time Display */}
      <div className="flex flex-col items-center justify-center flex-grow mb-4">
        <h1 className="text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[22vw] 2xl:text-[20vw] text-white font-bold neon-glow">
          {mainTime}
        </h1>
        {!is24HourFormat && (
          <span className="text-5xl text-gray-400 ml-2 align-top">
            {ampm}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={toggleFormat}
          className="bg-transparent border-2 border-gray-900 text-gray-900 py-2 px-4 rounded-full transition duration-300 hover:bg-gray-600 hover:text-white"
        >
          Switch to {is24HourFormat ? '12-hour' : '24-hour'} format
        </button>

        <button
          onClick={toggleSeconds}
          className="bg-transparent border-2 border-gray-900 text-gray-900 py-2 px-4 rounded-full transition duration-300 hover:bg-gray-600 hover:text-white"
        >
          {showSeconds ? 'Hide Sec' : 'Show Sec'}
        </button>
      </div>
    </div>
  );
};

export default RealTimeClock;
