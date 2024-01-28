import React from "react";
import { FaGithub } from "react-icons/fa";

// Single Project component used multiple times in Portfolio page
// github icon linking to repo not currently in use
export default function Project({ application, id, image, title, github }) {
  return (
    
    <div className="project">
      <img src={image} alt={title} className="project-img" key={id} />
      <a href={application} target="_blank">
        {title}
      </a>
    </div>
  );
}
