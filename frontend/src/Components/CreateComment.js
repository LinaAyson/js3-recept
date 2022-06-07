import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Component for creating comments 
const CreateComment = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm()
    const { id } = useParams();

    /**
     * 
     * @param {*} comment 
     * 
     */
    function onFormSubmit(comment) {
        fetch('http://localhost:3001/comments/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment)
        }).then(() => {
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
                <input type="hidden" value={id} {...register('recipeId')} />
                <button className="btn comment-btn">Lägg till</button>
            </form>
        </div>
    );
}

export default CreateComment;