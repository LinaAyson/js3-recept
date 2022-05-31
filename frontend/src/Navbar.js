import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>BRF Nabo</h1>
            <div className="links">
                <Link to="/" style={{ fontWeight: "700", fontSize: "18px" }}> Alla recept </Link>
                <Link to="/create" style={{
                    color: "white",
                    fontWeight: "500",
                    backgroundColor: "#ff006c ",
                    borderRadius: "20px"
                }}>Lägg till Recept</Link>
            </div>
        </nav>
    );
}

export default Navbar;