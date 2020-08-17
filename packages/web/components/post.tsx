import React, { FunctionComponent } from 'react';
import { formatRelative } from 'date-fns';
import ReactMarkdown from 'react-markdown';

const Post: FunctionComponent<any> = ({ data }) => {
    const { title, content, created_at, updated_at, image, categories } = data;

    const posted = formatRelative(Date.parse(created_at), new Date());

    return (
        <div className="container">
            {image.url ? <img src={image.url} className="image" /> : null}
            <h2 className="title">{title}</h2>
            <p>
                <em>Posted {posted}</em>
            </p>
            <h5 className="subtitle is-5">{created_at}</h5>
            <div className="content">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Post;
