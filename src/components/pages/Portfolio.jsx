import Project from "../Project";

// Project data
const projects = [
  {
    id: 1,
    application:
      "https://constellation-application-b32a4fee0e20.herokuapp.com/",
    github: "https://github.com/ZekuzaKeane/andromeda",
    backgroundimage: "url('../src/assets/constellation.jpg')",
    title: "Constellation",
  },
  {
    id: 2,
    application: "https://crockevin.github.io/Game-Hub/",
    github: "https://github.com/crockevin/Game-Hub",
    backgroundimage: "url('../src/assets/gamehub-background.jpg')",
    title: "GameHub",
  },
  {
    id: 3,
    application: "https://nicanthoni.github.io/project-work-day-scheduler/",
    github: "https://github.com/nicanthoni/project-work-day-scheduler",
    backgroundimage: "url('../src/assets/workdayScheduler.jpg')",
    title: "Workday Scheduler",
  },
  {
    id: 4,
    application: "https://nicanthoni.github.io/project-weather-dashboard/",
    github: "https://github.com/nicanthoni/project-weather-dashboard",
    backgroundimage: "url('../src/assets/weather.jpg')",
    title: "Weather Dash",
  },
  {
    id: 5,
    application: "",
    github: "https://github.com/nicanthoni?tab=repositories",
    backgroundimage: "url('../src/assets/no-project.jpg')",
    title: "TBD",
  },
  {
    id: 6,
    application: "",
    github: "https://github.com/nicanthoni?tab=repositories",
    backgroundimage: "url('../src/assets/no-project.jpg')",
    title: "TBD",
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
