import Project from "../Project";

// Project data
const projects = [
  {
    id: 1,
    application:
      "https://constellation-application-b32a4fee0e20.herokuapp.com/",
    github: "https://github.com/ZekuzaKeane/andromeda",
    image: "url('../images/constellation.jpg')",
    title: "Constellation",
  },
  {
    id: 2,
    application: "https://crockevin.github.io/Game-Hub/",
    github: "https://github.com/crockevin/Game-Hub",
    image: "url('../images/gamehub-background.jpg')",
    title: "GameHub",
  },
  {
    id: 3,
    application: "https://nicanthoni.github.io/project-work-day-scheduler/",
    github: "https://github.com/nicanthoni/project-work-day-scheduler",
    image: "url('../images/workdayScheduler.jpg')",
    title: "Workday Scheduler",
  },
  {
    id: 4,
    application: "https://nicanthoni.github.io/project-weather-dashboard/",
    github: "https://github.com/nicanthoni/project-weather-dashboard",
    image: "url('../images//weather.jpg')",
    title: "Weather Dash",
  },
  {
    id: 5,
    application: "",
    github: "https://github.com/nicanthoni?tab=repositories",
    image: "url('../images/no-project.jpg')",
    title: "TBD",
  },
  {
    id: 6,
    application: "",
    github: "https://github.com/nicanthoni?tab=repositories",
    image: "url('../images/no-project.jpg')",
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
            image={project.image}
            title={project.title}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
