import React, { FunctionComponent, useState } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';

const SearchMenu: FunctionComponent = () => {
    const router = useRouter();
    const { topic, quality, text } = router.query;

    const [isSearchMenuOpen, setSearchMenuOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedQuality, setSelectedQuality] = useState([]);

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

    const handleSearchSubmit = () => {
        let query = {};

        if (searchText !== '') query.text = encodeURI(searchText);

        if (selectedQuality !== []) {
            query.quality = encodeURI(selectedQuality.value);
        }

        if (selectedTopic !== []) {
            query.topic = encodeURI(selectedTopic.value);
        }

        router.push({
            pathname: '/',
            query
        });
    };

    const handleClearSearch = () => {
        setSelectedTopic([]);
        setSelectedQuality([]);
        setSearchText('');
        setSearchMenuOpen(false);
        router.push('/');
    };

    return (
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
                            <h6 className="title is-6">Filter by quality:</h6>
                            <Select
                                isClearable
                                onChange={setSelectedQuality}
                                options={qualityFilterOptions}
                                value={selectedQuality}
                            />
                        </div>
                        <hr className="dropdown-divider" />
                        <div className="filter-by-topic">
                            <h6 className="title is-6">Filter by topic:</h6>
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
                                <h6 className="title is-6">Search text:</h6>
                                <p className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Search for a topic"
                                        value={searchText}
                                        onChange={(e) =>
                                            setSearchText(e.target.value)
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
    );
};

export default SearchMenu;
