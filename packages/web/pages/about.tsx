import React, { FunctionComponent } from 'react';

const About: FunctionComponent = () => {
    return (
        <div>
            <section className="hero is-bold">
                <div className="hero-body">
                    <div className="container content">
                        <h1 className="title">About</h1>
                        <hr />
                        <p>
                            Viral Feedback is a community of scientists, health
                            professionals, and associated content experts
                            providing data driven analysis, in the form of
                            annotations, of SARS-CoV-2 and COVID-19-related news
                            reports, government actions, breaking scientific
                            papers, and other media.
                        </p>
                        <h2 className="title is-4">Our Mission</h2>
                        <p>
                            <strong>Serve the public interest:</strong> Viral
                            Feedback’s primary mission is to promote the well
                            being of the general public by providing high
                            quality, timely analysis of COVID-19 related news,
                            reports, and other media. We believe it is
                            scientists’ civic duty to better inform our fellow
                            citizens in our area of expertise and help create an
                            Internet where users will have access to
                            scientifically sound and trustworthy information
                            regarding COVID-19.
                        </p>
                        <p>
                            <strong>Non-partisan and non-judgemental:</strong>{' '}
                            Viral Feedback strives to present non-partisan
                            analysis that communicates information in a
                            non-judgemental manner that acknowledges varying
                            interpretations of available data.
                        </p>
                        <p>
                            <strong>Credible, data driven:</strong> Viral
                            Feedback’s team of content experts provide deeper
                            context and succinctly explain the state of evidence
                            supporting or countering specific claims.
                        </p>
                        <h2 className="title is-4">Who we are</h2>
                        <p>
                            Each of our contributing annotators hold or are
                            currently pursuing a graduate degree (MPH, MS, PhD,
                            MD, etc.) in a field with expertise in
                            COVID-19-related science or policy. All annotators
                            are asked to conform to high quality community
                            standards in order to contribute.
                        </p>
                        <h2 className="title is-4">What we do</h2>
                        <p>
                            We invite scientists, health professionals, and
                            associated content experts with relevant expertise
                            to submit annotations on publications that contain
                            science-based information, providing insight on how
                            well a statement or claim is supported by available
                            data, adding contextual information, and
                            highlighting factual inaccuracies and faulty
                            reasoning where they exist.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
