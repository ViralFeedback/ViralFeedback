import HypothesisAPI from './hypothesis-apollo-rest-datasource';
import fetch from 'node-fetch';

// TODO persist to disk or DB
let ids: string[] = [];

setInterval(async () => {
    // TODO update with group
    const response = await fetch('https://hypothes.is/api/search');
    const annotations = await response.json();

    annotations.rows.map((annotation, key) => {
        const tags = annotation.tags;
        if (tags.length > 0) {
            tags.map(async (tag, index) => {
                if (tag === 'publish') {
                    if (!ids.includes(annotation.id)) {
                        ids.push(annotation.id);
                        // TODO figure out author and use their API key
                        const createAnnotationResponse = await fetch(
                            'https://hypothes.is/api/annotations',
                            {
                                method: 'post',
                                body: JSON.stringify(annotation),
                                headers: {
                                    Authorization: `Bearer ${process.env.HYPOTHESIS_API_TOKEN}`,
                                    'Content-Type': 'application/json'
                                }
                            }
                        );
                        const createAnnotationResponseJSON = await createAnnotationResponse.json();
                        ids.push(createAnnotationResponseJSON.id);
                    }
                }
            });
        }
    });
}, 10000);
