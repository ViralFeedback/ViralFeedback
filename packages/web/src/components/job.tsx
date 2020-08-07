import React, { FunctionComponent } from 'react';
import { formatRelative } from 'date-fns';

const Job: FunctionComponent<any> = ({ data }) => {
    const { title, description, created_at } = data;

    const posted = formatRelative(Date.parse(created_at), new Date());

    return (
        <div>
            <h2 className="subtitle">{title}</h2>
            <p>
                <em>Posted {posted}</em>
            </p>
            <div className="content">{description}</div>
        </div>
    );
};

export default Job;
