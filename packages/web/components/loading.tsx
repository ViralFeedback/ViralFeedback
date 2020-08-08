import React, { FunctionComponent } from 'react';

const Loading: FunctionComponent = () => {
    return (
        <>
            <progress
                className="progress is-medium is-dark"
                max="100"
            ></progress>
        </>
    );
};

export default Loading;
