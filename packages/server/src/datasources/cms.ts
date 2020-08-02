import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export default class CmsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:1337';
    }

    async getJobs() {
        return this.get(`jobs`);
    }

    async getPost(id) {
        return this.get(`posts/${id.id}`);
    }

    async getPosts() {
        return this.get(`posts`);
    }

    async submitContactForm(form: any) {
        return this.post('contact-forms', form);
    }
}
