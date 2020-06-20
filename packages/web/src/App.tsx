import React from 'react';

import './styles/css/app.css';

import '@fortawesome/fontawesome-free/css/all.css';
import { Navigation } from './navigation/navigation';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

const apiUri: string = process.env.REACT_APP_SERVER_URI
    ? process.env.REACT_APP_SERVER_URI
    : 'http://localhost:8080';

const client = new ApolloClient({
    credentials: 'include',
    onError: (errors: any) => {
        console.log(errors);
    },
    // request: async (operation) => {
    //     operation.setContext((record: any) => {
    //         const headers = {
    //             ...record.headers
    //         };
    //
    //         return {
    //             headers
    //         };
    //     });
    // },
    uri: apiUri
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Navigation />
        </ApolloProvider>
    );
}

export default App;
