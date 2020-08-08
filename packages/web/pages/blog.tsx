import React, { FunctionComponent } from 'react';
import EmptyState from 'components/emptyState';
import Loading from 'components/loading';
import Post from 'components/post';
import { usePostsQuery } from '../graphql';

const About: FunctionComponent = () => {
    const { data, loading } = usePostsQuery();

    if (loading) return <Loading />;

    const posts = data?.posts;

    return (
        <div>
            <section className="hero is-bold">
                <div className="hero-body">
                    {posts && posts.length > 0 ? (
                        <div className="container content">
                            <h1 className="title">Blog</h1>
                            <hr />
                            {posts.map((value, key) => {
                                const published = value?.published;
                                if (!published) return null;
                                return <Post data={value} key={key} />;
                            })}
                        </div>
                    ) : (
                        <EmptyState
                            className="margin-top"
                            iconClass="fas fa-comment-slash"
                            title="No posts"
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default About;
