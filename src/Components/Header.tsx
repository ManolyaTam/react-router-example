import { NavLink } from "react-router";

const Header = (/*{ setPage }: { setPage: React.Dispatch<React.SetStateAction<string>> }*/) => {

    return (
        <nav className="navbar">
            <NavLink className="nav-button" to="/">Home</NavLink>
            <NavLink className="nav-button" to={{ pathname: "/about" }}>About</NavLink>
            <NavLink className="nav-button" to={{ pathname: "/signin" }}>Sign In</NavLink>


            {/* <button onClick={() => setPage("home")} className="nav-button">Home</button> */}
            {/* <button onClick={() => setPage("about")} className="nav-button">About</button> */}
            {/* <button onClick={() => setPage("signin")} className="nav-button">Sign In</button> */}
        </nav>
    )
}

export default Header;