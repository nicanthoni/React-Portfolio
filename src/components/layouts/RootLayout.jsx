// Contains Header + Footer components
// Every 'page' will render with this layout through Outlet

import { NavLink, Outlet } from "react-router-dom";

// React-icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



// Display/hide sidebar on click
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <div className="sidebar">
            <NavLink
              className="exit-button"
              onClick={() => hideSidebar()}
              to="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </NavLink>
            <NavLink
              className="side-button"
              onClick={() => hideSidebar()}
              to="About"
            >
              About
            </NavLink>
            <NavLink
              className="side-button"
              onClick={() => hideSidebar()}
              to="Contact"
            >
              Contact
            </NavLink>
            <NavLink
              className="side-button"
              onClick={() => hideSidebar()}
              to="Portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              className="side-button"
              onClick={() => hideSidebar()}
              to="Resume"
            >
              Resume
            </NavLink>
          </div>

          <h1 className="header-name">Nic Diaz</h1>
          <NavLink className="hideOnMobile main-nav" to="About">
            About
          </NavLink>
          <NavLink className="hideOnMobile main-nav" to="Contact">
            Contact
          </NavLink>
          <NavLink className="hideOnMobile main-nav" to="Portfolio">
            Portfolio
          </NavLink>
          <NavLink className="hideOnMobile main-nav" to="Resume">
            Resume
          </NavLink>
          <NavLink
            className="menu-button main-nav"
            onClick={() => showSidebar()}
            to="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <nav>
          <div>
            <a
              href="https://github.com/nicanthoni?tab=repositories"
              target="_blank"
            >
              <FaGithub className="footer-icon" />
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/nicolasd13/" target="_blank">
              <FaLinkedin className="footer-icon" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
