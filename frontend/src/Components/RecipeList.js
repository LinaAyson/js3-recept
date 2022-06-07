import React from 'react';
import { Link } from "react-router-dom";
import useFetch from "../UseFetch";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


const RecipeList = () => {
    const [query, setQuery] = useState("")
    const { data: recipes, error, isPending } = useFetch('http://localhost:3001/recipes?name_like=' + query);
    return (
        <div>
            <p className="icon"><FaSearch /></p>
            <input placeholder="Sök recept" onChange={event => setQuery(event.target.value)} className="search-bar" />
            <br></br>
            <div className="all-recipes">
                <h2 style={{
                    color: "#fa9084",
                    backgroundColor: "#200D0D",
                    padding: "10px"
                }}>Alla recept</h2>
                {isPending && <div>Laddar...</div>}
                {error && <div>{error}</div>}
                {/* If the data is present, then proceed*/}
                {recipes && recipes.map((recipe) => (
                    <div className="recipe-prev" key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                            <h2>{recipe.name}</h2>
                            <p>Recept av {recipe.chef}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeList;