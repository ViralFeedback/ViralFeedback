import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export default class CMS_API extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:1337';
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
