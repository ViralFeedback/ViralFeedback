import React, { FunctionComponent } from 'react';

const NotFound: FunctionComponent = () => {
    return (
        <section className="hero is-fullheight is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">404</h1>
                    <h2 className="subtitle">This page does not exist</h2>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
