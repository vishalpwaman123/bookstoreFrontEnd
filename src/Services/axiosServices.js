const axios = require('axios').default;
const token = localStorage.getItem('token');

export default class axiosServices {

    post(url, data, isRequiredHeader=false,header) {

        return axios.post(url, data, isRequiredHeader&&header);

    }

    get( url, isRequiredHeader=false,header ) {

        return axios.get(url, isRequiredHeader && header);

    }

    put(url, data, isRequiredHeader=false,header) {

        return axios.put(url, data, isRequiredHeader&&header);

    }

    delete(url, data, isRequiredHeader=false,header) {

        return axios.delete(url, data, isRequiredHeader&&header);

    }

}