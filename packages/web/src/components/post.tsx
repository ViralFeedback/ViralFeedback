import React, { FunctionComponent } from 'react';

const Post: FunctionComponent<any> = ({ data }) => {
    const { title, content, created_at, updated_at, image, categories } = data;

    return (
        <div className="container">
            <img src={image.url} className="image" />
            <h2 className="title">{title}</h2>
            <h5 className="subtitle is-5">{created_at}</h5>
            <div className="content">{content}</div>
        </div>
    );
};

export default Post;
