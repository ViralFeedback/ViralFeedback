import React, { FunctionComponent } from 'react';

interface IEmptyState {
    className: string;
    iconClass: string;
    subtitle?: string;
    title: string;
}

const Loading: FunctionComponent<IEmptyState> = ({
    className,
    iconClass,
    subtitle,
    title
}) => {
    return (
        <div className={`has-text-centered ${className}`}>
            <span className="icon is-large">
                <i className={`fa-2x ${iconClass}`} />
            </span>
            <h1 className="title">{title}</h1>
            {subtitle ? <h2 className="subtitle">{subtitle}</h2> : null}
        </div>
    );
};

export default Loading;
