import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, className, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e); 
    }
  };

  return (
    <div>
      <Link to={to}>
        <button
          onClick={handleClick} //For Handel Click 
          className={`bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg transition ease-in-out duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;
