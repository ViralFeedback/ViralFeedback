import fetch from 'node-fetch';
import fs from 'fs';

// Make sure there is a file to read IDs from and save them to
fs.openSync('./annotation_ids.txt', 'a');
fs.openSync('./account_api_keys.txt', 'a');

setInterval(async () => {
    // TODO update with group
    const response = await fetch(
        `https://hypothes.is/api/search?group=${
            process.env.HYPOTHESIS_DRAFT_GROUP
                ? process.env.HYPOTHESIS_DRAFT_GROUP
                : 'VkvyjiZY'
        }`,
        {
            method: 'get',
            headers: {
                Authorization: `Bearer ${process.env.HYPOTHESIS_API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }
    );

    const annotations = await response.json();

    const ids = fs
        .readFileSync('./annotation_ids.txt')
        .toString('utf-8')
        .split('\n');

    annotations.rows.map((annotation: any, key: number) => {
        const tags = annotation.tags;

        if (tags.length > 0) {
            tags.map(async (tag: string, index: number) => {
                if (tag.toLowerCase() === 'publish') {
                    console.log(annotation);

                    if (!ids.includes(annotation.id)) {
                        fs.appendFileSync(
                            './annotation_ids.txt',
                            annotation.id + '\n'
                        );

                        const accountApiKeys = fs
                            .readFileSync('./account_api_keys.txt')
                            .toString('utf-8')
                            .split('\n');

                        const username:
                            | undefined
                            | null
                            | string = annotation.user
                            .match(/acct:(.*)@hypothes.is/)[1]
                            .toLowerCase();

                        let apiKey: undefined | null | string;

                        for (const index in accountApiKeys) {
                            if (accountApiKeys[index] !== '') {
                                if (
                                    accountApiKeys[index]
                                        .match(/(.*),\s/)![1]
                                        .toLowerCase() === username
                                ) {
                                    apiKey = accountApiKeys[index].match(
                                        /,\s(.*)/
                                    )![1];
                                }
                            }
                        }

                        if (apiKey) {
                            console.log(
                                `Publishing annotation ${annotation.id} by ${username}`
                            );

                            annotation.group = process.env
                                .HYPOTHESIS_PUBLISH_GROUP
                                ? process.env.HYPOTHESIS_PUBLISH_GROUP
                                : 'igRizgwB';

                            const createAnnotationResponse = await fetch(
                                'https://hypothes.is/api/annotations',
                                {
                                    method: 'post',
                                    body: JSON.stringify(annotation),
                                    headers: {
                                        Authorization: `Bearer ${apiKey}`,
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
                }
            });
        }
    });
}, 10000);
