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

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px 30px 135px 30px',
      
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

const DentalServiceForm = ({ activeForm, handleBack, handleNext, handleChange, dentalService}) => {
    const classes = useStyles();
    const[lastNameError, setLastNameError] = useState(false)
    const[middleNameError, setMiddleNameError] = useState(false)
    const[firstNameError, setFirstNameError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[civilStatusError, setCivilStatusError] = useState(false)
    const[birthdayError, setBirthdayError] = useState(false)
    const[birthPlaceError, setBirthPlaceError] = useState(false)
    const[contactNumberError, setContactNumberError] = useState(false)
    const[dateReceivedError, setDateReceivedError] = useState(false)
    const [information, setInformation] = useState({
        last_name: dentalService.last_name,
        middle_name: dentalService.middle_name,
        first_name: dentalService.first_name,
        address: dentalService.address,
        birthday: dentalService.birthday,
        civilStatus: dentalService.civilStatus,
        birthplace: dentalService.birthplace,
        contactNumber: dentalService.contactNumber,
        dateReceived: dentalService.dateReceived
    });
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setLastNameError(false)
        if(information.last_name === ''){
            setLastNameError(true)
            setChecker = false
        }

        setMiddleNameError(false)
        if(information.middle_name === ''){
            setMiddleNameError(true)
            setChecker = false
        }

        setFirstNameError(false)
        if(information.first_name === ''){
            setFirstNameError(true)
            setChecker = false
        }

        setBirthdayError(false)
        if(information.birthday === ''){
            setBirthdayError(true)
            setChecker = false
        }

        setAddressError(false)
        if(information.address === ''){
            setAddressError(true)
            setChecker = false
        }

        setCivilStatusError(false)
        if(information.civilStatus === ''){
            setCivilStatusError(true)
            setChecker = false
        }

        setBirthPlaceError(false)
        if(information.birthplace === ''){
            setBirthPlaceError(true)
            setChecker = false
        }

        setContactNumberError(false)
        if(information.contactNumber === ''){
            setContactNumberError(true)
            setChecker = false
        }

        setDateReceivedError(false)
        if(information.dateReceived === ''){
            setDateReceivedError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            console.log(information)
            handleChange("dentalServiceForm", information)
            handleNext()
        }
    }
    return (
        <>
            <FormHeader formTitle={'Dental Service Form'}/>
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
                                                onChange={(e) => setInformation({...information, last_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={dentalService.last_name}
                                                required
                                                fullWidth
                                                id="lastname"
                                                label="Last Name"
                                                name="lastname"
                                                autoComplete="lastname"
                                                autoFocus
                                                error={lastNameError}
                                            />
                                        </Grid>

                                        {/* Middle Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, middle_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={dentalService.middle_name}
                                                required
                                                fullWidth
                                                id="middlename"
                                                label="Middle Name"
                                                name="middlename"
                                                autoComplete="middlename"
                                                autoFocus
                                                error={middleNameError}
                                            />
                                        </Grid>

                                        {/* First Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, first_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={dentalService.first_name}
                                                required
                                                fullWidth
                                                id="firstname"
                                                label="First Name"
                                                name="firstname"
                                                autoComplete="firstname"
                                                autoFocus
                                                error={firstNameError}
                                            />
                                        </Grid>
                                        {/* Birthday */}
                                        <Grid item xs={6}>
                                            <TextField
                                                type="date"
                                                onChange={(e) => setInformation({...information, birthday:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={dentalService.birthday}
                                                required
                                                fullWidth
                                                id="birthday"
                                                label="Birthday"
                                                name="birthday"
                                                autoComplete="birthday"
                                                autoFocus
                                                error={birthdayError}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        {/* Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, address:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={dentalService.address}
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

                                        {/* Civil Status */}
                                        <Grid item xs={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Civil Status</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    defaultValue={dentalService.civilStatus}
                                                    label="Civil Status"
                                                    onChange={(e) => setInformation({...information, civilStatus:e.target.value})}
                                                    error={civilStatusError}
                                                >
                                                <MenuItem value={'SINGLE'}>Single</MenuItem>
                                                <MenuItem value={'MARRIED'}>Married</MenuItem>
                                                <MenuItem value={'WIDOWED'}>Widowed</MenuItem>
                                                <MenuItem value={'DIVORCED'}>Divorced</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        
                                        {/* Birth Place */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, birthplace:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={dentalService.birthplace}
                                                required
                                                fullWidth
                                                id="birthplace"
                                                label="Birthplace"
                                                name="Birthplace"
                                                autoComplete="birthplace"
                                                autoFocus
                                                error={birthPlaceError}
                                            />
                                        </Grid>

                                        {/* Contact Number */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, contactNumber:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={dentalService.contactNumber}
                                                required
                                                fullWidth
                                                id="contactnumber"
                                                label="Contact Number"
                                                name="contactnumber"
                                                autoComplete="ContactNumber"
                                                autoFocus
                                                error={contactNumberError}
                                            />
                                        </Grid>

                                        {/* Date Received */}
                                        <Grid item xs={6}>
                                            <TextField
                                                type="date"
                                                onChange={(e) => setInformation({...information, dateReceived:e.target.value})}
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
                                                defaultValue={dentalService.dateReceived}
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

export default DentalServiceForm