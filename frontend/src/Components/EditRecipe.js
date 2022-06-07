import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Component for editing Recipe
const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const { register, handleSubmit, reset } = useForm()

    // useEffect function for fetching from /reecipes site + id
    useEffect(() => {
        fetch("http://localhost:3001/recipes/" + id)
            .then(response => response.json())
            .then(data => setRecipe(data))
    }, [])
    useEffect(() => {
        reset(recipe)
    }, [recipe])

    // Function for editing recipe by method PUT
    function onFormSubmit(recipe) {
        fetch('http://localhost:3001/recipes/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log(recipe);
            navigate('/');
        })
    }
    return (
        <div className="edit-recipe" style={{ textAlign: "center" }}>
            <h2>Ändra recept</h2>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label>Maträtt:</label>
                <input
                    type="text"
                    required
                    {...register('name')} />
                <label>Gör så här:</label>
                <textarea
                    style={{ resize: "none" }}
                    {...register('body')} required>
                </textarea>
                <label>Recept tillagd av</label>
                <select
                    {...register('chef')}>
                    <option value="Carlos">Carlos</option>
                    <option value="Lina">Lina</option>
                    <option value="Ana">Ana</option>
                </select>
                <button className="btn save-btn">Spara</button>
            </form>
        </div>
    );
}

export default EditRecipe;