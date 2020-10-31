import axiosServices from './axiosServices';
let Config = require('../Configuration/Config');
const axiosService = new axiosServices();

const configUrl = Config.url;

const token = {headers : {
    'Authorization': localStorage.getItem('token')
  }}

export default class userServices {

    

    registration(data) {

        let url = configUrl + '';
        return axiosService.post(url, data, false)

    }

    login(data) {

        let url = configUrl + '';
        return axiosService.post(url, data, false);

    }

    getOrderDetail() {

        let url = configUrl + '';
        return axiosService.get(url, token)

    }

}