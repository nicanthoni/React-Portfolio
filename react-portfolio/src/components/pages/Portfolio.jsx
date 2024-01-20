import Project from "../Project";

// 6 apps with links to both the deployed applications & the corresponding GitHub repository

const projects = [
  {
    id: 1,
    application: "https://nicanthoni.github.io/project-professional-portfolio/",
    github: "https://github.com/nicanthoni?tab=repositories",
    backgroundimage: `"url('./assets/placeholder-projects.jpg')"`,
    title: "Constellation",
  },
  {
    id: 2,
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
  {
    id: 3,
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
  {
    id: 4,
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
  {
    id: 5,
    application: "",
    github: "",
    backgroundimage: "",
    title: "",
  },
  {
    id: 6,
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
      {projects.map((project) => (
        <Project
          key={project.id}
          application={project.application}
          id={project.id}
          backgroundimage={project.backgroundimage}
          title={project.title}
          github={project.github}
        />
      ))}
    </div>
  );
}
