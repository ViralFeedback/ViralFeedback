import React, { FunctionComponent } from 'react';
import { formatRelative } from 'date-fns';
import ReactMarkdown from 'react-markdown';

const Job: FunctionComponent<any> = ({ data }) => {
    const { title, description, created_at } = data;

    const posted = formatRelative(Date.parse(created_at), new Date());

    return (
        <div>
            <h2 className="subtitle">{title}</h2>
            <p>
                <em>Posted {posted}</em>
            </p>
            <div className="content">
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Job;
