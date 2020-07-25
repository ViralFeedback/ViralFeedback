import React, { FunctionComponent } from 'react';
import Annotation from 'components/annotation';
import EmptyState from 'components/emptyState';
import Loading from 'components/loading';
import { useAnnotationQuery } from '../graphql';
import { useParams } from 'react-router-dom';

const SingleAnnotation: FunctionComponent = () => {
    const { id } = useParams();

    const { data, loading } = useAnnotationQuery({
        variables: {
            id
        }
    });

    console.log(data);

    if (loading) return <Loading />;

    return (
        <div className="annotation-feed container">
            {data && data.annotation ? (
                <Annotation compact={false} data={data.annotation} />
            ) : (
                <EmptyState
                    title="Annotation does not exist"
                    iconClass="fa fa-comments"
                />
            )}
        </div>
    );
};

export default SingleAnnotation;
