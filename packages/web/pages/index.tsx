import React, { FunctionComponent, useState } from 'react';
import Annotation from '../components/annotation';
import EmptyState from '../components/emptyState';
import Loading from '../components/loading';
import Meta from '../components/meta';
import { useAnnotationsQuery } from '../src/graphql';
import Select from 'react-select';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomeFeed: FunctionComponent = () => {
    const [isSearchMenuOpen, setSearchMenuOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedQuality, setSelectedQuality] = useState([]);
    const [compactView, setCompactView] = useState(false);

    const qualityFilterOptions = [
        { label: 'Well Supported', value: 'well supported' },
        { label: 'Poorly Supported', value: 'poorly supported' },
        { label: 'Additional Context', value: 'additional context' },
        { label: 'More Context Needed', value: 'more context needed' }
    ];

    const topicFilterOptions = [
        { label: 'Molecular biology', value: 'molecular biology' },
        { label: 'Molecular diagnostics', value: 'molecular diagnostics' },
        { label: 'Immunology', value: 'immunology' },
        { label: 'Virology', value: 'virology' },
        { label: 'Epidemiology', value: 'epidemiology' },
        { label: 'Medicine (general)', value: 'medicine (general)' },
        { label: 'Public Health', value: 'public health' },
        { label: 'Health Policy', value: 'health policy' },
        { label: 'Statistics', value: 'statistics' },
        { label: 'Scientific process', value: 'scientific process' }
    ];

    const variables: any = {
        _separate_replies: true,
        limit: 100,
        group: process.env.NEXT_PUBLIC_HYPOTHESIS_GROUP_ID
            ? process.env.NEXT_PUBLIC_HYPOTHESIS_GROUP_ID
            : 'igRizgwB',
        offset: 0
    };

    const { data, loading, error, refetch } = useAnnotationsQuery({
        variables,
        pollInterval: 30000
    });

    const handleSearchSubmit = () => {
        let newVariables = variables;
        if (searchText !== '') newVariables.any = searchText;
        let tags: string[] = [];
        const topic: any = selectedTopic;
        const quality: any = selectedQuality;
        console.log(selectedQuality);
        if (topic?.value) {
            tags.push(topic.value);
        }
        if (quality?.value) {
            tags.push(quality.value);
        }
        if (tags.length > 0) newVariables.tags = tags;
        refetch(newVariables);
    };

    const handleClearSearch = () => {
        setSelectedTopic([]);
        setSelectedQuality([]);
        setSearchText('');
        setSearchMenuOpen(false);
        refetch(variables);
        return window.location.reload();
    };

    if (error) console.log(error);

    if (loading) return <Loading />;

    const annotations: any = data?.annotations?.rows;
    const total = data?.annotations?.total;

    return (
        <>
            <Meta />
            <div className="annotation-feed container">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h2 className="title is-5">
                                Providing scientific perspectives on public
                                information regarding COVID-19... one annotation
                                at a time.{' '}
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="level search-bar is-mobile">
                    <div className="level-left">
                        <div className="level-item subtitle is-5 results">
                            <strong>{total ? total : 0}</strong>
                            <span style={{ paddingLeft: 7 }}>results</span>
                        </div>
                        <div className="level-item field has-addons">
                            <p className="control">
                                <button
                                    className={`button ${
                                        !compactView
                                            ? 'is-selected is-success'
                                            : ''
                                    } has-tooltip-bottom`}
                                    data-tooltip="Expanded View"
                                    onClick={() => setCompactView(!compactView)}
                                >
                                    <span className="icon is-small">
                                        <i className="fas fa-comment-alt"></i>
                                    </span>
                                </button>
                            </p>
                            <p className="control">
                                <button
                                    className={`button ${
                                        compactView
                                            ? 'is-selected is-success'
                                            : ''
                                    } has-tooltip-bottom`}
                                    data-tooltip="List View"
                                    onClick={() => setCompactView(!compactView)}
                                >
                                    <span className="icon is-small">
                                        <i className="fas fa-list"></i>
                                    </span>
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="level-right">
                        <div
                            className={`dropdown level-item is-right  ${
                                isSearchMenuOpen ? 'is-active' : ''
                            }`}
                        >
                            <div className="dropdown-trigger">
                                <button
                                    className="button"
                                    aria-haspopup="true"
                                    aria-controls="dropdown-menu2"
                                    onClick={() => {
                                        setSearchMenuOpen(!isSearchMenuOpen);
                                    }}
                                >
                                    <span>
                                        <i className="fas fa-search"></i>
                                        {'  '}
                                        Search options
                                    </span>
                                    <span className="icon is-small">
                                        <i
                                            className="fas fa-angle-down"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                </button>
                            </div>
                            <div
                                className="dropdown-menu search-dropdown"
                                id="dropdown-menu2"
                                role="menu"
                            >
                                <div className="dropdown-content">
                                    <div className="dropdown-item">
                                        <h6 className="title is-6">
                                            Filter by quality:
                                        </h6>
                                        <Select
                                            isClearable
                                            onChange={setSelectedQuality}
                                            options={qualityFilterOptions}
                                            value={selectedQuality}
                                        />
                                    </div>
                                    <hr className="dropdown-divider" />
                                    <div className="filter-by-topic">
                                        <h6 className="title is-6">
                                            Filter by topic:
                                        </h6>
                                        <Select
                                            isClearable
                                            onChange={setSelectedTopic}
                                            options={topicFilterOptions}
                                            value={selectedTopic}
                                        />
                                    </div>
                                    <hr className="dropdown-divider" />
                                    <div className="dropdown-item">
                                        <div className="field">
                                            <h6 className="title is-6">
                                                Search text:
                                            </h6>
                                            <p className="control">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    placeholder="Search for a topic"
                                                    value={searchText}
                                                    onChange={(e) =>
                                                        setSearchText(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="dropdown-divider" />
                                    <div className="dropdown-item buttons">
                                        <button
                                            className="button is-primary"
                                            onClick={handleSearchSubmit}
                                        >
                                            Search
                                        </button>
                                        <button
                                            className="button"
                                            onClick={handleClearSearch}
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="has-text-centered">
                    {annotations && annotations.length !== 0 ? (
                        annotations.map((value, key) => {
                            return (
                                <Annotation
                                    compact={compactView}
                                    data={value}
                                    key={key}
                                    expanded={false}
                                />
                            );
                        })
                    ) : (
                        <EmptyState
                            className="margin-top"
                            iconClass="fas fa-comment-slash"
                            title="No annotations"
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(HomeFeed), {
    ssr: false
});
