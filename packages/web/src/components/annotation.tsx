import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { ReactTinyLink } from 'react-tiny-link';

import { parseJSON, formatRelative, formatRFC3339 } from 'date-fns';

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
}

const Annotation: FunctionComponent<IAnnotationDataObject> = ({ data }) => {
    let quote;

    const selector = data.target[0]?.selector;
    if (selector) {
        for (const i in selector) {
            if (selector[i].exact) quote = selector[i].exact;
        }
    }

    return (
        <article className="media annotation card">
            <div className="media-content">
                <div className="content">
                    <ReactTinyLink
                        cardSize="small"
                        loadSecureUrl={true}
                        maxLine={2}
                        minLine={1}
                        showGraphic={true}
                        url={data.target[0].source}
                    />
                    <br />
                    <div>
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
                        <small>{data.created}</small>
                        <br />
                        {quote ? <blockquote>{quote}</blockquote> : null}
                        <ReactMarkdown source={data.text} />
                    </div>
                </div>
                <div className="tags">
                    {data.tags.map((value, key) => {
                        return (
                            <span className="tag" key={key}>
                                {value}
                            </span>
                        );
                    })}
                </div>
                <nav className="level">
                    <div className="level-left">
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
