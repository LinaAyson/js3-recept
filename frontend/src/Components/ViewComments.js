import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from 'react';

const ViewComments = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);

    // 3. Create out useEffect function
    useEffect(() => {
        fetch("http://localhost:3001/comments?recipeId=" + id)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setComments(data))
    }, [])

    return (
        <div className="com">
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