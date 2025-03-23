import { NavLink } from "react-router";

const Header = () => {

    return (
        <nav className="navbar">
            <NavLink className="nav-button" to="/">Home</NavLink>
            <NavLink className="nav-button" to={{ pathname: "/about" }}>About</NavLink>
            <NavLink className="nav-button" to={{ pathname: "/signin" }}>Sign In</NavLink>
        </nav>
    )
}

export default Header;