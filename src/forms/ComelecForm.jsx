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
        padding: '5px 30px 232px 30px',
      
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

const ComelecForm = ({ activeForm, handleBack, handleNext, handleChange, comelec}) => {
    const classes = useStyles();
    const[nameError, setNameError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const [information, setInformation] = useState({
        name: comelec.name,
        address: comelec.address
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

        if(setChecker){
            //function to save the data in the form to the database
            console.log(information)
            handleChange("comelecForm", information)
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Comelec Form'}/>
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
                                                defaultValue={comelec.name}
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
                                                onChange={(e) => setInformation({...information, name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={comelec.address}
                                                required
                                                fullWidth
                                                id="address"
                                                label="Address"
                                                name="address"
                                                autoComplete="address"
                                                
                                                error={addressError}
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

export default ComelecForm