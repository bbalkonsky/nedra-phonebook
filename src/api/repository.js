// https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322 TODO изучить, выглядит красиво

import axios from 'axios';

const baseDomain = 'https://newspaper-dev.gp-ggr.ru/phonebook/';
const baseUrl = `${baseDomain}/api`;

export default {
    login(username, password) {
        return axios.post(`${baseUrl}/auth/login`, {username, password})
    },

    getRelease() {
        return axios.get(`${baseUrl}/release`);
    },
    getReleaseById(articleId) {
        return axios.get(`${baseUrl}/release/${articleId}`);
    },

    getArticles() {
        return axios.get(`${baseUrl}/article`);
    },
    getArticleById(articleId) {
        return axios.get(`${baseUrl}/article/${articleId}`);
    }
}
