import React from 'react';
import { Link } from "react-router-dom";

function Post({ title, content, id }) {
    return (
        <div className='post'>
            <h3 className='post__title'>{title}</h3>
            <p className='post__content'>{content}</p>
            <Link to={`/posts/${id}`}>Перейти</Link>
        </div>
    );
}

export default Post;