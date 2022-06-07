import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../UseFetch";
import React, { useState } from 'react';
import CreateComment from "./CreateComment";
import ViewComments from "./ViewComments";

// UseParam hook to return key value of id that matched RoutePath
const ViewRecipe = () => {
    const { id } = useParams();
    const [isPending, setIsPending] = useState(false);
    // data = recipe and error = fetch data from recipes site
    const { data: recipe, error } = useFetch('http://localhost:3001/recipes/' + id);
    // UseNavigate returns function so I can navigate programmatically
    const navigate = useNavigate();
    // handleDelete fetches data from recipes site + specific recipeId 
    // and has method DELETE
    const handleDelete = () => {
        fetch('http://localhost:3001/recipes/' + recipe.id, {
            method: 'DELETE'
        })
        //Navigate function returns to homesite
        navigate("/")
    }

    return (
        <div className="recipe-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {/*  if recipe is true show article*/}
            {recipe && (
                <article>
                    <h2>{recipe.name}</h2>
                    <p>Tillagd av: {recipe.chef}</p>
                    <div>{recipe.body}</div>
                    <div className="d-flex justify-content-center">
                        <button onClick={handleDelete} className="mr-5 btn delete-btn">Radera recept</button>
                        <a href={'/edit/' + recipe.id} className="btn edit-btn">Ändra recept </a>
                    </div>
                    < CreateComment />
                    < ViewComments />
                </article>
            )
            }
        </div>
    );
}

export default ViewRecipe;