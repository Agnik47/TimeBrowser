import React from "react";
import Button from "../Components/Button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black to-gray-800 text-white  ">
      <h1 className="text-[6vw] mb-10 font-bold text-center neon-glow flex">
        Timer Application
      </h1>
      <Button to="/real-time" className="mb-6">
        Real-Time Clock
      </Button>
      <Button to="/stopwatch" className="mb-6">
        Stopwatch
      </Button>
      <Button to="/timerInput">Timer</Button>
    </div>
  );
};

export default Home;
