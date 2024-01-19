import { NavLink, Outlet } from "react-router-dom";

// Root layout = every 'page' should render with this layout, through 'Outlet'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Nic D.</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="About">About</NavLink>
          <NavLink to="Contact">Contact</NavLink>
          <NavLink to="Portfolio">Portfolio</NavLink>
          <NavLink to="Resume">Resume</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
