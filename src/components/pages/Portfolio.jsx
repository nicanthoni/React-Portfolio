import Project from "../Project";

// Projects data
const projects = [
  {
    id: 1,
    application: "https://messeger-8qqs.onrender.com/",
    github: "https://github.com/crockevin/Messenger",
    image: "/images/pulse.png",
    title: "Pulse",
  },
  {
    id: 2,
    application:
      "https://constellation-application-b32a4fee0e20.herokuapp.com/",
    github: "https://github.com/ZekuzaKeane/andromeda",
    image: "/images/constellation.png",
    title: "Constellation",
  },
  {
    id: 3,
    application: "https://crockevin.github.io/Game-Hub/",
    github: "https://github.com/crockevin/Game-Hub",
    image: "/images/gamehub.png",
    title: "GameHub",
  },
  {
    id: 4,
    application: "https://nicanthoni.github.io/project-work-day-scheduler/",
    github: "https://github.com/nicanthoni/project-work-day-scheduler",
    image: "/images/workdayscheduler.png",
    title: "Workday Scheduler",
  },
  {
    id: 5,
    application: "https://nicanthoni.github.io/project-weather-dashboard/",
    github: "https://github.com/nicanthoni/project-weather-dashboard",
    image: "/images//weatherdash.png",
    title: "Weather Dash",
  },
  {
    id: 6,
    application: "",
    github: "https://github.com/nicanthoni?tab=repositories",
    image: "/images/no-project.jpg",
    title: "TBD",
  },
  // {
  //   id: 7,
  //   application: "",
  //   github: "https://github.com/nicanthoni?tab=repositories",
  //   image: "/images/no-project.jpg",
  //   title: "TBD",
  // },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Projects</h2>
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
