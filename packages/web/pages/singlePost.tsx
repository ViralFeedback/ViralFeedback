import React, { FunctionComponent } from 'react';
import EmptyState from 'components/emptyState';
import Loading from 'components/loading';
import Post from 'components/post';
import { usePostQuery } from '../graphql';
import { useParams } from 'react-router-dom';

const SinglePost: FunctionComponent = () => {
    const { id } = useParams();

    const { data, loading } = usePostQuery({
        variables: {
            id
        }
    });

    if (loading) return <Loading />;

    return (
        <div className="annotation-feed container">
            {data && data.post ? (
                <>
                    <Post data={data.post} />
                </>
            ) : (
                <EmptyState
                    title="Post does not exist"
                    iconClass="fa fa-comments"
                />
            )}
        </div>
    );
};

export default SinglePost;
