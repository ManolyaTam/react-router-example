const Header = ({ setPage }: { setPage: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <nav className="navbar">
            <button onClick={() => setPage("home")} className="nav-button">Home</button>
            <button onClick={() => setPage("about")} className="nav-button">About</button>
            <button onClick={() => setPage("signin")} className="nav-button">Sign In</button>
        </nav>
    )
}

export default Header;