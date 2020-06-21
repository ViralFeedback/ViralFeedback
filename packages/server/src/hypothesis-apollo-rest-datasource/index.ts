import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export default class HypothesisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.hypothes.is/';
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set(
            'Authorization',
            `Bearer ${process.env.HYPOTHESIS_API_TOKEN}`
        );
    }

    async getAnnotation(id) {
        return this.get(`annotations/${id}`);
    }
}
