import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Stack from '@mui/material/Stack';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import ListOfRequest from './ListOfRequest';
import AuthService from "../services/auth.service";

const columns = [
  
    {
      field: 'requestList',
      headerName: 'Click the document/s you want to request',
      width: 380,
      
    },
    {
      field: 'processTime',
      headerName: 'Processing Time',
      width: 200,
      
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 120,
      
    },
    
  ];
  
const rows = [
    { id: 'bailbondform', processTime: '1-2 hours', requestList: 'Bail Bond Form', price: 50 },
    { id: 'barangayclearanceform', processTime: '1-2 hours', requestList: 'Barangay Clearance Form', price: 100 },
    { id: 'buildingclearance', processTime: '3-4 hours', requestList: 'Building Clearance', price: 100 },
    { id: 'businessclearance', processTime: '3-4 hours', requestList: 'Business Clearance', price: 100 },
    { id: 'businessclosure', processTime: '1-2 hours', requestList: 'Business Closure', price: 100 },
    { id: 'cedula', processTime: '1-2 hours', requestList: 'Cedula Form', price: 50 },
    { id: 'comelecform', processTime: '1-2 hours', requestList: 'Comelec Form', price: 50 },
    { id: 'constituentidform', processTime: '1-2 hours', requestList: 'Constituent ID Form', price: 50 },
    { id: 'dentalserviceform', processTime: '1-2 hours', requestList: 'Dental Service Form', price: 100 },
    { id: 'guardianshipform', processTime: '1 day', requestList: 'Guardianship Form', price: 100 },
    { id: 'immunizationform', processTime: '1 day', requestList: 'Immunization Form', price: 100 },
    { id: 'indigencyclearance', processTime: '1-2 hours', requestList: 'Indigency Clearance', price: 'FREE' },
    { id: 'maternalcareform', processTime: '1 day', requestList: 'Maternal Care Form', price: 100 },
    { id: 'residencyform', processTime: '1 day', requestList: 'Residency Form', price: 100 },
    { id: 'voucherform', processTime: '1-2 hours', requestList: 'Voucher Form', price: 50 },
];

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px 30px 70px 30px',
      
    },

    title:{ 
        fontWeight: 600,
        fontSize:'1.7rem',
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
    },
    formControl: {
        fontSize: 20
    },
    total:{
        display:'flex',
        position: 'absolute',
        right: 0,
        paddingRight: 23,
        '@media (max-width: 600px)': {
            

        },
    },
    button:{
        fontWeight:600,
        padding: '5px 0px'
    }
    
}));


const Request = ({ handleNextStepper, handleBackStepper }) => {
    const [submitted, setSubmitted] = React.useState(false)
    const classes = useStyles();
    // const [purpose, setPurpose] = React.useState('')
    const [state, setState] = React.useState({
        notify: false,
        agree: false,
        check: false,
      });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    // const handlePurpose = (event) => {
    //     setPurpose(event.target.value);
    // }
    const { notify, agree, check } = state;
    const error = [notify, agree, check].filter((v) => v).length !== 3;  

    const [selectedRequest, setSelectedRequest] = React.useState([])
    const requestId = selectedRequest;   
    const [apiFormsData, setAPIFormsData] = useState({})
    const [accountStatus, setAccountStatus] = useState(false)
    const [isLoading, setLoading] = useState(true);
    
    useEffect(async() => {
		if (AuthService.getCurrentUser()){
            await AuthService.getAccountStatus()
            .then((response) => {
                if (response !== undefined){
                    setAccountStatus(response.data.is_email_verified)
                    setLoading(false)
                }
            })
            if(accountStatus){
                await AuthService.getUserInformation()
                .then((response) => {
                    if (response !== undefined){
                        if(JSON.stringify(response.data.first_name).length >= 3 && JSON.stringify(response.data.middle_name).length >= 0 && JSON.stringify(response.data.last_name).length >= 3)
                            setAPIFormsData({...apiFormsData, 
                                bailBondData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    resident_number:JSON.stringify(response.data.resident_number).slice(1,-1),
                                    caseNumber: ''
                                },
                                barangayClearanceData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    purpose: ''
                                },
                                buildingClearanceData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    type: ''
                                },
                                businessClearanceData: {
                                    businessName: '',
                                    businessOwner: '',
                                    businessAddress: '',
                                    businessNature: '',
                                    start_business_operated: ''
                                },
                                businessClosureData: {
                                    businessName: '',
                                    businessOwner: '',
                                    businessAddress: '',
                                    businessNature: '',
                                    last_business_operated: ''
                                },
                                cedulaData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    birthday:JSON.stringify(response.data.date_of_birth).slice(1,-1),
                                    birthplace: 'Laguna',
                                    civilStatus:JSON.stringify(response.data.civil_status).slice(1,-1),
                                    gender:JSON.stringify(response.data.gender).slice(1,-1),
                                    nationality: '',
                                    profession: '',
                                    monthlyIncome: ''
                                },
                                comelecData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1)
                                },
                                constituentIdData: {
                                    last_name:JSON.stringify(response.data.last_name).slice(1,-1),
                                    middle_name:JSON.stringify(response.data.middle_name).slice(1,-1),
                                    first_name:JSON.stringify(response.data.first_name).slice(1,-1),
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    // civilStatus:JSON.stringify(response.data.civil_status).slice(1,-1),
                                    // birthplace: 'Laguna',
                                    // contactNumber:JSON.stringify(response.data.mobile_number).slice(1,-1),
                                    id_number:'',
                                    dateReceived: '',
                                },
                                dentalServiceData: {
                                    last_name:JSON.stringify(response.data.last_name).slice(1,-1),
                                    middle_name:JSON.stringify(response.data.middle_name).slice(1,-1),
                                    first_name:JSON.stringify(response.data.first_name).slice(1,-1),
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    birthday:JSON.stringify(response.data.date_of_birth).slice(1,-1),
                                    civilStatus:JSON.stringify(response.data.civil_status).slice(1,-1),
                                    birthplace: 'Laguna',
                                    contactNumber:JSON.stringify(response.data.mobile_number).slice(1,-1),
                                    dateReceived: ''
                                },
                                guardianshipData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    guardian: ''
                                },
                                immunizationData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    mother_name: '',
                                    father_name: '',
                                    birth_height: '',
                                    birth_weight: ''
                                },
                                indigencyClearanceData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    patient_relationship: '',
                                    patient_name: '',
                                    purpose: '',
                                    passed_onto_whom: ''
                                },
                                maternalCareData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1),
                                    child_name: '',
                                    date_of_birth: '',
                                    birthplace: 'Laguna'
                                },
                                residenceData: {
                                    name:JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1), 
                                    address:JSON.stringify(response.data.address).slice(1,-1)
                                    // type:''
                                },
                                voucherData: {
                                    studentName: '',
                                    parentName: '',
                                    school: '',
                                    schoolAddress: '',
                                    grade: ''
                                },
                            })
                    }
                })
            }   
        }
    }, [])

    const handleAPIFormsDataChange = (formName, formData) => {
        
        switch (formName) {
            case "bailBondForm" : 
                return setAPIFormsData({...apiFormsData, 
                    bailBondData: {
                        name:formData.name, 
                        address:formData.address,
                        resident_number: formData.resident_number,
                        caseNumber: formData.caseNumber
                    }
                 })
                 
            case "barangayClearanceForm" :
                return setAPIFormsData({...apiFormsData, 
                    barangayClearanceData: {
                        name:formData.name, 
                        address:formData.address,
                        purpose: formData.purpose
                    }
                 })
            
            case "buildingClearanceForm" :
                return setAPIFormsData({...apiFormsData, 
                    buildingClearanceData: {
                        name:formData.name, 
                        address:formData.address,
                        type: formData.type
                    }
                })
            case "businessClearanceForm" :
                return setAPIFormsData({...apiFormsData, 
                    businessClearanceData: {
                        businessName: formData.businessName,
                        businessAddress: formData.businessAddress,
                        businessOwner: formData.businessOwner,
                        businessNature: formData.businessNature,
                        start_business_operated: formData.start_business_operated
                    }
                })
            case "businessClosureForm" :
                return setAPIFormsData({...apiFormsData, 
                    businessClosureData: {
                        businessName: formData.businessName,
                        businessAddress: formData.businessAddress,
                        businessOwner: formData.businessOwner,
                        businessNature: formData.businessNature,
                        dateReceived:formData.dateReceived
                    }
                })
            case "cedulaForm" :
                return setAPIFormsData({...apiFormsData, 
                    cedulaData: {
                        name:formData.name, 
                        address:formData.address,
                        birthday:formData.birthday,
                        birthplace:formData.birthplace,
                        civilStatus:formData.civilStatus,
                        gender:formData.gender,
                        nationality:formData.nationality,
                        profession:formData.profession,
                        monthlyIncome:formData.monthlyIncome,
                    }
                })
            case "comelecForm" :
                return setAPIFormsData({...apiFormsData, 
                    comelecData: {
                        name:formData.name, 
                        address:formData.address
                    }
                })
            case "constituentIdForm" :
                return setAPIFormsData({...apiFormsData, 
                    constituentIdData: {
                        last_name:formData.last_name, 
                        middle_name:formData.middle_name, 
                        first_name:formData.first_name, 
                        address:formData.address,
                        civilStatus:formData.civilStatus,
                        birthplace:formData.birthplace,
                        contactNumber:formData.contactNumber,
                        id_number:formData.id_number,
                        dateReceived:formData.dateReceived
                    }
                })
            case "dentalServiceForm" :
                return setAPIFormsData({...apiFormsData, 
                    dentalServiceData: {
                        last_name:formData.last_name, 
                        middle_name:formData.middle_name, 
                        first_name:formData.first_name,
                        birthday:formData.birthday, 
                        address:formData.address,
                        civilStatus:formData.civilStatus,
                        birthplace:formData.birthplace,
                        contactNumber:formData.contactNumber,
                        dateReceived:formData.dateReceived
                    }
                })
            case "guardianshipForm" :
                return setAPIFormsData({...apiFormsData, 
                    guardianshipData: {
                        name:formData.name, 
                        address:formData.address,
                        guardian:formData.guardian
                    }
                })
            case "immunizationForm" :
                return setAPIFormsData({...apiFormsData, 
                    immunizationData: {
                        name:formData.name, 
                        address:formData.address,
                        mother_name:formData.mother_name,
                        father_name:formData.father_name,
                        birth_height:formData.birth_height,
                        birth_weight:formData.birth_weight
                    }
                })
            case "indigencyClearanceForm" :
                return setAPIFormsData({...apiFormsData, 
                    indigencyClearanceData: {
                        name:formData.name, 
                        address:formData.address,
                        patient_relationship:formData.patient_relationship,
                        patient_name:formData.patient_name,
                        purpose:formData.purpose,
                        passed_onto_whom:formData.passed_onto_whom
                    }
                })
            case "maternalCareForm" :
                return setAPIFormsData({...apiFormsData, 
                    maternalCareData: {
                        name:formData.name, 
                        address:formData.address,
                        child_name:formData.child_name,
                        date_of_birth:formData.date_of_birth,
                        birthplace:formData.birthplace
                    }
                })
            case "residenceForm" :
                return setAPIFormsData({...apiFormsData, 
                    residenceData: {
                        name:formData.name, 
                        address:formData.address,
                        // type: formData.type
                    }
                })
            case "voucherForm" :
                return setAPIFormsData({...apiFormsData, 
                    voucherData: {
                        studentName:formData.studentName,
                        parentName:formData.parentName,
                        school:formData.school,
                        schoolAddress:formData.schoolAddress,
                        grade:formData.grade,
                    }
                })
        }
        
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        handleNextStepper();
        setSubmitted(true)
    }

    let history = useHistory();

    if(isLoading){
        return <div className="App">Loading...</div>;
    }
    if (AuthService.getCurrentUser() && accountStatus) {
        return submitted ? (
        <ListOfRequest selectedRequest={requestId} apiFormsData = {apiFormsData} handleAPIFormsDataChange= {handleAPIFormsDataChange} handleNextStepper={handleNextStepper} handleBackStepper={handleBackStepper} />
    ): (
        <>
            {/* <HorizontalLinearStepper/> */}
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2} className={classes.title}>
                        REQUESTS
                    </Box>
                </Grid>
                <div style={{ height: 380, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                        onSelectionModelChange = {(request) => setSelectedRequest(request)}
                    />
                </div>    
                <div>
                
                <FormControl required error={error} component="fieldset" className={classes.formControl} >     
                    {/* <InputLabel id="demo-simple-select-label">Purpose of Request</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={purpose}
                    onChange={handlePurpose}
                    >
                    <MenuItem value={1}>Scholarship</MenuItem>
                    <MenuItem value={2}>Work Requirements</MenuItem>
                    <MenuItem value={3}>Financial Assistance</MenuItem>
                    <MenuItem value={4}>Others</MenuItem>
                    </Select> */}

                    <FormGroup >
                        <FormControlLabel
                            control={<Checkbox checked={notify} onChange={handleChange} name="notify" color="primary"/>}
                            label="Notify via Email"
                            
                        />
                        <FormControlLabel
                            control={<Checkbox checked={agree} onChange={handleChange} name="agree" color="primary"/>}
                            label="I agree to the Terms & Conditions"
                        />
                        <FormControlLabel
                        control={<Checkbox checked={check} onChange={handleChange} name="check" color="primary"/>}
                        label="I checked all the documents I need to request"
                        />   
                        
                        
                    </FormGroup>
                    <FormHelperText>Conditions must be checked to proceed</FormHelperText>
                </FormControl>
                <div className={classes.total}>
                    
                    <div>
                        {notify && agree && check && selectedRequest.length != 0 ? (
                            <Button variant="contained" color="primary" onClick = {handleSubmit} endIcon={<ArrowCircleUpIcon/>} >
                                <Stack direction="row" alignItems="center" >
                                    <Typography variant="button" className={classes.button}>
                                        Submit
                                    </Typography>
                                </Stack>
                                
                            </Button>
                        ) : (
                            <Button variant="contained" color="primary" disabled endIcon={<ArrowCircleUpIcon/>} >
                                <Typography variant="button" className={classes.button}>
                                    Submit
                                </Typography>
                            </Button>
                        )}
                        
                    </div>
                    
                </div>
                </div>
            </Grid>
        </>
    )
    }else{
        history.push('/login')
    	  return(<h2>Login</h2>)
    }
}

export default Request


