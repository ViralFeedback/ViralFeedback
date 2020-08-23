import React, { FunctionComponent } from 'react';
import EmptyState from '../../components/emptyState';
import Loading from '../../components/loading';
import Meta from '../../components/meta';
import Post from '../../components/post';
import { useRouter } from 'next/router';
import { usePostQuery } from '../../src/graphql';

import { initializeApollo } from '../../src/apolloClient';
import { getDataFromTree } from '@apollo/react-ssr';

const Blog: FunctionComponent = () => {
    const router = useRouter();

    const { id } = router.query;

    const { data, loading } = usePostQuery({
        variables: {
            id
        }
    });

    if (loading) return <Loading />;

    const post = data?.post;

    if (!post.published) return null;

    return (
        <div>
            <Meta />
            <section className="hero is-bold">
                <div className="hero-body">
                    {post ? (
                        <div className="container content">
                            <Post data={post} />
                        </div>
                    ) : (
                        <EmptyState
                            className="margin-top"
                            iconClass="fas fa-comment-slash"
                            title="No post"
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;
