const { RESTDataSource } = require('apollo-datasource-rest');

class HypothesisAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.hypothes.is/';
    }

    async getAnnotation(id) {
        return this.get(`annotations/${id}`);
    }
}
