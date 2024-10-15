import React from 'react';
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import Button from './Button';

const Nav = ({ toggleFullScreen, isFullScreen }) => {
  return (
    <div className="absolute top-4 right-4 z-10 flex">
      <Button
        onClick={toggleFullScreen}
        className="text-sm bg-gray-800 py-1 px-2 hover:bg-gray-700 transition duration-200"
        aria-label={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
      >
        {isFullScreen ? (
          <MdFullscreenExit className="inline-block mr-1" />
        ) : (
          <MdFullscreen className="inline-block mr-1" />
        )}
      </Button>

      <Button
        to="/"
        className="text-sm bg-gray-800 py-1 px-2 ml-2 hover:bg-gray-700 transition duration-200"
        aria-label="Go Back"
      >
        Back
      </Button>
    </div>
  );
};

export default Nav;
