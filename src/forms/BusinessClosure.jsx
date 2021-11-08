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

const BusinessClosure = ({ activeForm, handleBack, handleNext}) => {
    const classes = useStyles();
    const[businessName, setBusinessName] = useState('')
    const[businessNameError, setBusinessNameError] = useState(false)

    const[businessAddress, setBusinessAddress] = useState('')
    const[businessAddressError, setBusinessAddressError] = useState(false)

    const[businessOwner, setBusinessOwner] = useState('')
    const[businessOwnerError, setBusinessOwnerError] = useState(false)

    const[natureOfBusiness, setNatureOfBusiness] = useState('')
    const[natureOfBusinessError, setNatureOfBusinessError] = useState(false)
    
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setBusinessNameError(false)
        if(businessName == ''){
            setBusinessNameError(true)
            setChecker = false
        }
        
        setBusinessOwnerError(false)
        if(businessOwner == ''){
            setBusinessOwnerError(true)
            setChecker = false
        }

        setBusinessAddressError(false)
        if(businessAddress == ''){
            setBusinessAddressError(true)
            setChecker = false
        }

        setNatureOfBusinessError(false)
        if(natureOfBusiness == ''){
            setNatureOfBusinessError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Business Closure Form'}/>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            <form onSubmit={handleSubmit}>

                                <div className={classes.info}>
                                    <Grid container spacing={2}>

                                        {/* Business Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setBusinessName(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="businessname"
                                                label="Business Name"
                                                name="businessname"
                                                autoComplete="businessname"
                                                autoFocus
                                                error={businessNameError}
                                            />
                                        </Grid>

                                        {/* Business Owner */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setBusinessOwner(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="businessowner"
                                                label="Business Owner"
                                                name="businessowner"
                                                autoComplete="businessowner"
                                                autoFocus
                                                error={businessOwnerError}
                                            />
                                        </Grid>
                                        
                                        {/* Business Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setBusinessAddress(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="businessaddress"
                                                label="Business Address"
                                                name="businessaddress"
                                                autoComplete="businessaddress"
                                                autoFocus
                                                error={businessAddressError}
                                            />
                                        </Grid>
                                        
                                        {/* Nature of Business */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setNatureOfBusiness(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="natureofbusiness"
                                                label="Nature of Business"
                                                name="natureofbusiness"
                                                autoComplete="natureofbusiness"
                                                autoFocus
                                                error={natureOfBusinessError}
                                            />
                                        </Grid>
                                        
                                        {/* Last Business Operation */}
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

export default BusinessClosure