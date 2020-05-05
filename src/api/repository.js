// https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322 TODO изучить, выглядит красиво

import axios from 'axios';

const baseDomain = 'https://newspaper-dev.gp-ggr.ru';
const baseUrl = `${baseDomain}/phonebook`;
const config = {
    headers: {
        Authorization: "Bearer " + (localStorage.jwtToken ? localStorage.getItem('jwtToken') : '')
    }
};


export default {
    login(username, password) {
        return axios.post(`${baseUrl}/auth/login`, {username, password})
    },
    getUnits() {
        return axios.get(`${baseUrl}/worker/structure`, config);
    },
    getStaff() {
        return axios.get(`${baseUrl}/worker`, config);
    },
}
