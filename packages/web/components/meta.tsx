import React, { FunctionComponent } from 'react';
import Head from 'next/head';

interface IMeta {
    description?: string;
    image?: string;
    title?: string;
    url?: string;
}

const Meta: FunctionComponent<IMeta> = ({ description, image, title, url }) => {
    return (
        <Head>
            <title>{title ? title : 'Viral Feedback'}</title>
            <meta
                name="title"
                content={title ? title : 'Viral Feedback'}
                key="title"
            />
            <meta
                name="description"
                content={
                    description
                        ? description
                        : 'A community of scientists providing science-based feedback about viral and pandemic topics in service of society.'
                }
                key="description"
            />

            <meta property="og:type" content="website" key="og:type" />
            <meta
                property="og:url"
                content={url ? url : 'https://viralfeedback.org'}
                key="og:url"
            />
            <meta
                property="og:title"
                content={title ? title : 'Viral Feedback'}
                key="og:title"
            />
            <meta
                property="og:description"
                content={
                    description
                        ? description
                        : 'A community of scientists providing science-based feedback about viral and pandemic topics in service of society.'
                }
                key="og:description"
            />
            <meta
                property="og:image"
                content={
                    image ? image : 'https://viralfeedback.org/logo512.png'
                }
                key="og:image"
            />

            <meta
                property="twitter:card"
                content="summary_large_image"
                key="twitter:card"
            />
            <meta
                property="twitter:url"
                content={url ? url : 'https://viralfeedback.org'}
                key="twitter:url"
            />
            <meta
                property="twitter:title"
                content={title ? title : 'Viral Feedback'}
                key="twitter:title"
            />
            <meta
                property="twitter:description"
                content={
                    description
                        ? description
                        : 'A community of scientists providing science-based feedback about viral and pandemic topics in service of society.'
                }
                key="twitter:description"
            />
            <meta
                property="twitter:image"
                content={
                    image ? image : 'https://viralfeedback.org/logo512.png'
                }
                key="twitter:image"
            />
        </Head>
    );
};

export default Meta;
