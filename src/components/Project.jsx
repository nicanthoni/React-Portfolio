import React from "react";
import { FaGithub } from "react-icons/fa";

// Single Project component to be used multiple times in Portfolio page
export default function Project({
  application,
  id,
  backgroundimage,
  title,
  github,
}) {
  const buttonStyle = {
    backgroundImage: backgroundimage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundColor: "#e4ebf2",
    //backgroundRepeat:
    // Add styles (e.g., backgroundSize, backgroundPosition, etc.)
  };

  return (
    <div className="Projects">
      <button className="project-btn" style={buttonStyle} key={id}>
        <div className="project-btn-container">
          <a href={github} target="_blank">
            <FaGithub className="gh-icon-project" />
          </a>
          <a href={application} target="_blank">
            {title}
          </a>
        </div>
      </button>
    </div>
  );
}
