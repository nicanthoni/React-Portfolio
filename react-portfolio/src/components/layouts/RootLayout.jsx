import {NavLink} from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Nic D.</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to ='About'>About</NavLink>
                    <NavLink to ='Contact'>Contact</NavLink>
                    <NavLink to ='Portfolio'>Portfolio</NavLink>
                    <NavLink to ='Resume'>Resume</NavLink>
                </nav>
            </header>
        </div>
    )
}