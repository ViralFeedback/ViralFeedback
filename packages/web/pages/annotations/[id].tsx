import React, { FunctionComponent } from 'react';
import Annotation from '../../components/annotation';
import EmptyState from '../../components/emptyState';
import Loading from '../../components/loading';
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
            {data && data.annotation ? (
                <>
                    <Head>
                        <title>Viral Feedback Annotation</title>
                        <meta
                            name="title"
                            content="Viral Feedback Annotation"
                            key="title"
                        />
                        <meta
                            name="description"
                            content={description}
                            key="description"
                        />
                        <meta
                            property="og:title"
                            content="Viral Feedback Annotation"
                            key="og:title"
                        />
                        <meta
                            property="og:description"
                            content={description}
                            key="og:description"
                        />
                        <meta
                            property="og:image"
                            content="https://viralfeedback.org/virus.png"
                            key="og:image"
                        />

                        <meta
                            property="twitter:card"
                            content="summary_large_image"
                            key="twitter:card"
                        />
                        <meta
                            property="twitter:title"
                            content="Viral Feedback Annotation"
                            key="twitter:title"
                        />
                        <meta
                            property="twitter:description"
                            content={description}
                            key="twitter:description"
                        />
                        <meta
                            property="twitter:image"
                            content="https://viralfeedback.org/virus.png"
                            key="twitter:image"
                        />
                    </Head>
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
