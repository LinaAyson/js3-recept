import { Link } from "react-router-dom";
/**
 *  Component that shows an error msg if url is wrong
 * @returns error message and Link to homepage
 */
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Ops...!</h2>
            <p>Sidan kunde inte hittas</p>
            <Link to="/">Tillbaka till hemsidan</Link>
        </div>
    );
}

export default NotFound;
