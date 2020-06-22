import React from 'react';

import './styles/css/app.css';

import '@fortawesome/fontawesome-free/css/all.css';
import { Navigation } from './navigation/navigation';
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

function App() {
    return (
        <div className="app">
            <ApolloProvider client={client}>
                <Navigation />
            </ApolloProvider>
        </div>
    );
}

export default App;
