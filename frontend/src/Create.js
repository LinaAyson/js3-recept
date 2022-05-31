import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [meal, setMeal] = useState('');
    const [body, setBody] = useState('');
    const [chef, setChef] = useState('Lina');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { meal, body, chef };

        setIsPending(true);

        fetch('http://localhost:3002/api/insert', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log('Nytt recept tillagt');
            setIsPending(false);
            navigate('/');
        })

    }
    return (
        <div className="create">
            <h2>Lägg till ett recept</h2>
            <form onSubmit={handleSubmit}>
                <label>Maträtt:</label>
                <input
                    type="text"
                    required
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                />
                <label>Gör så här:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required>
                </textarea>

                <label>Recept tillagd av</label>
                <select
                    value={chef}
                    onChange={(e) => setChef(e.target.value)}>
                    <option value="Lina">Lina</option>
                    <option value="Carlos">Carlos</option>
                </select>
                {!isPending && <button>Lägg till recept</button>}
                {isPending && <button disabled>Lägger till recept</button>}
            </form>
        </div>
    );
}

export default Create;