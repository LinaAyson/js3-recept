import RecipeList from "./RecipeList";
import UseFetch from "./UseFetch";
import React from "react";


const Home = () => {
    const { data: recipes, isPending, error } = UseFetch('http://localhost:3002/recipes');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {recipes && <RecipeList recipes={recipes} title="Alla recept" />}

        </div>


    );
}


export default Home;
