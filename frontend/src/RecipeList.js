import { Link } from "react-router-dom";

const RecipeList = ({ recipes, title, }) => {

    return (
        <div className="recipe-list">
            <h2>{title}</h2>
            {recipes.map((recipe) => (
                <div className="recipe-prev" key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>
                        <h2>{recipe.foodname}</h2>
                        <p>Recept av {recipe.foodchef}</p>
                    </Link>
                </div>

            ))}
        </div>
    );
}

export default RecipeList;