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

const Cedula = ({ activeForm, handleBack, handleNext, handleChange, cedula}) => {
    const classes = useStyles();
    const[nameError, setNameError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[birthdayError, setBirthdayError] = useState(false)
    const[birthPlaceError, setBirthPlaceError] = useState(false)
    const[civilStatusError, setCivilStatusError] = useState(false)
    const[genderError, setGenderError] = useState(false)
    const[professionError, setProfessionError] = useState(false)
    const[monthlyIncomeError, setMonthlyIncomeError] = useState(false)
    const [information, setInformation] = useState({
        name: cedula.name,
        address: cedula.address,
        birthday: cedula.birthday,
        birthplace: cedula.birthplace,
        civilStatus: cedula.civilStatus,
        gender: cedula.gender,
        profession: cedula.profession,
        monthlyIncome: cedula.monthlyIncome,
        
    });
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setNameError(false)
        if(information.name == ''){
            setNameError(true)
            setChecker = false
        }

        setAddressError(false)
        if(information.address == ''){
            setAddressError(true)
            setChecker = false
        }

        setBirthdayError(false)
        if(information.birthday == ''){
            setBirthdayError(true)
            setChecker = false
        }

        setBirthPlaceError(false)
        if(information.birthplace == ''){
            setBirthPlaceError(true)
            setChecker = false
        }

        setCivilStatusError(false)
        if(information.civilStatus == ''){
            setCivilStatusError(true)
            setChecker = false
        }

        setGenderError(false)
        if(information.gender == ''){
            setGenderError(true)
            setChecker = false
        }

        setProfessionError(false)
        if(information.profession == ''){
            setProfessionError(true)
            setChecker = false
        }

        setMonthlyIncomeError(false)
        if(information.monthlyIncome == ''){
            setMonthlyIncomeError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleChange("cedulaForm", information)
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
                                                onChange={(e) => setInformation({...information, name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={cedula.name}
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
                                                onChange={(e) => setInformation({...information, address:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={cedula.address}
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
                                                onChange={(e) => setInformation({...information, birthday:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={cedula.birthday}
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

                                        {/* Birth Place */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, birthplace:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={cedula.birthplace}
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
                                        
                                        {/* Civil Status */}
                                        <Grid item xs={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Civil Status</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    defaultValue={cedula.civilStatus}
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

                                        {/* Gender */}
                                        <Grid item xs={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    defaultValue={cedula.gender}
                                                    label="Gender"
                                                    onChange={(e) => setInformation({...information, gender:e.target.value})}
                                                    error={genderError}
                                                >
                                                <MenuItem value={'FEMALE'}>Female</MenuItem>
                                                <MenuItem value={'MALE'}>Male</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        {/* Profession */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, profession:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={cedula.profession}
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
                                                onChange={(e) => setInformation({...information, monthlyIncome:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={cedula.monthlyIncome}
                                                required
                                                fullWidth
                                                id="monthlyincome"
                                                label="Monthly Income"
                                                name="monthlyincome"
                                                autoComplete="monthlyincome"
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