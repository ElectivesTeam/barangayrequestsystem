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

const ImmunizationForm = ({ activeForm, handleBack, handleNext, handleChange, immunization}) => {
    const classes = useStyles();
    const[nameError, setNameError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[motherNameError, setMotherNameError] = useState(false)
    const[fatherNameError, setFatherNameError] = useState(false)
    const[birthHeightError, setBirthHeightError] = useState(false)
    const[birthWeightError, setBirthWeightError] = useState(false)
    const [information, setInformation] = useState({
        name: immunization.name,
        address: immunization.address,
        mother_name:immunization.mother_name,
        father_name:immunization.father_name,
        birth_height:immunization.birth_height,
        birth_weight:immunization.birth_weight
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

        setMotherNameError(false)
        if(information.mother_name === ''){
            setMotherNameError(true)
            setChecker = false
        }

        setFatherNameError(false)
        if(information.father_name === ''){
            setFatherNameError(true)
            setChecker = false
        }

        setBirthHeightError(false)
        if(information.birth_height === ''){
            setBirthHeightError(true)
            setChecker = false
        }

        setBirthWeightError(false)
        if(information.birth_weight === ''){
            setBirthWeightError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleChange("immunizationForm", information)
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Immunization Form'}/>
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
                                                defaultValue={immunization.name}
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
                                                onChange={(e) => setInformation({...information, address:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={immunization.address}
                                                required
                                                fullWidth
                                                id="address"
                                                label="Address"
                                                name="address"
                                                autoComplete="address"
                                                
                                                error={addressError}
                                            />
                                        </Grid>

                                        {/* Mother Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, mother_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={immunization.mother_name}
                                                required
                                                fullWidth
                                                id="mother_name"
                                                label="Mother's Name"
                                                name="mother_name"
                                                autoComplete="mother_name"
                                                autoFocus
                                                error={motherNameError}
                                            />
                                        </Grid>

                                        {/* Father Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, father_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={immunization.father_name}
                                                required
                                                fullWidth
                                                id="father_name"
                                                label="Father's Name"
                                                name="father_name"
                                                autoComplete="father_name"
                                                error={fatherNameError}
                                            />
                                        </Grid>
                                        
                                        {/* Birth Height */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, birth_height:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={immunization.birth_height}
                                                required
                                                fullWidth
                                                id="birth_height"
                                                label="Height (meter)"
                                                name="birth_height"
                                                autoComplete="birth_height"
                                                error={birthHeightError}
                                            />
                                        </Grid>

                                        {/* Birth Weight */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, birth_weight:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={immunization.birth_weight}
                                                required
                                                fullWidth
                                                id="birth_weight"
                                                label="Weight"
                                                name="birth_weight"
                                                autoComplete="birth_weight"
                                                error={birthWeightError}
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

export default ImmunizationForm