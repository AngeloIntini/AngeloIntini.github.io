// GlassButton.jsx
import React from "react";

const GlassButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-white/20 
        backdrop-blur-md 
        border border-white/30 
        rounded-2xl 
        px-6 py-3 
        text-white 
        font-semibold 
        hover:bg-white/30 
        transition 
        duration-300
        shadow-lg
      "
    >
      {children}
    </button>
  );
};

export default GlassButton;
