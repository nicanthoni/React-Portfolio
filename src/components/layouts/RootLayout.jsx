import { NavLink, Outlet } from "react-router-dom";
// React-icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiEyeglassesThin } from "react-icons/pi";



// Contains Header + Footer components
// Root layout = every 'page' should render with this layout via Outlet

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Nic Diaz <PiEyeglassesThin 
          className="header-icon"
          /></h1>
          <NavLink to="About">About</NavLink>
          <NavLink to="Contact">Contact</NavLink>
          <NavLink to="Portfolio">Portfolio</NavLink>
          <NavLink to="Resume">Resume</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <nav>
          <div className="icons">
            <a
              href="https://github.com/nicanthoni?tab=repositories"
              target="_blank"
            >
              <FaGithub 
              className="footer-icon"/>
            </a>
          </div>

          <div className="icons">
            <a href="https://www.linkedin.com/in/nicolasd13/" target="_blank">
              <FaLinkedin 
              className="footer-icon"/>
            </a>
          </div>

          <div className="icons">
            <a href="https://www.instagram.com/nicanthoni/" target="_blank">
              <FaInstagram 
              className="footer-icon"/>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}