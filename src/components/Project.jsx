// Project component used on Portfolio page
// github icon linking to repo not currently in use
import React from "react";
import { FaGithub } from "react-icons/fa"; // GH Icon not in use


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
