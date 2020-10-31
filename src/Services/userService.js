import axiosServices from './axiosServices';
let Config = require('../Configuration/Config');
const axiosService = new axiosServices();

const configUrl = Config.Users;
const configGet = Config.Get;

const token = {headers : {
    'Authorization': localStorage.getItem('token')
  }}

export default class userServices {

    

    registration(data) {

        let url = configUrl ;
        return axiosService.post(url, data, false)

    }

    SignIn(data) {

        let url = configUrl + '/Login';
        return axiosService.post(url, data, false);

    }

    resetPassword(data) {

        let url = configUrl + '';
        return axiosService.post(url, data, true)
    }

    forgetPassword(data) {

        let url = configUrl + '';
        return axiosService.post(url, data, false)
    }

    GetBooks() {

        let url = configGet;
        return axiosService.get(url)

    }

}