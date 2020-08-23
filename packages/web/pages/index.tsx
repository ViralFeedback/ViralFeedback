import React, { FunctionComponent, useState } from 'react';
import Annotation from '../components/annotation';
import EmptyState from '../components/emptyState';
import Loading from '../components/loading';
import Meta from '../components/meta';
import SearchMenu from '../components/searchMenu';
import { useAnnotationsQuery } from '../src/graphql';
import Select from 'react-select';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const HomeFeed: FunctionComponent = () => {
    const [compactView, setCompactView] = useState(false);

    const variables: any = {
        _separate_replies: true,
        limit: 100,
        group: process.env.NEXT_PUBLIC_HYPOTHESIS_GROUP_ID
            ? process.env.NEXT_PUBLIC_HYPOTHESIS_GROUP_ID
            : 'igRizgwB',
        offset: 0
    };

    const router = useRouter();
    const { topic, quality, text } = router.query;

    if (text && text !== '') variables.any = text;

    let tags: string[] = [];
    if (quality && quality !== 'undefined') {
        tags.push(decodeURI(quality));
    }
    if (topic && topic !== 'undefined') {
        tags.push(decodeURI(topic));
    }
    if (tags.length > 0) variables.tags = tags;

    const { data, loading, error, refetch } = useAnnotationsQuery({
        variables,
        pollInterval: 30000
    });

    if (error) console.log(error);

    if (loading) return <Loading />;

    const annotations: any = data?.annotations?.rows;
    const total = data?.annotations?.total;

    return (
        <>
            <Meta />
            <div className="annotation-feed container">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h2 className="title is-5">
                                Providing scientific perspectives on public
                                information regarding COVID-19... one annotation
                                at a time.{' '}
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="level search-bar is-mobile">
                    <div className="level-left">
                        <div className="level-item subtitle is-5 results">
                            <strong>{total ? total : 0}</strong>
                            <span style={{ paddingLeft: 7 }}>results</span>
                        </div>
                        <div className="level-item field has-addons">
                            <p className="control">
                                <button
                                    className={`button ${
                                        !compactView
                                            ? 'is-selected is-success'
                                            : ''
                                    } has-tooltip-bottom`}
                                    data-tooltip="Expanded View"
                                    onClick={() => setCompactView(!compactView)}
                                >
                                    <span className="icon is-small">
                                        <i className="fas fa-comment-alt"></i>
                                    </span>
                                </button>
                            </p>
                            <p className="control">
                                <button
                                    className={`button ${
                                        compactView
                                            ? 'is-selected is-success'
                                            : ''
                                    } has-tooltip-bottom`}
                                    data-tooltip="List View"
                                    onClick={() => setCompactView(!compactView)}
                                >
                                    <span className="icon is-small">
                                        <i className="fas fa-list"></i>
                                    </span>
                                </button>
                            </p>
                        </div>
                    </div>
                    <SearchMenu />
                </div>
                <div className="has-text-centered">
                    {annotations && annotations.length !== 0 ? (
                        annotations.map((value, key) => {
                            return (
                                <Annotation
                                    compact={compactView}
                                    data={value}
                                    key={key}
                                    expanded={false}
                                />
                            );
                        })
                    ) : (
                        <EmptyState
                            className="margin-top"
                            iconClass="fas fa-comment-slash"
                            title="No annotations"
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(HomeFeed), {
    ssr: false
});
