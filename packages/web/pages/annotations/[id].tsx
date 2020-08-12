import React, { FunctionComponent } from 'react';
import Annotation from '../../components/annotation';
import EmptyState from '../../components/emptyState';
import Loading from '../../components/loading';
import { useAnnotationQuery } from '../../src/graphql';
import { useRouter } from 'next/router';

import { Helmet } from 'react-helmet';
import { withApollo } from '../../src/apollo';

const SingleAnnotation: FunctionComponent = () => {
    const router = useRouter();

    const { id } = router.query;

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
