import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/forms/";


class formService {
    email(){
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .get(API_URL + "email_notification",
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        )
    }

    // Bail Bond - axios.post(url[, data[, config]])
    bailBond(resident_number, case_number) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "bailbond/",
            //data
            {
                resident_number,
                case_number
            },
            //config
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Barangay Clearance
    barangayClearance(resident_number, purpose) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "barangay-clearance/", {
                resident_number,
                purpose
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Building Clearance
    buildingClearance(resident_number, maintenance_type) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "building/", {
                resident_number,
                maintenance_type
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Business Clearance
    businessClearance(resident_number, business_name, business_owner, business_address, business_nature, start_business_operated) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "business-clearance/", {
                resident_number,
                business_name,
                business_owner,
                business_address,
                business_nature,
                start_business_operated
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Business Closure
    businessClosure(resident_number, business_name, business_owner, business_address, business_nature, last_business_operated) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "business-closure/", {
                resident_number,
                business_name,
                business_owner,
                business_address,
                business_nature,
                last_business_operated
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Cedula
    cedula(resident_number, birth_place, profession, monthly_income) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "cedula/", {
                resident_number,
                birth_place,
                profession,
                monthly_income
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Comelec
    comelec(resident_number) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "comelec/", {
                resident_number
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Constituent (no sig and pic yet)
    constituent(resident_number, id_number, date_received, signature, picture) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "constituent/", {
                resident_number,
                id_number,
                date_received,
                signature,
                picture
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Dental Service
    dentalService(resident_number) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "dental-service/", {
                resident_number
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Guardianship
    guardianship(resident_number, guardian_name) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "guardianship/", {
                resident_number,
                guardian_name
            },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Immunization
    immunization(resident_number, mother_name, father_name, birth_height, birth_weight) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "immunization/", {
                resident_number,
                mother_name,
                father_name,
                birth_height,
                birth_weight
        },
        {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Indigency Clearance
    indigencyClearance(resident_number, patient_relationship, patient_name, purpose, passed_onto_whom) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "indigency-clearance/", {
                resident_number,
                patient_relationship,
                patient_name,
                purpose,
                passed_onto_whom
        },
        {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Maternal Care
    maternalCare(resident_number, child_name, date_of_birth, birth_place) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "maternal-care/", {
                resident_number,
                child_name,
                date_of_birth,
                birth_place
        },
        {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Residence
    residency(resident_number) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "residency/", {
                resident_number
        },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    // Voucher
    voucher(resident_number, student_name, parent_name, school, grade) {
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios
        .post(API_URL + "voucher/", {
            resident_number,
            student_name,
            parent_name,
            school,
            grade
        },
            {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            }
        );
    }

    getMyRequests(){
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios.get(API_URL + "view-all-myforms/", {
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

    deleteRequest(request_number, document_name){
        var token = JSON.parse(localStorage.getItem('user')).access;
        return axios.delete(API_URL + "my" + document_name + "/", {
            headers:{
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
            data: {
                request_number: request_number
            }
        })
        .then(response =>{
            return response;
        })
    }

    getFormDetails(request_number, document_name){
        var token = JSON.parse(localStorage.getItem('user')).access;
        const config = {headers: { 'Accept': 'application/json', 'Authorization': 'Bearer ' + token}};
        let formData = new FormData();
        formData.append("request_number", request_number);
        return axios.post(API_URL + "my" + document_name + "/", formData, config)
        .then(response =>{
            return response;
        })
    }
}

export default new formService();