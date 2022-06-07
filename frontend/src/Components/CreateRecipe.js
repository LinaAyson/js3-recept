import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const CreateRecipe = () => {
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const { register, handleSubmit, reset } = useForm()

    function onFormSubmit(recipe) {
        fetch('http://localhost:3001/recipes/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log(recipe);
            navigate('/');
        })
    }
    return (
        <div className="create" style={{ textAlign: "center" }}>
            <h2>Lägg till nytt recept</h2>
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
                    {...register('chef')}
                >
                    <option value="Carlos">Carlos</option>
                    <option value="Lina">Lina</option>
                    <option value="Ana">Ana</option>
                </select>
                <button className="btn">Lägg till</button>
            </form>
        </div>
    );
}

export default CreateRecipe;