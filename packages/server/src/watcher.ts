import fetch from 'node-fetch';
import fs from 'fs';

// Make sure there is a file to read IDs from and save them to
fs.openSync('./annotation_ids.txt', 'a');

setInterval(async () => {
    // TODO update with group
    const response = await fetch('https://hypothes.is/api/search');
    const annotations = await response.json();

    const ids = fs
        .readFileSync('./annotation_ids.txt')
        .toString('utf-8')
        .split('\n');

    annotations.rows.map((annotation: any, key: number) => {
        const tags = annotation.tags;
        if (tags.length > 0) {
            tags.map(async (tag: string, index: number) => {
                if (tag === 'publish') {
                    if (!ids.includes(annotation.id)) {
                        fs.appendFileSync(
                            './annotation_ids.txt',
                            annotation.id + '\n'
                        );
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
                        fs.appendFileSync(
                            './annotation_ids.txt',
                            createAnnotationResponseJSON.id + '\n'
                        );
                    }
                }
            });
        }
    });
}, 10000);
