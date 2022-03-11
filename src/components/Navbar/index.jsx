import { NavLink } from "react-router-dom";

// == CSS
import "./Navbar.scss";

const Navbar = () => (
    <nav className="navbar">
        <NavLink
            exact="true"
            to="/"
            className="navbar-link"
            activeClassName="active"
        >
            Home
        </NavLink>
        <NavLink
            exact="true"
            to="/map"
            className="navbar-link"
            activeClassName="active"
        >
            Map
        </NavLink>
    </nav>
);

export default Navbar;
