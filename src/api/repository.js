// https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322 TODO изучить, выглядит красиво

import axios from 'axios';

const baseDomain = 'https://tel-dev.gp-ggr.ru';
const baseUrl = `${baseDomain}/phonebook`;

const config = function(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
};


export default {
    login(username, password) {
        return axios.post(`${baseUrl}/auth/login`, {username, password})
    },
    getUnits(token) {
        return axios.get(`${baseUrl}/worker/structure`, config(token));
    },
    getStaff(token) {
        return axios.get(`${baseUrl}/worker`, config(token));
    },
}
