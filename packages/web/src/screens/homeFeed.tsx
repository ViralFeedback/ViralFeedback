import React, { FunctionComponent } from 'react';
import Annotation, { IAnnotation } from 'components/annotation';
import EmptyState from 'components/emptyState';
import Loading from 'components/loading';
import { useAnnotationsQuery } from '../graphql';
import MultiSelect from 'react-multi-select-component';

const HomeFeed: FunctionComponent = () => {
    const [isSearchMenuOpen, setSearchMenuOpen] = React.useState(false);
    const [selected, setSelected] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');

    const filterOptions = [
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
        group: '2ZpQXmM1',
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
        if (selected.length > 0) {
            selected.map((value: any, key) => {
                return tags.push(value.value);
            });
        }
        if (tags.length > 0) newVariables.tags = tags;
        refetch(newVariables);
    };

    const handleClearSearch = () => {
        setSelected([]);
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
        <div className="annotation-feed container">
            <div className="level search-bar">
                <div className="level-left">
                    <div className="level-item subtitle is-5">
                        <strong>{total ? total : 0}</strong>
                        <span style={{ paddingLeft: 7 }}>results</span>
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
                                <div className="filter-by-topic">
                                    <h6 className="title is-6">
                                        Filter by topic:
                                    </h6>
                                    <MultiSelect
                                        className="multi-select"
                                        options={filterOptions}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy={'Select'}
                                        hasSelectAll={false}
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
                        return <Annotation data={value} key={key} />;
                    })
                ) : (
                    <EmptyState
                        iconClass="fas fa-virus-slash"
                        title="No annotations"
                    />
                )}
            </div>
        </div>
    );
};

const FilterComponent: FunctionComponent = () => {
    const [wellSupported, setWellSupported] = React.useState(true);
    const [additionalContext, setAdditionalContext] = React.useState(true);
    const [moreContextNeeded, setMoreContextNeeded] = React.useState(true);
    const [poorlySupported, setPoorlySupported] = React.useState(true);

    return (
        <div className="dropdown-item">
            <h6 className="title is-6">Show:</h6>
            <div className="field">
                <input
                    className="is-checkradio has-background-color is-success"
                    id="well-supported-checkbox"
                    type="checkbox"
                    name="well-supported-checkbox"
                    checked={wellSupported}
                    onClick={() => setWellSupported(!wellSupported)}
                />
                <label htmlFor="well-supported-checkbox">Well supported</label>
            </div>

            <div className="field">
                <input
                    className="is-checkradio has-background-color is-info"
                    id="additional-context-checkbox"
                    type="checkbox"
                    name="additional-context-checkbox"
                    checked={additionalContext}
                    onClick={() => setAdditionalContext(!additionalContext)}
                />
                <label htmlFor="additional-context-checkbox">
                    Additional context
                </label>
            </div>

            <div className="field">
                <input
                    className="is-checkradio has-background-color is-warning"
                    id="more-context-checkbox"
                    type="checkbox"
                    name="more-context-checkbox"
                    checked={moreContextNeeded}
                    onClick={() => {
                        setMoreContextNeeded(!moreContextNeeded);
                    }}
                />
                <label htmlFor="more-context-checkbox">
                    More context needed
                </label>
            </div>

            <div className="field">
                <input
                    className="is-checkradio has-background-color is-danger"
                    id="poorly-supported-checkbox"
                    type="checkbox"
                    name="poorly-supported-checkbox"
                    checked={poorlySupported}
                    onClick={() => setPoorlySupported(!poorlySupported)}
                />
                <label htmlFor="poorly-supported-checkbox">
                    Poorly supported
                </label>
            </div>
        </div>
    );
};

export default HomeFeed;
