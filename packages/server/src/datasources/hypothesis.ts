import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

type ISearchAnnotationsQuery = {
    _separate_replies?: boolean;
    any?: string;
    group?: string;
    limit?: number;
    offset?: number;
    order?: 'asc' | 'desc';
    quote?: string;
    references?: string;
    search_after?: string;
    sort?: 'created' | 'updated' | 'group' | 'id' | 'user';
    tag?: string;
    tags?: string[];
    text?: string;
    uri?: 'string';
    user?: string;
    wildcard_uri?: string;
};

export default class HypothesisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://hypothes.is/api';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set(
            'Authorization',
            `Bearer ${process.env.HYPOTHESIS_API_TOKEN}`
        );
    }

    async getAnnotation(id) {
        return this.get(`annotations/${id.id}`);
    }

    async getAnnotations(query: ISearchAnnotationsQuery) {
        return this.get(`search`, query);
    }

    async createAnnotation(annotation: any) {
        return this.post('annotations', annotation);
    }
}
