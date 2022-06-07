import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        // Navbar with links to different locations
        // Used inline style and styled class-navbar in index.css
        <nav className="navbar">
            <Link to="/" ><h1>Veggie - Recept</h1></Link>
            <div className="links">
                <Link to="/" style={{
                    fontWeight: "700",
                    fontSize: "18px",
                    color: "#fa9084"
                }}> Alla recept </Link>
                <Link to="/create" style={{
                    color: "black",
                    fontWeight: "600",
                    backgroundColor: "#fa9084",
                    borderRadius: "10px"
                }}>Lägg till Recept</Link>
            </div>
        </nav>
    );
}

export default Navbar;