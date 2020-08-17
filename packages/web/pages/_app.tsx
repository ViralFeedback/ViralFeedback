import React from 'react';

import Nav from '../components/nav';
import '../styles/css/app.css';

import '@fortawesome/fontawesome-free/css/all.css';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

const apiUri: string = process.env.REACT_APP_SERVER_URI
    ? process.env.REACT_APP_SERVER_URI
    : 'http://localhost:8080/graphql';

const client = new ApolloClient({
    onError: (errors: any) => {
        console.log(errors);
    },
    uri: apiUri
});

function App({ Component, pageProps }) {
    return (
        <div className="app">
            <ApolloProvider client={client}>
                <Nav />
                <Component {...pageProps} />
            </ApolloProvider>
        </div>
    );
}

export default App;
