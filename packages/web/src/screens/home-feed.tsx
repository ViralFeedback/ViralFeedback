import React, { FunctionComponent } from 'react';
import { useAnnotationsQuery } from '../graphql';
import Loading from '../components/loading';
import Annotation from '../components/annotation';

const HomeFeed: FunctionComponent = () => {
    const { data, loading, error } = useAnnotationsQuery();

    const annotations: any = data?.annotations?.rows;

    if (loading) return <Loading />;

    return (
        <div className="container">
            {annotations ? (
                annotations.map((value, key) => {
                    return <Annotation data={value} key={key} />;
                })
            ) : (
                <div>No results</div>
            )}
        </div>
    );
};

export default HomeFeed;
