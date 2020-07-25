import { formatRelative } from 'date-fns';
import React, { FunctionComponent, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ReactTinyLink } from 'react-tiny-link';
import TextTruncate from 'react-text-truncate';

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
    ranges: Range[];
    consumer: string;
    id: string;
    created: Date;
    updated: Date;
    user: string;
    uri: string;
    text: string;
    tags: string[];
    group: string;
    permissions: Permissions;
    target: Target[];
    document: Document;
    links: Links;
    flagged: boolean;
    hidden: boolean;
    user_info: UserInfo;
}

export interface IAnnotationDataObject {
    data: IAnnotation;
    compact: boolean;
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
    compact
}) => {
    let quote;

    const [visible, setVisible] = useState(false);
    const [showExtendedQuote, setShowExtendedQuote] = useState(false);
    const [showExtendedText, setShowExtendedText] = useState(false);

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
        // // TODO change card color based on type
        // if (value.toLowerCase() === 'well supported') color = 'is-success';
        // if (value.toLowerCase() === 'additional context') color = 'is-info';
        // if (value.toLowerCase() === 'more context needed') color = 'is-warning';
        // if (value.toLowerCase() === 'needs more context') color = 'is-warning';
        // if (value.toLowerCase() === 'poorly supported') color = 'is-danger';
    });

    return (
        <article
            className={`media annotation card ${color}`}
            onClick={() => setVisible(!visible)}
        >
            <div className="media-content">
                <div className="content">
                    <a
                        href={`https://hypothes.is/users/${parseUserName(
                            data.user
                        )}`}
                    >
                        <strong className="username">
                            {data.user_info.display_name
                                ? data.user_info.display_name
                                : parseUserName(data.user)}
                        </strong>
                    </a>{' '}
                    <small className="timestamp">
                        {annotationPublishedDate}
                    </small>
                    <div className="annotation-content">
                        <ReactTinyLink
                            cardSize="small"
                            loadSecureUrl={true}
                            maxLine={2}
                            minLine={1}
                            proxyUrl={
                                process.env.REACT_APP_PROXY
                                    ? process.env.REACT_APP_PROXY
                                    : 'http://localhost:8080/proxy'
                            }
                            showGraphic={true}
                            url={data.target[0].source}
                        />
                        {!compact || visible ? (
                            <>
                                {quote ? (
                                    <blockquote>
                                        <TextTruncate
                                            line={showExtendedQuote ? 0 : 3}
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
                                        setShowExtendedText(!showExtendedText)
                                    }
                                >
                                    {showExtendedText ? (
                                        <span className="less">[Less]</span>
                                    ) : (
                                        '... Read More'
                                    )}
                                </span>
                            </>
                        ) : null}
                    </div>
                </div>

                <nav className="level is-mobile">
                    <div className="level-left">
                        <div className="tags">
                            {data.tags.map((value, key) => {
                                return (
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
                                );
                            })}
                        </div>
                    </div>
                    <div className="level-right">
                        <a
                            className="level-item"
                            data-tooltip="View in context"
                            href={data.links.incontext}
                        >
                            <span className="icon is-small">
                                <i className="fas fa-external-link-square-alt"></i>
                            </span>
                        </a>
                        <a
                            className="level-item"
                            data-tooltip="Share this annotation"
                            href={data.links.html}
                        >
                            <span className="icon is-small">
                                <i className="fas fa-share-alt"></i>
                            </span>
                        </a>
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

export default Annotation;
