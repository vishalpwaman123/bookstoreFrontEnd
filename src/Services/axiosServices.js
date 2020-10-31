const axios = require('axios').default;

export default class axiosServices {
    post(url, data, isRequiredHeader=false,header) {

        return axios.post(url, data, isRequiredHeader&&header);

    }

    get(url, isRequiredHeader) {

        return axios.get(url, isRequiredHeader);
        
    }

}