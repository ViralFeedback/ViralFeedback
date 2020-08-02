import React, { FunctionComponent } from 'react';

const Post: FunctionComponent<any> = ({ data }) => {
    const { title, description } = data;

    return (
        <div>
            <h2 className="subtitle">{title}</h2>
            <div className="content">{description}</div>
        </div>
    );
};

export default Post;
