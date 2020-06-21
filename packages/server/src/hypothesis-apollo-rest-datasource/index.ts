import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

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

    async getAnnotations() {
        return this.get(`search`);
    }
}
