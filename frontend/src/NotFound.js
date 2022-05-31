import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Ursäkta</h2>
            <p>Sidan kunde inte hittas</p>
            <Link to="/">Tillbaka till hemsidan</Link>
        </div>
    );
}


export default NotFound;
