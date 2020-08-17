import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export default function createApolloClient(initialState, ctx) {
    const apiUri: string = process.env.NEXT_PUBLIC_SERVER_URI
        ? process.env.NEXT_PUBLIC_SERVER_URI
        : 'http://localhost:8080/graphql';

    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: apiUri, // Server URL (must be absolute)
            credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
            fetch
        }),
        cache: new InMemoryCache().restore(initialState)
    });
}
