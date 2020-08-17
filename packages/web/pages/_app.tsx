import React from 'react';

import Nav from '../components/nav';
import '../styles/css/app.css';

import '@fortawesome/fontawesome-free/css/all.css';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';
import Head from 'next/head';

const apiUri: string = process.env.NEXT_PUBLIC_SERVER_URI
    ? process.env.NEXT_PUBLIC_SERVER_URI
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
            <Head>
                <meta
                    name="viewport"
                    content="user-scalable=no, width=device-width, initial-scale=1.0"
                />
                <link rel="manifest" href="/manifest.json" />
                <title>Viral Feedback</title>
                <meta name="title" content="Viral Feedback" key="title" />
                <meta property="og:type" content="website" key="og:type" />
                <meta
                    name="description"
                    content="A community of scientists providing science-based feedback about viral and pandemic topics in service of society."
                    key="description"
                />
                <meta
                    property="og:title"
                    content="Viral Feedback"
                    key="og:title"
                />
                <meta
                    property="og:description"
                    content="A community of scientists providing science-based feedback about viral and pandemic topics in service of society."
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
                    content="Viral Feedback"
                    key="twitter:title"
                />
                <meta
                    property="twitter:description"
                    content="A community of scientists providing science-based feedback about viral and pandemic topics in service of society."
                    key="twitter:description"
                />
                <meta
                    property="twitter:image"
                    content="https://viralfeedback.org/virus.png"
                    key="twitter:image"
                />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-173623932-1"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-173623932-1');
                    `
                    }}
                />
            </Head>
            <ApolloProvider client={client}>
                <Nav />
                <Component {...pageProps} />
            </ApolloProvider>
        </div>
    );
}

export default App;
