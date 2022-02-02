import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/users/";

class AuthService {
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
            civil_status 
            ) {
        return axios.post(API_URL + "register/", {
            "email": email,
            "first_name": first_name,
            "middle_name": middle_name,
            "last_name": last_name,
            "password": password,
            "address": address,
            "mobile_number": mobile_number,
            "resident_number": resident_number,
            "date_of_birth": date_of_birth,
            "age": age,
            "gender": gender.toUpperCase(),
            "province": province,
            "civil_status": civil_status.toUpperCase()
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
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
        var user = this.getCurrentUser()
        console.log(user)
        var token = JSON.parse(localStorage.getItem('user')).refresh;
        if(user){
            return axios
            .post(API_URL + "token/refresh/", {
                "refresh": token
            })
            .then(response => {
                user.access = JSON.stringify(response.data.access).slice(1,-1)
                localStorage.setItem("user", user);
                return response;
            })
        }
    }
}

export default new AuthService();