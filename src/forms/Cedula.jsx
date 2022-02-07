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

const Cedula = ({ activeForm, handleBack, handleNext}) => {
    const classes = useStyles();
    const[name, setName] = useState('')
    const[nameError, setNameError] = useState(false)

    const[address, setAddress] = useState('')
    const[addressError, setAddressError] = useState(false)

    const[birthday, setBirthday] = useState('')
    const[birthdayError, setBirthdayError] = useState(false)

    const[birthPlace, setBirthPlace] = useState('')
    const[birthPlaceError, setBirthPlaceError] = useState(false)

    const[civilStatus, setCivilStatus] = useState('')
    const[civilStatusError, setCivilStatusError] = useState(false)

    const[gender, setGender] = useState('')
    const[genderError, setGenderError] = useState(false)
    
    const[nationality, setNationality] = useState('')
    const[nationalityError, setNationalityError] = useState(false)

    const[profession, setProfession] = useState('')
    const[professionError, setProfessionError] = useState(false)

    const[monthlyIncome, setMonthlyIncome] = useState('')
    const[monthlyIncomeError, setMonthlyIncomeError] = useState(false)

    const[getInfo, setGetInfoCheck] = useState(false)
	if (!getInfo){
		AuthService.getUserInformation()
		.then((response) => {
			if (response !== undefined){
				if(JSON.stringify(response.data.first_name).length >= 3 && JSON.stringify(response.data.middle_name).length >= 0 && JSON.stringify(response.data.last_name).length >= 3)
					setName(JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1));
				if(JSON.stringify(response.data.address).length >= 3)
					setAddress(JSON.stringify(response.data.address).slice(1,-1));
                if(JSON.stringify(response.data.date_of_birth).length >= 3)
                    setBirthday(JSON.stringify(response.data.date_of_birth).slice(1,-1));
                if(JSON.stringify(response.data.civil_status).length >= 3)
                    setCivilStatus(JSON.stringify(response.data.civil_status).slice(1,-1));
                if(JSON.stringify(response.data.gender).length >= 3)
                    setGender(JSON.stringify(response.data.gender).slice(1,-1));
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
        
        // setNameError(false)
        // if(name == ''){
        //     setNameError(true)
        //     setChecker = false
        // }

        // setAddressError(false)
        // if(address == ''){
        //     setAddressError(true)
        //     setChecker = false
        // }

        // setBirthdayError(false)
        // if(birthday == ''){
        //     setBirthdayError(true)
        //     setChecker = false
        // }

        // setBirthPlaceError(false)
        // if(birthPlace == ''){
        //     setBirthPlaceError(true)
        //     setChecker = false
        // }

        // setCivilStatusError(false)
        // if(civilStatus == ''){
        //     setCivilStatusError(true)
        //     setChecker = false
        // }

        // setGenderError(false)
        // if(gender == ''){
        //     setGenderError(true)
        //     setChecker = false
        // }

        setNationalityError(false)
        if(nationality == ''){
            setNationalityError(true)
            setChecker = false
        }

        setProfessionError(false)
        if(profession == ''){
            setProfessionError(true)
            setChecker = false
        }

        setMonthlyIncomeError(false)
        if(monthlyIncome == ''){
            setMonthlyIncomeError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Cedula'}/>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            <form onSubmit={handleSubmit}>

                                <div className={classes.info}>
                                    <Grid container spacing={2}>

                                        {/* Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setName(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={name}
                                                required
                                                fullWidth
                                                id="name"
                                                label="Name"
                                                name="name"
                                                autoComplete="name"
                                                autoFocus
                                                error={nameError}
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
                                                error={addressError}
                                            />
                                        </Grid>
                                        
                                        {/* Birthday */}
                                        <Grid item xs={6}>
                                            <TextField
                                                type="date"
                                                onChange={(e) => setBirthday(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={birthday}
                                                required
                                                fullWidth
                                                id="birthday"
                                                label="Birthday"
                                                name="birthday"
                                                autoComplete="birthday"
                                                autoFocus
                                                error={birthdayError}
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
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
                                                    value={status_info}
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

                                        {/* Gender */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setCivilStatus(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={gender}
                                                required
                                                fullWidth
                                                id="demo-simple-select"
                                                label="Gender"
                                                name="Gender"
                                                autoComplete="gender"
                                                autoFocus
                                                // error={genderError}
                                            />
                                            {/* <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={civilStatus}
                                                    label="Gender"
                                                    onChange={(e) => setGender(e.target.value)}
                                                    error={genderError}
                                                >
                                                <MenuItem value={'Female'}>Female</MenuItem>
                                                <MenuItem value={'Male'}>Male</MenuItem>
                                                </Select>
                                            </FormControl> */}
                                        </Grid>

                                        {/* Nationality */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setNationality(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="nationality"
                                                label="Nationality"
                                                name="nationality"
                                                autoComplete="nationality"
                                                autoFocus
                                                error={nationalityError}
                                            />
                                        </Grid> 

                                        {/* Profession */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setProfession(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="profession"
                                                label="Profession"
                                                name="profession"
                                                autoComplete="profession"
                                                autoFocus
                                                error={professionError}
                                            />
                                        </Grid>  
                                        {/* Monthly Income */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setMonthlyIncome(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="monthlyincome"
                                                label="Monthly Income"
                                                name="monthlyincome"
                                                autoComplete="monthlyincome"
                                                autoFocus
                                                error={monthlyIncomeError}
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

export default Cedula