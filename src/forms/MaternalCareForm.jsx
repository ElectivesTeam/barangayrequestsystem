import React, { useState } from 'react'
import FormHeader from './components/FormHeader'
import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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

const MaternalCareForm = ({ activeForm, handleBack, handleNext, handleChange, maternalCare}) => {
    const classes = useStyles();
    const[nameError, setNameError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[childNameError, setChildNameError] = useState(false)
    const[dateOfBirthError, setDateOfBirthError] = useState(false)
    const[birthplaceError, setBirthplaceError] = useState(false)
    const [information, setInformation] = useState({
        name: maternalCare.name,
        address: maternalCare.address,
        child_name: maternalCare.child_name,
        date_of_birth: maternalCare.date_of_birth,
        birthplace: maternalCare.birthplace
    });

    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setNameError(false)
        if(information.name === ''){
            setNameError(true)
            setChecker = false
        }

        setAddressError(false)
        if(information.address === ''){
            setAddressError(true)
            setChecker = false
        }
        setChildNameError(false)
        if(information.child_name === ''){
            setChildNameError(true)
            setChecker = false
        }

        setDateOfBirthError(false)
        if(information.date_of_birth === ''){
            setDateOfBirthError(true)
            setChecker = false
        }

        setBirthplaceError(false)
        if(information.birthplace === ''){
            setBirthplaceError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleChange("maternalCareForm", information)
            handleNext()
        }
    }
    console.log(maternalCare)
    return (
        <>
            <FormHeader formTitle={'Maternal Care Form'}/>
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
                                                defaultValue={maternalCare.name}
                                                required
                                                fullWidth
                                                id="name"
                                                label="Name"
                                                name="name"
                                                autoComplete="name"
                                                error={nameError}
                                            />
                                        </Grid>
                                        
                                        {/* Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={maternalCare.address}
                                                required
                                                fullWidth
                                                id="address"
                                                label="Address"
                                                name="address"
                                                autoComplete="address"
                                                error={addressError}
                                            />
                                        </Grid>

                                        {/* Birthplace */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, birthplace:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={maternalCare.birthplace}
                                                required
                                                fullWidth
                                                id="birthplace"
                                                label="Birthplace"
                                                name="birthplace"
                                                autoComplete="birthplace"
                                                autoFocus
                                                error={birthplaceError}
                                            />
                                        </Grid>

                                        {/* Child Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, child_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={maternalCare.child_name}
                                                required
                                                fullWidth
                                                id="child_name"
                                                label="Child's Name"
                                                name="child_name"
                                                autoComplete="child_name"
                                                autoFocus
                                                error={childNameError}
                                            />
                                        </Grid>

                                        {/* Date of Birth */}
                                        <Grid item xs={6}>
                                            {/* Input goes here */}
                                            <TextField
                                                type="date"
                                                onChange={(e) => setInformation({...information, date_of_birth:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="date_of_birth"
                                                label="Date of Birth"
                                                name="date_of_birth"
                                                autoComplete="date_of_birth"
                                                error={dateOfBirthError}
                                                defaultValue={maternalCare.date_of_birth}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        {/* Other Field */}
                                        <Grid item xs={6}>
                                            {/* Input goes here */}
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

export default MaternalCareForm