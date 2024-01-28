import React from "react";
import { FaGithub } from "react-icons/fa";

// Single Project component used multiple times in Portfolio page
export default function Project({ application, id, image, title, github }) {
  // const buttonStyle = {
  //   backgroundImage: image,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   // Add styles (e.g., backgroundSize, backgroundPosition, backgroundRepeat, etc.)
  // };

  return (
    // <div className="Projects">
    //   <button className="project-btn" style={buttonStyle} key={id}>
    //     <div className="project-btn-container">
    //       <a href={github} target="_blank">
    //         <FaGithub className="gh-icon-project" />
    //       </a>
    //       <a href={application} target="_blank">
    //         {title}
    //       </a>
    //     </div>
    //   </button>

    <div className="project">
      <img src={image} alt={title} className="project-img" key={id} />
      <a href={application} target="_blank">
        {title}
      </a>
    </div>
  );
}
