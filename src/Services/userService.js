import axiosServices from './axiosServices';
let Config = require('../Configuration/Config');
const axiosService = new axiosServices();
//const token = localStorage.getItem('token');

const UsersLogin = Config.UsersLogin;
const AdminLogin = Config.AdminLogin;
const configGet = Config.Get;
const GetBookByName = Config.GetBookByName;
const GetCart = Config.GetCart;
const GetBookById = Config.GetBookById;
const GetWishList = Config.GetWishList;
const AdminRegistration = Config.AdminRegistration;
const UserRegistration = Config.UserRegistration;

const Token = localStorage.getItem('token');
const token = {headers : {
    'Authorization': 'Bearer ' + Token
  }}

export default class userServices {

    

    UsersRegistration(data) {

        let url = UserRegistration ;
        console.log("Url User:", url);
        return axiosService.post(url, data, false)

    }

    AdminRegistration(data) {

        let url = AdminRegistration ;
        return axiosService.post(url, data, false)

    }

    UserSignIn(data) {

        let url = UsersLogin;

        console.log("Url :", url);

        return axiosService.post(url, data, false);

    }

    AdminSignIn(data) {

        let url = AdminLogin;

        console.log("Url :", url);

        return axiosService.post(url, data, false);

    }

    // resetPassword(data) {

    //     let url = configUrl + '';
    //     return axiosService.post(url, data, true)
    // }

    // forgetPassword(data) {

    //     let url = configUrl + '';
    //     return axiosService.post(url, data, false)
    // }

    GetBooks() {
        
        let url = configGet;
        console.log("Url :", url, "Token :", token);
        return axiosService.get(url, false)

    }

    GetBooksByName(BookName) {

        let url = GetBookByName+BookName;
        console.log("Url :", url, "Token :", token);
        return axiosService.get(url, false)

    }

    GetCart()
    {
        let url = GetCart;
        console.log("Url :", url, "Token :", token);
        return axiosService.get(url, true, token)
    }

    GetBookById(BookId)
    {
        let url = GetBookById+BookId;
        console.log("Url :", url, "Token :", token);
        return axiosService.get(url, true, token)
    }

    GetWishList()
    {
        let url = GetWishList;
        console.log("Url :", url, "Token :", token);
        return axiosService.get(url, true, token)
    }

}