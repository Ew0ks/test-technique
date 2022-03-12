// == Import npm
import { NavLink } from "react-router-dom";

// == Import style
import "./Navbar.scss";

// == component
const Navbar = () => (
    <nav className="navbar">
        <NavLink
            exact="true"
            to="/"
            className="navbar-link"
        >
            Home
        </NavLink>
        <NavLink
            exact="true"
            to="/map"
            className="navbar-link"
        >
            Map
        </NavLink>
    </nav>
);

// == Export component
export default Navbar;
