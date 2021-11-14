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
        .catch((response) =>{
            return;
        })
    }

    logout() {
        localStorage.removeItem("user");
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
}

export default new AuthService();