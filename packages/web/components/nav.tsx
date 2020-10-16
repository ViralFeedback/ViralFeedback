import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import { Routes } from '../src/navigation/routes';
import SuggestArticleModal from './suggestArticleModal';
import Link from 'next/link';

interface INav extends RouteComponentProps {}

const Nav: FunctionComponent<any> = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const router = useRouter();

    return (
        <>
            <nav className="navbar is-transparent is-fixed-top">
                <div className="navbar-brand">
                    <a className="navbar-item logo" href="/">
                        <img
                            src="/virus.png"
                            alt="Virus <Logo></Logo>"
                            width="28"
                            height="28"
                        />
                    </a>
                    <a className="navbar-item" href="/">
                        <img
                            src="/title.png"
                            alt="Viral Feedback"
                            width="200"
                            height="28"
                        />
                    </a>
                    <div
                        className={`navbar-burger burger ${
                            menuOpen ? 'is-active' : ''
                        }`}
                        data-target="navbar"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div
                    id="navbar"
                    className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}
                >
                    <div className="navbar-start">
                        {Routes.map((value, key) => {
                            if (value.hidden) return null;
                            if (value.href) {
                                return (
                                    <a
                                        href={value.href}
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
                                    </a>
                                );
                            }
                            return (
                                <Link href={value.path} key={key}>
                                    <span
                                        className={`navbar-item ${
                                            router.pathname === value.path
                                                ? 'is-active'
                                                : ''
                                        }`}
                                    >
                                        {value.iconClassName ? (
                                            <i
                                                className={`sidebar-icon ${value.iconClassName}`}
                                            />
                                        ) : (
                                            ' '
                                        )}{' '}
                                        {value.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <span
                                        className="bd-tw-button button is-primary"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span className="icon">
                                            <i className="fas fa-inbox"></i>
                                        </span>
                                        <span>Suggest Article</span>
                                    </span>
                                </p>
                                <p className="control">
                                    <a
                                        className="bd-tw-button button is-info"
                                        data-social-network="Twitter"
                                        data-social-action="tweet"
                                        data-social-target="https://viralfeedback.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://twitter.com/intent/tweet?text=@Viral_Feedback is a community of scientists providing science-based feedback about viral and pandemic topics in service of society.&amp;url=https://viralfeedback.org"
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

            <SuggestArticleModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
            />
        </>
    );
};

export default Nav;
