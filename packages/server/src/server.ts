import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import HypothesisAPI from './hypothesis-apollo-rest-datasource';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import corsAnywhere from 'cors-anywhere';

const app = express();
const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            HypothesisAPI: new HypothesisAPI()
        };
    },
    introspection: true,
    playground: true,
    validationRules: [depthLimit(7)]
});

app.use('*', cors({ origin: '*' }));
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

let proxy = corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeaders: [], // Do not require any headers.
    removeHeaders: [] // Do not remove any headers.
});

/* Attach our cors proxy to the existing API on the /proxy endpoint. */
app.get('/proxy/:proxyUrl*', (req, res) => {
    req.url = req.url.replace('/proxy/', '/'); // Strip '/proxy' from the front of the URL, else the proxy won't work.
    proxy.emit('request', req, res);
});

const httpServer = createServer(app);
const port = process.env.PORT || 8080;

httpServer.listen({ port }, (): void =>
    console.log(
        `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`
    )
);
