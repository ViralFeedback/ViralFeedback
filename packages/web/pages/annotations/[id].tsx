import React, { FunctionComponent } from 'react';
import Annotation from '../../components/annotation';
import EmptyState from '../../components/emptyState';
import Loading from '../../components/loading';
import Meta from '../../components/meta';
import { useAnnotationQuery } from '../../src/graphql';
import { useRouter } from 'next/router';
import { withApollo } from '../../src/apollo';
import Head from 'next/head';

const SingleAnnotation: FunctionComponent = () => {
    const router = useRouter();

    const { id } = router.query;

    const { data, loading } = useAnnotationQuery({
        variables: {
            id
        }
    });

    if (loading) return <Loading />;

    const description = data.annotation.text
        ? data.annotation.text.substring(0, 240)
        : '';

    return (
        <div className="annotation-feed container">
            <Meta
                description={description}
                title="Viral Feedback Annotation"
                url={`https://viralfeedback.org/annotations/${data.annotation.id}`}
            />
            {data && data.annotation ? (
                <>
                    <Annotation
                        compact={false}
                        data={data.annotation}
                        expanded={true}
                    />
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

export default withApollo({ ssr: true })(SingleAnnotation);
