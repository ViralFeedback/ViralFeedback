import React, { FunctionComponent } from 'react';
import Annotation, { IAnnotation } from 'components/annotation';
import EmptyState from 'components/emptyState';
import Loading from 'components/loading';
import { useAnnotationsQuery } from '../graphql';
import MultiSelect from 'react-multi-select-component';

const HomeFeed: FunctionComponent = () => {
    const [isSearchMenuOpen, setSearchMenuOpen] = React.useState(false);

    const { data, loading, error } = useAnnotationsQuery({
        variables: {
            limit: 100,
            group: '2ZpQXmM1',
            offset: 0
        }
    });

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
                                <TopicMultiSelect />
                                <hr className="dropdown-divider" />
                                <div className="dropdown-item">
                                    <h6 className="title is-6">Show:</h6>
                                    <div className="field">
                                        <input
                                            className="is-checkradio has-background-color is-success"
                                            id="exampleCheckboxSuccess"
                                            type="checkbox"
                                            name="exampleCheckboxSuccess"
                                            checked={true}
                                        />
                                        <label htmlFor="exampleCheckboxSuccess">
                                            Well supported
                                        </label>
                                    </div>

                                    <div className="field">
                                        <input
                                            className="is-checkradio has-background-color is-info"
                                            id="exampleCheckboxWarning"
                                            type="checkbox"
                                            name="exampleCheckboxWarning"
                                            checked={true}
                                        />
                                        <label htmlFor="exampleCheckboxWarning">
                                            Additional context
                                        </label>
                                    </div>

                                    <div className="field">
                                        <input
                                            className="is-checkradio has-background-color is-warning"
                                            id="exampleCheckboxDefault"
                                            type="checkbox"
                                            name="exampleCheckboxDefault"
                                            checked={true}
                                        />
                                        <label htmlFor="exampleCheckboxDefault">
                                            More context needed
                                        </label>
                                    </div>

                                    <div className="field">
                                        <input
                                            className="is-checkradio has-background-color is-danger"
                                            id="exampleCheckboxDanger"
                                            type="checkbox"
                                            name="exampleCheckboxDanger"
                                            checked={true}
                                        />
                                        <label htmlFor="exampleCheckboxDanger">
                                            Poorly supported
                                        </label>
                                    </div>
                                </div>
                                <hr className="dropdown-divider" />
                                <div className="dropdown-item">
                                    <div className="field has-addons">
                                        <p className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Search for a topic"
                                            />
                                        </p>
                                        <p className="control">
                                            <button className="button">
                                                Search
                                            </button>
                                        </p>
                                    </div>
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

const TopicMultiSelect: React.FC = () => {
    const options = [
        { label: 'Molecular biology', value: '' },
        { label: 'Molecular diagnostics', value: '' },
        { label: 'Immunology', value: '' },
        { label: 'Virology', value: '' },
        { label: 'Epidemiology', value: '' },
        { label: 'Medicine (general)', value: '' },
        { label: 'Public Health', value: '' },
        { label: 'Health Policy', value: '' },
        { label: 'Statistics', value: '' },
        { label: 'Scientific process', value: '' }
    ];

    const [selected, setSelected] = React.useState([]);

    return (
        <div className="filter-by-topic">
            <h6 className="title is-6">Filter by topic:</h6>
            <MultiSelect
                className="multi-select"
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={'Select'}
            />
        </div>
    );
};

export default HomeFeed;
