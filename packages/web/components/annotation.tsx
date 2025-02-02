import { formatRelative } from 'date-fns';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactMarkdown from 'react-markdown';
import TextTruncate from 'react-text-truncate';
import Link from 'next/link';

import dynamic from 'next/dynamic';

const ReactTinyLink = dynamic(
    () => import('react-tiny-link').then((mod) => mod.ReactTinyLink),
    { ssr: false }
);

export interface Range {
    endOffset: number;
    startOffset: number;
    endContainer: string;
    startContainer: string;
}

export interface Permissions {
    read: string[];
    admin: string[];
    update: string[];
    delete: string[];
}

export interface Selector {
    type: string;
    endOffset: number;
    startOffset: number;
    endContainer: string;
    startContainer: string;
    exact: string;
    prefix: string;
    suffix: string;
    end?: number;
    start?: number;
}

export interface Target {
    source: string;
    selector: Selector[];
}

export interface Document {
    title: string[];
}

export interface Links {
    html: string;
    incontext: string;
    json: string;
}

export interface UserInfo {
    display_name: string;
}

export interface IAnnotation {
    ranges?: Range[];
    consumer?: string;
    id?: string;
    created: Date;
    updated: Date;
    user: string;
    uri: string;
    text: string;
    tags: string[];
    group?: string;
    permissions?: Permissions;
    target: Target[];
    document?: Document;
    links: Links;
    flagged?: boolean;
    hidden: boolean;
    user_info: UserInfo;
}

export interface IAnnotationDataObject {
    data: any;
    compact: boolean;
    expanded: boolean;
}

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
}

const Annotation: FunctionComponent<IAnnotationDataObject> = ({
    data,
    compact,
    expanded
}) => {
    let quote;

    const [visible, setVisible] = useState(false);
    const [showExtendedQuote, setShowExtendedQuote] = useState(expanded);
    const [showExtendedText, setShowExtendedText] = useState(expanded);
    const [shareMenuOpen, setShareMenuOpen] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);

    const shareMenuRef = useRef(null);
    useOutsideAlerter(shareMenuRef);

    /**
     * Hook that alerts clicks outside of the passed ref
     */
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShareMenuOpen(false);
                }
            }

            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    const selector = data.target[0]?.selector;
    if (selector) {
        for (const i in selector) {
            if (selector[i].exact) quote = selector[i].exact;
        }
    }

    let annotationPublishedDate: any = data.updated;
    annotationPublishedDate = formatRelative(
        Date.parse(annotationPublishedDate),
        new Date()
    );

    const tags = data.tags;
    let color = '';
    data.tags.map((value, key) => {
        if (
            value.toLowerCase() === 'well supported' ||
            value.toLowerCase() === 'additional context' ||
            value.toLowerCase() === 'more context needed' ||
            value.toLowerCase() === 'needs more context' ||
            value.toLowerCase() === 'poorly supported'
        ) {
            if (key !== 0) {
                array_move(tags, key, 0);
            }
        }
        return null;
        // // TODO change card color based on type
        // if (value.toLowerCase() === 'well supported') color = 'is-success';
        // if (value.toLowerCase() === 'additional context') color = 'is-info';
        // if (value.toLowerCase() === 'more context needed') color = 'is-warning';
        // if (value.toLowerCase() === 'needs more context') color = 'is-warning';
        // if (value.toLowerCase() === 'poorly supported') color = 'is-danger';
    });

    const quoteLines = window && window.innerWidth > 520 ? 3 : 5;

    const handleArticleClick = (e) => {
        e.preventDefault();
        window.open(data.links.incontext, '_blank');
    };

    return (
        <article
            className={`media annotation card ${color}`}
            onClick={() => {
                setVisible(!visible);
            }}
        >
            <div className="media-content">
                <div className="content">
                    <a
                        href={`https://hypothes.is/users/${parseUserName(
                            data.user
                        )}`}
                    >
                        {data.user_info.display_name ? (
                            <span className="username">
                                <strong>{data.user_info.display_name}</strong>
                                <small> (@{parseUserName(data.user)})</small>
                            </span>
                        ) : (
                            <span className="username">
                                <strong>{parseUserName(data.user)}</strong>
                            </span>
                        )}
                    </a>{' '}
                    <small className="timestamp">
                        annotated {annotationPublishedDate}
                    </small>
                    <div className="annotation-content">
                        <ReactTinyLink
                            cardSize="small"
                            loadSecureUrl={true}
                            maxLine={2}
                            minLine={1}
                            proxyUrl={
                                process.env.NEXT_PUBLIC_PROXY
                                    ? process.env.NEXT_PUBLIC_PROXY
                                    : 'http://localhost:8080/proxy'
                            }
                            showGraphic={true}
                            url={data.target[0].source}
                            onClick={handleArticleClick}
                        />
                        {!compact || visible ? (
                            <>
                                {quote ? (
                                    <blockquote>
                                        <TextTruncate
                                            line={
                                                showExtendedQuote
                                                    ? 0
                                                    : quoteLines
                                            }
                                            element="span"
                                            truncateText="…"
                                            text={quote}
                                            textTruncateChild={
                                                <span
                                                    className="read-more-quote"
                                                    onClick={() =>
                                                        setShowExtendedQuote(
                                                            !showExtendedQuote
                                                        )
                                                    }
                                                >
                                                    Read on
                                                </span>
                                            }
                                        />
                                    </blockquote>
                                ) : null}
                                <div className="text">
                                    <ReactMarkdown
                                        className={`${
                                            !showExtendedText
                                                ? 'truncate-overflow'
                                                : ''
                                        }`}
                                    >
                                        {data.text}
                                    </ReactMarkdown>
                                    <span
                                        className="read-more-text"
                                        onClick={() =>
                                            setShowExtendedText(
                                                !showExtendedText
                                            )
                                        }
                                    >
                                        {showExtendedText ? (
                                            <span className="less">[Less]</span>
                                        ) : (
                                            '... Read More'
                                        )}
                                    </span>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>

                <nav className="level is-mobile">
                    <div className="level-left">
                        <div className="tags">
                            {data.tags.map((value, key) => {
                                return (
                                    <Link
                                        href={`/?tags=${value.toLowerCase()}`}
                                    >
                                        <span
                                            className={`tag  ${
                                                value.toLowerCase() ===
                                                'well supported'
                                                    ? 'is-success'
                                                    : ''
                                            } ${
                                                value.toLowerCase() ===
                                                'additional context'
                                                    ? 'is-info'
                                                    : ''
                                            } ${
                                                value.toLowerCase() ===
                                                    'more context needed' ||
                                                value.toLowerCase() ===
                                                    'needs more context'
                                                    ? 'is-warning'
                                                    : ''
                                            } ${
                                                value.toLowerCase() ===
                                                'poorly supported'
                                                    ? 'is-danger'
                                                    : ''
                                            }`}
                                            key={key}
                                        >
                                            {value}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="level-right actions">
                        <a
                            className="level-item has-tooltip-left"
                            data-tooltip="View in context"
                            href={data.links.incontext}
                        >
                            <span className="icon is-small">
                                <i className="fas fa-external-link-square-alt"></i>
                            </span>
                        </a>
                        <div
                            className={`dropdown is-up is-right ${
                                shareMenuOpen ? 'is-active' : ''
                            }`}
                        >
                            <div className="dropdown-trigger">
                                <a
                                    aria-haspopup="true"
                                    aria-controls="share-menu"
                                    data-tooltip="Sharable Link"
                                    className="has-tooltip-left"
                                    onClick={() =>
                                        setShareMenuOpen(!shareMenuOpen)
                                    }
                                    target="blank"
                                >
                                    <span className="icon is-small">
                                        <i className="fas fa-share-alt"></i>
                                    </span>
                                </a>
                            </div>
                            <div
                                className="dropdown-menu share-menu"
                                id="share-menu"
                                role="menu"
                            >
                                <div
                                    className="dropdown-content"
                                    ref={shareMenuRef}
                                >
                                    {
                                        // <div className="dropdown-item">
                                        //     <p className="control">
                                        //         <a
                                        //             className="bd-tw-button button is-default"
                                        //             data-social-network="Twitter"
                                        //             data-social-action="tweet"
                                        //             data-social-target={`https://viralfeedback.org/annotations/${data.id}`}
                                        //             target="_blank"
                                        //             rel="noopener noreferrer"
                                        //             href={`https://twitter.com/intent/tweet?text=Viral Feedback is a community of scientists providing science-based feedback about viral and pandemic topics in service of society.&amp;hashtags=viralfeedback&amp;url=https://viralfeedback.org/annotations/${data.id}`}
                                        //         >
                                        //             <span className="icon">
                                        //                 <i className="fab fa-twitter"></i>
                                        //             </span>
                                        //         </a>
                                        //     </p>
                                        // </div>
                                    }
                                    {
                                        // <hr className="dropdown-divider" />
                                    }
                                    <div className="dropdown-item">
                                        <p>
                                            Sharable Link:{' '}
                                            {linkCopied ? (
                                                <small className="timestamp">
                                                    (Copied to clipboard!)
                                                </small>
                                            ) : (
                                                ''
                                            )}
                                        </p>
                                        <div className="field has-addons">
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={`https://viralfeedback.org/annotations/${data.id}`}
                                                    readOnly={true}
                                                />
                                            </div>
                                            <div className="control">
                                                <CopyToClipboard
                                                    text={`https://viralfeedback.org/annotations/${data.id}`}
                                                    onCopy={() => {
                                                        setLinkCopied(true);
                                                        setTimeout(
                                                            () =>
                                                                setShareMenuOpen(
                                                                    false
                                                                ),
                                                            1000
                                                        );
                                                    }}
                                                >
                                                    <a className="button is-default">
                                                        <span className="icon">
                                                            <i className="far fa-copy"></i>
                                                        </span>
                                                    </a>
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </article>
    );
};

const parseUserName = (account: string) => {
    const username = account.match(/acct:(.*?)@/i)![1];
    return username;
};

export default dynamic(() => Promise.resolve(Annotation), {
    ssr: false
});
