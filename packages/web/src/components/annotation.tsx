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
    if (data.target[0]?.selector) {
        // console.log(data.target[0]?.selector);
        quote = data.target[0]?.selector[1].exact;
    }
    // if (data.user_info.display_name === null) return null;

    return (
        <article className="media annotation">
            <div className="media-content">
                <div className="content">
                    {
                        // TODO if we like this feature we need to run our own proxy
                        // https://github.com/Rob--W/cors-anywhere
                        <ReactTinyLink
                            cardSize="small"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            url={data.target[0].source}
                        />
                    }
                    <div>
                        <strong>{data.user_info.display_name}</strong>{' '}
                        <small>{data.created}</small>
                        <br />
                        {quote ? <blockquote>{quote}</blockquote> : null}
                        <ReactMarkdown source={data.text} />
                    </div>
                </div>
                {
                    // <nav className="level is-mobile">
                    //     <div className="level-left">
                    //         <a className="level-item">
                    //             <span className="icon is-small">
                    //                 <i className="fas fa-reply"></i>
                    //             </span>
                    //         </a>
                    //         <a className="level-item">
                    //             <span className="icon is-small">
                    //                 <i className="fas fa-retweet"></i>
                    //             </span>
                    //         </a>
                    //         <a className="level-item">
                    //             <span className="icon is-small">
                    //                 <i className="fas fa-heart"></i>
                    //             </span>
                    //         </a>
                    //     </div>
                    // </nav>
                }
            </div>
        </article>
    );
};

export default Annotation;
