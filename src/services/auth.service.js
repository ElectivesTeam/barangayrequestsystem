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
        const aemail = email;
        const afirst_name = first_name;
        const amiddle_name = middle_name;
        const alast_name = last_name;
        const apassword = password;
        const aaddress = address;
        const amobile_number = mobile_number;
        const aresident_number = resident_number;
        const adate_of_birth =  "2021-11-17"; 
        const aage = 69;
        const agender = gender.toUpperCase();
        const aprovince = "Albay";
        const acivil_status = "SINGLE";
        
        // var profile_pic = null;
        // var id_pic = null;
        
        
        // civil_status = civil_status.toUpperCase();
        // gender = gender.toUpperCase();
        console.log(password)
        console.log(email)
        console.log(first_name)
        console.log(middle_name)
        console.log(last_name)
        console.log(address)
        console.log(mobile_number)
        console.log(resident_number)
        console.log(age)
        console.log(gender)
        console.log(province)
        console.log(civil_status)
        // console.log(profile_pic)
        // console.log(id_pic)
        console.log(date_of_birth)
        // age = parseInt(age, 10)
        console.log(100 - age)
        return axios.post(API_URL + "register/", {
            "email": aemail,
            "first_name": afirst_name,
            "middle_name": amiddle_name,
            "last_name": alast_name,
            "password": apassword,
            "address": aaddress,
            "mobile_number": amobile_number,
            "resident_number": aresident_number,
            "date_of_birth": adate_of_birth,
            "age": aage,
            "gender": agender,
            "province": aprovince,
            "civil_status": acivil_status
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();