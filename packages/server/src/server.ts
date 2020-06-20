import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import HypothesisAPI from 'hypothesis-apollo-rest-datasource';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const app = express();
const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            HypothesisAPI: new HypothesisAPI()
        };
    },
    validationRules: [depthLimit(7)]
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
const port = process.env.PORT || 8080;

httpServer.listen({ port }, (): void =>
    console.log(
        `\n🚀      GraphQL is now running on http://localhost:8080/graphql`
    )
);
