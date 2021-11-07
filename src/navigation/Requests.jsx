import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
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
import ListOfRequest from './ListOfRequest'



import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";

const columns = [
  
    {
      field: 'requestList',
      headerName: 'Click the document/s you want to request)',
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
    { id: 'bailbondform', processTime: 'N/A', requestList: 'Bail Bond Form', price: 69 },
    { id: 'barangayclearanceform', processTime: 'N/A', requestList: 'Barangay Clearance Form', price: 69 },
    { id: 'buildingclearance', processTime: 'N/A', requestList: 'Building Clearance', price: 69 },
    { id: 'businessclearance', processTime: 'N/A', requestList: 'Business Clearance', price: 69 },
    { id: 'businessclosure', processTime: 'N/A', requestList: 'Business Closure', price: 69 },
    { id: 'cedula', processTime: 'N/A', requestList: 'Cedula Form', price: 69 },
    { id: 'comelecform', processTime: 'N/A', requestList: 'Comelec Form', price: 69 },
    { id: 'constituentidform', processTime: 'N/A', requestList: 'Constituent ID Form', price: 69 },
    { id: 'dentalserviceform', processTime: 'N/A', requestList: 'Dental Service Form', price: 69 },
    { id: 'guardianshipform', processTime: 'N/A', requestList: 'Guardianship Form', price: 69 },
    { id: 'immunizationform', processTime: 'N/A', requestList: 'Immunization Form', price: 69 },
    { id: 'indigencyclearance', processTime: 'N/A', requestList: 'Indigency Clearance', price: 69 },
    { id: 'maternalcareform', processTime: 'N/A', requestList: 'Maternal Care Form', price: 69 },
    { id: 'residencyform', processTime: 'N/A', requestList: 'Residency Form', price: 69 },
    { id: 'voucherform', processTime: 'N/A', requestList: 'Voucher Form', price: 69 },
];

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px 30px 25px 30px',
      
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
    totalBox:{
        paddingRight:10
    },
    button:{
        fontWeight:600,
        padding:15
    }
    
}));


function Request() {
    const [submitted, setSubmitted] = React.useState(false)
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [state, setState] = React.useState({
        notify: true,
        agree: false,
        check: false,
      });
    const handleChange = (event) => {
        setAge(event.target.valunpme);
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { notify, agree, check } = state;
    const error = [notify, agree, check].filter((v) => v).length !== 3;  

    const [selectedRequest, setSelectedRequest] = React.useState([])
    const requestId = selectedRequest.selectionModel;

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(requestId);
        setSubmitted(true)
    }

    let history = useHistory();
	const user = AuthService.getCurrentUser()

    if (user) {
        return submitted ? (
        <ListOfRequest selectedRequest={requestId}/>
    ): (
        <>
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
                    <InputLabel id="demo-simple-select-label">Purpose of Request</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value={0}>N/A</MenuItem>
                    <MenuItem value={0}>N/A</MenuItem>
                    <MenuItem value={0}>N/A</MenuItem>
                    </Select>

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
                        {notify && agree && check ? (
                            <Button variant="contained" className={classes.button} color="primary" onClick = {handleSubmit}>Submit</Button>
                        ) : (
                            <Button variant="contained" className={classes.button} color="primary" disabled>Submit</Button>
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


