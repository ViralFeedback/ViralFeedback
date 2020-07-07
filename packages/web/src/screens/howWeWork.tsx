import React, { FunctionComponent } from 'react';

const CommunityGuidelines: FunctionComponent = () => {
    return (
        <section className="hero is-fullheight is-bold">
            <div className="hero-body">
                <div className="container content">
                    <h1 className="title">Workflow</h1>
                    <p className="">
                        ViralFeedback.org operates on a model with three main
                        steps: <strong>Discovery</strong>,{' '}
                        <strong>Discussion</strong>, and{' '}
                        <strong>Dissemination</strong>.
                    </p>
                    <ol>
                        <li>
                            <strong>DISCOVERY:</strong> In the Discovery phase,
                            our team sources trending news, documents and other
                            media from across the web. We have a variety of
                            methods for sourcing publications:
                            <ol type="a">
                                <li>
                                    Sources aggregated based on algorithms and
                                    feeds designed to pull relevant articles
                                    that are in active public discussion on
                                    social media.{' '}
                                </li>
                                <li>
                                    Sources that members of our team encounter
                                    in daily life through friends, colleagues,
                                    or social media within their personal news
                                    consumption.{' '}
                                </li>
                                <li>
                                    Sources submitted by the general
                                    &nbsp;public via the submission portal on
                                    our website.{' '}
                                </li>
                            </ol>
                            <p>
                                Collectively, these source publications are
                                targets for our contributors to consider for a
                                public annotation. Our contributors select news
                                items that they feel qualified to annotate based
                                on their respective expertise. Our contributors
                                then annotate articles to support debate claims,
                                correct misinformation, or to add necessary
                                context using the following evidence standards
                                and annotation guidance:
                            </p>
                            <h2 className="title is-6">Evidence standards: </h2>
                            <ul>
                                <li>
                                    Quality of evidence is always considered by
                                    our contributors. When possible, primary
                                    peer-reviewed literature is prioritized over
                                    primary pre-print (not peer reviewed)
                                    literature, followed by non-primary
                                    literature or reports.
                                </li>
                                <li>
                                    General guidance to our contributors for
                                    prioritization of evidence is as follows:
                                </li>
                            </ul>
                            <div className="has-text-centered content-image">
                                <img
                                    alt=""
                                    src="pyramid.png"
                                    title="Evidence Standards"
                                />
                            </div>
                            <h2 className="title is-6">Annotation guidance:</h2>
                            <ul>
                                <li>
                                    In order to keep each annotation brief and
                                    focused, contributors aim to address
                                    specific claims or statements made within
                                    publications. If there are other claims or
                                    statements within the same publication that
                                    are candidates for review and analysis, our
                                    contributors are encouraged to provide
                                    analysis by submitting a separate
                                    annotation.
                                </li>
                                <li>
                                    The key focus of annotations is to provide
                                    high quality, data-based analysis of
                                    statements and claims. All contributors are
                                    strongly discouraged from making partisan
                                    commentary when submitting annotations.
                                </li>
                                <li>
                                    When submitting an annotation, each
                                    contributor indicates their overall
                                    assessment of the original statement or
                                    claim being discussed by tagging one of the
                                    following categories:
                                </li>
                                <li className="list-style-type-none">
                                    <ul>
                                        <li>
                                            <strong>Poorly supported</strong>
                                            &nbsp;- Addressing a claim or
                                            statement that is poorly supported
                                            by existing data/literature.
                                        </li>
                                        <li>
                                            <strong>Well supported</strong>
                                            &nbsp;- Addressing a claim or
                                            statement that is well supported by
                                            existing data/literature.
                                        </li>
                                        <li>
                                            <strong>More context needed</strong>
                                            &nbsp;- Addressing a claim or
                                            statement that is misleading without
                                            additional information.
                                        </li>
                                        <li>
                                            <strong>
                                                Additional context -
                                            </strong>
                                            &nbsp;Used when a claim or statement
                                            is not misleading, but when its
                                            understanding or impact may be
                                            amplified by providing additional
                                            information.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="has-text-centered content-image">
                                <img
                                    alt="Screenshot of a scientist annotating a news article"
                                    src="hypothesis_ui.png"
                                    title="Hypothes.is Annotation UI"
                                />
                            </div>
                        </li>
                        <li>
                            <strong>DISCUSSION:</strong> In the Discussion
                            phase, contributors internally publish their
                            annotations for the rest of the ViralFeedback.org
                            community to comment, discuss, and provide feedback;
                            think of this step as a rapid internal peer review.{' '}
                        </li>
                        <li>
                            <strong>DISSEMINATE:</strong> Once an annotation is
                            ready to publish, contributors tag their annotation
                            to &ldquo;Publish&rdquo; and the annotation is then
                            queued to publish after a window of time has passed
                            during which the author or news source is notified
                            that there has been a critical comment made to one
                            of their publications. After this notification
                            window has passed, the annotation is then published
                            to the public Viral Feedback group.{' '}
                        </li>
                    </ol>
                    <p className="c5 c11">
                        (Note: In contrast to the traditional scientific
                        publication process, our default is to publish
                        annotations unless a reviewer identifies a critical
                        issue as opposed to only publishing after a reviewer has
                        approved the content.)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CommunityGuidelines;
