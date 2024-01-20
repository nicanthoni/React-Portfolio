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
    application: "https://crockevin.github.io/Game-Hub/",
    github: "https://github.com/crockevin/Game-Hub",
    backgroundimage: "url('./assets/placeholder-projects.jpg')",
    title: "GameHub",
  },
  {
    id: 3,
    application: "https://nicanthoni.github.io/project-work-day-scheduler/",
    github: "https://github.com/nicanthoni/project-work-day-scheduler",
    backgroundimage: "url('./assets/placeholder-projects.jpg')",
    title: "Workday Scheduler",
  },
  {
    id: 4,
    application: "https://nicanthoni.github.io/project-weather-dashboard/",
    github: "https://github.com/nicanthoni/project-weather-dashboard",
    backgroundimage: "url('./assets/placeholder-projects.jpg')",
    title: "Weather Dash",
  },
  {
    id: 5,
    application: "",
    github: "https://github.com/nicanthoni?tab=repositories",
    backgroundimage: "url('./assets/placeholder-projects.jpg')",
    title: "Future App",
  },
  {
    id: 6,
    application: "",
    github: "https://github.com/nicanthoni?tab=repositories",
    backgroundimage: "url('./assets/placeholder-projects.jpg')",
    title: "Future App",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-container">
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
    </div>
  );
}
