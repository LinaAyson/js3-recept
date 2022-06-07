import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Component for creating comments 
const CreateComment = () => {
    const navigate = useNavigate();
    // UseForm custom hook for managing form
    const { register, handleSubmit } = useForm()
    const { id } = useParams();
    // Function for posting comment
    function onFormSubmit(comment) {
        fetch('http://localhost:3001/comments/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment)
        }).then(() => {
            // after posting comment -> then reload window
            window.location.reload();
        })
    }
    return (
        <div className="comments">
            <h4>Lägg till ny kommentar</h4>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label>Namn:</label>
                <input
                    type="text"
                    required
                    {...register('name')} />
                <label>Kommentar</label>
                <textarea
                    style={{ resize: "none" }}
                    {...register('body')} required>
                </textarea>
                {/* Inputtype hidden with id value and register recipeId */}
                <input type="hidden" value={id} {...register('recipeId')} />
                <button className="btn comment-btn">Lägg till</button>
            </form>
        </div>
    );
}
export default CreateComment;