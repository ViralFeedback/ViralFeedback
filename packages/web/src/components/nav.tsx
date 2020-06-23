import React, { FunctionComponent } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Routes } from '../navigation/routes';

interface INav extends RouteComponentProps {}

const Nav: FunctionComponent<any> = () => {
    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img
                        src="virus.png"
                        alt="Viral Feedback"
                        width="28"
                        height="28"
                    />
                </a>
                <div className="navbar-burger burger" data-target="navbar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbar" className="navbar-menu">
                <div className="navbar-start">
                    {Routes.map((value, key) => {
                        return (
                            <Link
                                to={value.path}
                                key={key}
                                className="navbar-item"
                            >
                                {value.iconClassName ? (
                                    <i
                                        className={`sidebar-icon ${value.iconClassName}`}
                                    />
                                ) : (
                                    ' '
                                )}{' '}
                                {value.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a
                                    className="bd-tw-button button"
                                    data-social-network="Twitter"
                                    data-social-action="tweet"
                                    data-social-target="https://bulma.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://twitter.com/intent/tweet?text=Viral Feedback&amp;hashtags=factcheck&amp;url=https://viralfeedback.org"
                                >
                                    <span className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                    <span>Tweet</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
