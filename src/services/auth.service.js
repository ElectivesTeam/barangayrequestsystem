import axios from "axios";

const API_URL = "https://brgy-landayan-odrs-app.herokuapp.com/api/users/";
const BASE_URL = "https://brgy-landayan-odrs-app.herokuapp.com"
const CLOUDINARY_URL = "https://res.cloudinary.com/hhflnonyj/"
// const API_URL = "http://localhost:8000/api/users/"
// const BASE_URL = "http://localhost:8000"

class AuthService {
    baseURL(){
        return BASE_URL
    }
    CLOUDINARY_URL(){
        return CLOUDINARY_URL
    }
    login(email, password) {
        return axios
        .post(API_URL + "login/", {
            email,
            password
        })
        .then(response => {
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        })
    }

    logout() {
        const user = localStorage.getItem('user')
        if (user){
            var token = JSON.parse(localStorage.getItem('user')).refresh;
            var access = JSON.parse(localStorage.getItem('user')).access;
            return axios.post(API_URL +"logout/", {"refresh": token}, {
                headers:{
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + access
                }
            })
            .then(
                localStorage.removeItem("user")
            )
            .catch(
                localStorage.removeItem("user")
            )
        }
    }

    register(
            email,
            first_name,
            middle_name,
            last_name,
            password,
            address,
            mobile_number,
            resident_number,
            date_of_birth,
            age,
            gender,
            province,
            civil_status,
            profile_pic,
            id_pic
            ) {
        const config = {headers: { 'Content-Type': 'multipart/form-data'}};
        let formData = new FormData();
        formData.append("email", email);
        formData.append("first_name", first_name);
        formData.append("middle_name", middle_name);
        formData.append("last_name", last_name);
        formData.append("password", password);
        formData.append("address", address);
        formData.append("mobile_number", mobile_number);
        formData.append("resident_number", resident_number);
        formData.append("date_of_birth", date_of_birth);
        formData.append("age", age);
        formData.append("gender", gender.toUpperCase());
        formData.append("province", province);
        formData.append("civil_status", civil_status.toUpperCase());
        formData.append("profile_pic", profile_pic);
        formData.append("id_pic", id_pic);
        return axios.post(API_URL + "register/", formData, config);
    }

    updateUser(
        first_name,
        middle_name,
        last_name,
        email,
        contact_number){
        var token = JSON.parse(localStorage.getItem('user')).access;
        let formData = new FormData();
        formData.append("email", email);
        formData.append("first_name", first_name);
        formData.append("middle_name", middle_name);
        formData.append("last_name", last_name);
        formData.append("mobile_number", contact_number);
        const config = {headers: { 
            Accept: 'application/json',
            Authorization: 'Bearer ' + token}};
        return axios.patch(API_URL + "getuser/", formData, config)
        .then(response =>{
            console.log("info updated")
            return response;
        })
    }

    updateProfilePic(profile_pic){
        var token = JSON.parse(localStorage.getItem('user')).access;
        let formData = new FormData();
        formData.append("profile_pic", profile_pic);
        const config = {headers: { 
            Accept: 'application/json',
            Authorization: 'Bearer ' + token}};
        return axios.patch(API_URL + "getuser/", formData, config)
        .then(response =>{
            console.log("info updated")
            return response;
        })
    }

    updatePassword(
        old_password,
        new_password,
        confirm_password){
        var token = JSON.parse(localStorage.getItem('user')).access;
        let formData = new FormData();
        formData.append("old_password", old_password);
        formData.append("password", new_password);
        formData.append("password2", confirm_password);
        const config = {headers: { 
            Accept: 'application/json',
            Authorization: 'Bearer ' + token}};
        return axios.put(API_URL + "change_password/", formData, config)
        .then(response =>{
            console.log("password updated")
            return response;
        })

    }

    getCurrentUser() {
        if(localStorage.getItem('user') != null){
            return JSON.parse(localStorage.getItem('user'));
        }else{
            return false;
        }
    }

    getAccountStatus() {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios.get(API_URL + "account-status/", {
            headers:{
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        })
        .then(response =>{
            return response;
        })
    }

    sendVerificationLink() {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios.get(API_URL + "resend-activation/", {
            headers:{
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        })
        .then(response =>{
            console.log("account activation sent")
            return response;
        })
    }

    getUserInformation(){
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios.get(API_URL + "getuser/", {
            headers:{
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        })
        .then(response =>{
            console.log("info fetched")
            return response;
        })
    }

    getUserList(){
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios.get(API_URL + "list/", {
            headers:{
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        })
        .then(response =>{
            console.log("info fetched")
            return response;
        })
    }

    verifyToken(token){
        if (token === "refresh"){
            token = JSON.parse(localStorage.getItem('user')).refresh;
        }
        if (token === "access"){
            token = JSON.parse(localStorage.getItem('user')).access;
        }
        return axios
            .post(API_URL + "token/verify/", {
                "token": token
            })
            .then(response => {
                return response;
            })
    }

    refreshAccess(){
        var user = localStorage.getItem('user');
        var token = JSON.parse(localStorage.getItem('user')).refresh;
        if(user){
            return axios
            .post(API_URL + "token/refresh/", {
                "refresh": token
            })
            .then(response => {
                localStorage.setItem("user", '{"refresh":"' + token +'","access":' + JSON.stringify(response.data.access) + '}');
                return response;
            })
        }else{
            console.log("getCurrentUser error")
        }
    }
}

export default new AuthService();