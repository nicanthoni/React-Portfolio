import { NavLink, Outlet, Link } from "react-router-dom";
// import { faGithub } from "font-awesome";


// Contains Header + Footer components
// Root layout = every 'page' should render with this layout via Outlet

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Nic</h1>
          <NavLink to="About">About</NavLink>
          <NavLink to="Contact">Contact</NavLink>
          <NavLink to="Portfolio">Portfolio</NavLink>
          <NavLink to="Resume">Resume</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      {/*   icon links to the developer’s GitHub and LinkedIn profiles, and to 3rd platform (Stack Overflow, Twitter) */}
      <footer>
        <nav>
          {/* <FontAwesomeIcon icon={faGithub} /> */}
          <NavLink to="https://github.com/nicanthoni" target="_blank">
            GitHub
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/nicolasd13/" target="_blank">
            LinkedIn
          </NavLink>
          <NavLink to="https://www.instagram.com/nicanthoni/" target="_blank">
            Instagram
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}
