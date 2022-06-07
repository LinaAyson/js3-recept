import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from 'react';
// Component for viewing comments
const ViewComments = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);

    // useEffect function for fetching comments and specific recipeId
    useEffect(() => {
        fetch("http://localhost:3001/comments?recipeId=" + id)
            .then(response => response.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div className="com">
            {/* Map method to map through comments */}
            {comments.map((comment) => (
                <div className="view-comments" key={comment.id}>
                    <p><b>{comment.name}</b> <i>skriver:</i></p>
                    <p>{comment.body}</p>
                </div>
            ))
            }
        </div>
    );
}

export default ViewComments;