const { RESTDataSource } = require('apollo-datasource-rest');

export default class HypothesisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.hypothes.is/';
    }

    async getAnnotation(id) {
        return this.get(`annotations/${id}`);
    }
}
