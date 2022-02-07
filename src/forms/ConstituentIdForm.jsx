import React, { useState } from 'react'
import FormHeader from './components/FormHeader'
import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import AuthService from "../services/auth.service";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px 30px 0px 30px',
      
    },
    title:{ 
        fontWeight: 600,
        fontSize:'1.4rem',
    },
    info:{
        fontWeight: 500,
        fontSize:'1rem',
        paddingLeft:'25px'
    },
    button: {
        width: '10%',
        height: '10%',   
        left: '77%',
    },
    firstpagebutton: {
        width: '10%',
        height: '10%',   
        left: '90%',
    },
    buttondiv: {
        paddingTop: '15px',
        paddingBottom: '15px'
    }
}));

const ConstituentIdForm = ({ activeForm, handleBack, handleNext}) => {
    const classes = useStyles();
    const[lastName, setLastName] = useState('')
    const[lastNameError, setLastNameError] = useState(false)

    const[middleName, setMiddleName] = useState('')
    const[middleNameError, setMiddleNameError] = useState(false)

    const[firstName, setFirstName] = useState('')
    const[firstNameError, setFirstNameError] = useState(false)

    const[address, setAddress] = useState('')
    const[addressError, setAddressError] = useState(false)

    const[civilStatus, setCivilStatus] = useState('')
    const[civilStatusError, setCivilStatusError] = useState(false)

    const[birthPlace, setBirthPlace] = useState('')
    const[birthPlaceError, setBirthPlaceError] = useState(false)

    const[contactNumber, setContactNumber] = useState('')
    const[contactNumberError, setContactNumberError] = useState(false)

    const[dateReceived, setDateReceived] = useState('')
    const[dateReceivedError, setDateReceivedError] = useState(false)
    
	// const[address_info, setAddressInfo] = useState('');
    // const[status_info, setStatusInfo] = useState('');
    const[getInfo, setGetInfoCheck] = useState(false)
	if (!getInfo){
		AuthService.getUserInformation()
		.then((response) => {
			if (response !== undefined){
				if(JSON.stringify(response.data.first_name).length >= 3)
					setFirstName(JSON.stringify(response.data.first_name).slice(1,-1));
				if(JSON.stringify(response.data.last_name).length >= 3)
					setLastName(JSON.stringify(response.data.last_name).slice(1,-1));
                if(JSON.stringify(response.data.middle_name).length >= 3)
					setMiddleName(JSON.stringify(response.data.middle_name).slice(1,-1));
				if(JSON.stringify(response.data.address).length >= 3)
					setAddress(JSON.stringify(response.data.address).slice(1,-1));
                if(JSON.stringify(response.data.civil_status).length >= 3)
					setCivilStatus(JSON.stringify(response.data.civil_status).slice(1,-1));
                if(JSON.stringify(response.data.mobile_number).length >= 3)
					setContactNumber(JSON.stringify(response.data.mobile_number).slice(1,-1));
				// if(JSON.stringify(response.data.email).length >= 3)
				// 	setEmail(JSON.stringify(response.data.email).slice(1,-1));
				// if(JSON.stringify(response.data.mobile_number).length >= 3)
				// 	setContactNumber(JSON.stringify(response.data.mobile_number).slice(1,-1));
				setGetInfoCheck(true);
            }
		})
	}
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        // setLastNameError(false)
        // if(lastName == ''){
        //     setLastNameError(true)
        //     setChecker = false
        // }

        // setMiddleNameError(false)
        // if(middleName == ''){
        //     setMiddleNameError(true)
        //     setChecker = false
        // }

        // setFirstNameError(false)
        // if(firstName == ''){
        //     setFirstNameError(true)
        //     setChecker = false
        // }

        // setAddressError(false)
        // if(address == ''){
        //     setAddressError(true)
        //     setChecker = false
        // }

        // setCivilStatusError(false)
        // if(civilStatus == ''){
        //     setCivilStatusError(true)
        //     setChecker = false
        // }

        // setBirthPlaceError(false)
        // if(birthPlace == ''){
        //     setBirthPlaceError(true)
        //     setChecker = false
        // }

        // setContactNumberError(false)
        // if(contactNumber == ''){
        //     setContactNumberError(true)
        //     setChecker = false
        // }

        setDateReceivedError(false)
        if(dateReceived == ''){
            setDateReceivedError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Constituent Id Form'}/>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            <form onSubmit={handleSubmit}>

                                <div className={classes.info}>
                                    <Grid container spacing={2}>

                                        {/* Last Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setLastName(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={lastName}
                                                required
                                                fullWidth
                                                id="lastname"
                                                label="Last Name"
                                                name="lastname"
                                                autoComplete="lastname"
                                                autoFocus
                                                // error={lastNameError}
                                            />
                                        </Grid>

                                        {/* Middle Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setMiddleName(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={middleName}
                                                required
                                                fullWidth
                                                id="middlename"
                                                label="Middle Name"
                                                name="middlename"
                                                autoComplete="middlename"
                                                autoFocus
                                                // error={middleNameError}
                                            />
                                        </Grid>

                                        {/* First Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setFirstName(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={firstName}
                                                required
                                                fullWidth
                                                id="firstname"
                                                label="First Name"
                                                name="firstname"
                                                autoComplete="firstname"
                                                autoFocus
                                                // error={firstNameError}
                                            />
                                        </Grid>
                                        
                                        {/* Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setAddress(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={address}
                                                required
                                                fullWidth
                                                id="address"
                                                label="Address"
                                                name="address"
                                                autoComplete="address"
                                                autoFocus
                                                // error={addressError}
                                            />
                                        </Grid>

                                        {/* Civil Status */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setCivilStatus(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={civilStatus}
                                                required
                                                fullWidth
                                                id="demo-simple-select"
                                                label="Civil Status"
                                                name="Civil Status"
                                                autoComplete="civilstatus"
                                                autoFocus
                                                // error={civilStatusError}
                                            />
                                            {/* <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Civil Status</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={civilStatus}
                                                    label="Civil Status"
                                                    onChange={(e) => setCivilStatus(e.target.value)}
                                                    error={civilStatusError}
                                                >
                                                <MenuItem value={'Single'}>Single</MenuItem>
                                                <MenuItem value={'Married'}>Married</MenuItem>
                                                <MenuItem value={'Widowed'}>Widowed</MenuItem>
                                                <MenuItem value={'Divorced'}>Divorced</MenuItem>
                                                </Select>
                                            </FormControl> */}
                                        </Grid>
                                        
                                        {/* Birth Place */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setBirthPlace(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={"Laguna"}
                                                required
                                                fullWidth
                                                id="birthplace"
                                                label="Birthplace"
                                                name="Birthplace"
                                                autoComplete="birthplace"
                                                autoFocus
                                                // error={birthPlaceError}
                                            />
                                        </Grid>

                                        {/* Contact Number */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setContactNumber(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={contactNumber}
                                                required
                                                fullWidth
                                                id="contactnumber"
                                                label="Contact Number"
                                                name="contactnumber"
                                                autoComplete="ContactNumber"
                                                autoFocus
                                                // error={contactNumberError}
                                            />
                                        </Grid>

                                        {/* Date Received */}
                                        <Grid item xs={6}>
                                            <TextField
                                                type="date"
                                                onChange={(e) => setDateReceived(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="DateReceived"
                                                label="Date Received"
                                                name="DateReceived"
                                                autoComplete="DateReceived"
                                                autoFocus
                                                error={dateReceivedError}
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>

                                {/* Buttons */}
                                <div className={classes.buttondiv}>
                                    {activeForm !== 0 &&
                                        <Button 
                                            onClick={handleBack} 
                                            color="primary"
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                    }         
                                        <Button
                                            variant="contained"
                                            onClick={handleSubmit}
                                            type="submit"
                                            color="primary"
                                            className={activeForm === 0 ? classes.firstpagebutton : classes.button}
                                        >
                                            Next
                                        </Button>
                                </div>
                            </form> 
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default ConstituentIdForm