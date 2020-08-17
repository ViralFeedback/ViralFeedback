import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="columns">
                        <div className="column is-12">
                            <div>
                                <img
                                    className="small-footer-logo"
                                    src=""
                                    alt=""
                                />
                                <div className="footer-description pt-10 pb-10">
                                    Built with love by Viral Feedback.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
