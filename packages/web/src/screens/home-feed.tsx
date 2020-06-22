import React, { FunctionComponent } from 'react';
import Annotation from '../components/annotation';
import EmptyState from '../components/emptyState';
import Loading from '../components/loading';
import { useAnnotationsQuery } from '../graphql';

const HomeFeed: FunctionComponent = () => {
    const { data, loading, error, variables } = useAnnotationsQuery({
        variables: {
            // group: 'demo-group',
            limit: 10
        }
    });

    const annotations: any = data?.annotations?.rows;

    console.log(annotations);

    if (loading) return <Loading />;

    return (
        <div className="annotation-feed container has-text-centered">
            {annotations && annotations.length != 0 ? (
                annotations.map((value, key) => {
                    return <Annotation data={value} key={key} />;
                })
            ) : (
                <EmptyState
                    iconClass="fas fa-virus-slash"
                    title="No annotations"
                />
            )}
        </div>
    );
};

export default HomeFeed;
