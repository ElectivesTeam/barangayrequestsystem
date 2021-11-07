import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

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
        .catch((response) =>{
            return;
        })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
        username,
        email,
        password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();