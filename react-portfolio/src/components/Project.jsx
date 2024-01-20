import React from "react"; // Don't forget to import React
import { useState } from "react";

// A single Project component that will be used multiple times in the Portfolio section

export default function Project({
  application,
  id,
  backgroundimage,
  title,
  github,
}) 

{
  const buttonStyle = {
    backgroundImage: backgroundimage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: '#e4ebf2'
    //backgroundRepeat: 
    // Add styles (e.g., backgroundSize, backgroundPosition, etc.)
  };

  return (
    <div className="Projects">
      <button className="project-btn" style={buttonStyle} key={id}>
        {title}
      </button>
  
    </div>
  );
}
