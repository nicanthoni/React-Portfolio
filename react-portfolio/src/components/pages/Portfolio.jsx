import Project from "../Project";

// 6 apps with links to both the deployed applications & the corresponding GitHub repository

const projects = [
  {
    application: "https://nicanthoni.github.io/project-professional-portfolio/",
    github: "https://github.com/nicanthoni?tab=repositories",
    backgroundimage: "url('./assets/placeholder-projects.jpg')",
    title: "constellation",
  },
  {
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
  {
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
  {
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
  {
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
  {
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <Project
        // application={application}
        // backgroundimage={backgroundimage}
        // title={title}
        // github={github}
        // projects={projects}
      />
    </div>
  );
}
