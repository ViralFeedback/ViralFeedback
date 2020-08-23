import React, { FunctionComponent } from 'react';
import Annotation from '../../components/annotation';
import EmptyState from '../../components/emptyState';
import Loading from '../../components/loading';
import Meta from '../../components/meta';
import { AnnotationDocument } from '../../src/graphql';
import { useQuery } from '@apollo/react-hooks';

import { useRouter } from 'next/router';
import { withApollo } from '../../src/withApollo';
import Head from 'next/head';

import { initializeApollo } from '../../src/apolloClient';

const SingleAnnotation: FunctionComponent = (props) => {
    const router = useRouter();

    const { id } = router.query;

    const { data, loading } = useQuery(AnnotationDocument, {
        ssr: false,
        variables: {
            id
        }
    });

    if (loading) {
        return (
            <>
                <Meta
                    description={props.annotation.text.substring(0, 240)}
                    title={`Viral Feedback Annotation`}
                    url={`https://viralfeedback.org/annotations/${props.annotation.id}`}
                />
                <Loading />
            </>
        );
    }

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

SingleAnnotation.getInitialProps = async function ({ query }) {
    if (typeof window == 'undefined') {
        const apolloClient = initializeApollo();
        let {
            data: { annotation }
        } = await apolloClient.query({
            query: AnnotationDocument,
            variables: {
                id: query.id
            }
        });
        return { annotation };
    }
    return { annotation: null };
};

export default SingleAnnotation;
