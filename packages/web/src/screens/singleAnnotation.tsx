import React, { FunctionComponent } from 'react';
import Annotation from 'components/annotation';
import EmptyState from 'components/emptyState';
import Loading from 'components/loading';
import { useAnnotationQuery } from '../graphql';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SingleAnnotation: FunctionComponent = () => {
    const { id } = useParams();

    const { data, loading } = useAnnotationQuery({
        variables: {
            id
        }
    });

    if (loading) return <Loading />;

    return (
        <div className="annotation-feed container">
            {data && data.annotation ? (
                <>
                    <Helmet>
                        <title>Viral Feedback Annotation</title>
                        <meta property="og:type" content="website" />
                        <meta
                            name="description"
                            content={
                                data.annotation.text
                                    ? data.annotation.text.substring(0, 240)
                                    : ''
                            }
                        />
                        <meta property="og:image" content="/virus.png" />
                    </Helmet>
                    <Annotation compact={false} data={data.annotation} />
                </>
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
