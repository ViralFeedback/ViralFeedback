import React, { FunctionComponent } from 'react';
import Annotation from '../components/annotation';
import EmptyState from '../components/emptyState';
import Loading from '../components/loading';
import { useAnnotationQuery } from '../src/graphql';
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

export default SingleAnnotation;

// TODO, this should maybe go somewhere else?
export async function getStandaloneApolloClient() {
    // const { ApolloClient, InMemoryCache, HttpLink } = await import(
    //     '@apollo/client'
    // );
    //
    // const apiUri: string = process.env.REACT_APP_SERVER_URI
    //     ? process.env.REACT_APP_SERVER_URI
    //     : 'http://localhost:8080/graphql';
    //
    // return new ApolloClient({
    //     link: new HttpLink({
    //         uri: apiUri,
    //         fetch
    //     }),
    //     cache: new InMemoryCache()
    // });
}

export async function getStaticPaths() {
    // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
}
