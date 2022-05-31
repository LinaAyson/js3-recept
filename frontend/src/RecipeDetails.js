import { useParams } from "react-router-dom";
import UseFetch from './UseFetch';
import { useNavigate } from "react-router-dom";

const RecipeDetails = () => {
    const { id } = useParams();
    const { data: recipe, error, isPending } = UseFetch('http://localhost:3002/recipes/' + id);
    const navigate = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:3002/recipes/delete/' + recipe[0].id, {
            method: 'POST'
        }).then(() => {
            navigate('/')
        })
    };

    return (
        <div className="recipe-details">
            {isPending && <div>Laddar...</div>}
            {error && <div> {error} </div>}
            {recipe && (
                <article>
                    <h2>{recipe[0].foodname}</h2>
                    <p>Skriven av {recipe[0].foodchef}</p>
                    <div>{recipe[0].foodbody}</div>
                    <button onClick={handleClick}>Radera</button>
                </article>
            )}
        </div>
    );
}

export default RecipeDetails;