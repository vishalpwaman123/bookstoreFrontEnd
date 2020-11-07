import axiosServices from './axiosServices';
let Config = require('../Configuration/Config');
const axiosService = new axiosServices();

const AddBook = Config.AddBook;
const UpdateBook = Config.UpdateBook;
const DeleteBook = Config.DeleteBook;

const Token = localStorage.getItem('token');
const token = {headers : {
    'Authorization': 'Bearer ' + Token
  }}

export default class userServices {

    AddBook(data) {

        let url = AddBook ;
        console.log("Url User:", url);
        return axiosService.post(url, data, true, token)

    }

    UpdateBook(data) {

        let url = UpdateBook ;
        console.log("Url User:", url);
        return axiosService.put(url, data, true, token)

    }

    Delete(data) {

        let url = DeleteBook+data;
        console.log("Url :", url);
        return axiosService.Delete(url, data, false);

    }

}