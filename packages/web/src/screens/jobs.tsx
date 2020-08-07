import React, { FunctionComponent } from 'react';
import EmptyState from 'components/emptyState';
import Loading from 'components/loading';
import Job from 'components/job';
import { useJobsQuery } from '../graphql';

const Jobs: FunctionComponent = () => {
    const { data, loading } = useJobsQuery();

    if (loading) return <Loading />;

    const jobs = data?.jobs;

    return (
        <div>
            <section className="hero is-bold">
                <div className="hero-body">
                    {jobs && jobs.length > 0 ? (
                        <div className="container content">
                            <h1 className="title">Job Board</h1>
                            <hr />
                            {jobs.map((value, key) => {
                                return <Job data={value} key={key} />;
                            })}
                        </div>
                    ) : (
                        <EmptyState
                            className="margin-top"
                            iconClass="fas fa-work"
                            title="No jobs currently"
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default Jobs;
