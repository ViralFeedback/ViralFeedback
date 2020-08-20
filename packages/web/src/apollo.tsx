import React from 'react;';
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export default withApollo(
    ({ initialState }) => {
        const apiUri: string = process.env.NEXT_PUBLIC_SERVER_URI
            ? process.env.NEXT_PUBLIC_SERVER_URI
            : 'http://localhost:8080/graphql';

        return new ApolloClient({
            uri: apiUri,
            cache: new InMemoryCache().restore(initialState || {})
        });
    },
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        }
    }
);
