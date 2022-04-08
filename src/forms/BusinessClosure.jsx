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

const BusinessClosure = ({ activeForm, handleBack, handleNext, handleChange, businessClosure}) => {
    
    const classes = useStyles();
    const[businessNameError, setBusinessNameError] = useState(false)
    const[businessAddressError, setBusinessAddressError] = useState(false)
    const[businessOwnerError, setBusinessOwnerError] = useState(false)
    const[natureOfBusinessError, setNatureOfBusinessError] = useState(false)
    const[dateReceivedError, setDateReceivedError] = useState(false)
    const [information, setInformation] = useState({
        businessName: businessClosure.businessName,
        businessOwner: businessClosure.businessOwner,
        businessAddress: businessClosure.businessAddress,
        businessNature: businessClosure.businessNature,
        dateReceived: businessClosure.dateReceived
    });
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setBusinessNameError(false)
        if(information.businessName == ''){
            setBusinessNameError(true)
            setChecker = false
        }
        
        setBusinessOwnerError(false)
        if(information.businessOwner == ''){
            setBusinessOwnerError(true)
            setChecker = false
        }

        setBusinessAddressError(false)
        if(information.businessAddress == ''){
            setBusinessAddressError(true)
            setChecker = false
        }

        setNatureOfBusinessError(false)
        if(information.businessNature == ''){
            setNatureOfBusinessError(true)
            setChecker = false
        }

        setDateReceivedError(false)
        if(information.dateReceived == ''){
            setDateReceivedError(true)
            setChecker = false
        }
        if(setChecker){
            //function to save the data in the form to the database
            handleChange("businessClosureForm", information)
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
                                                onChange={(e) => setInformation({...information, businessName:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={businessClosure.businessName}
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
                                                onChange={(e) => setInformation({...information, businessOwner:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={businessClosure.businessOwner}
                                                required
                                                fullWidth
                                                id="businessowner"
                                                label="Business Owner"
                                                name="businessowner"
                                                autoComplete="businessowner"
                                                error={businessOwnerError}
                                            />
                                        </Grid>
                                        
                                        {/* Business Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, businessAddress:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={businessClosure.businessAddress}
                                                required
                                                fullWidth
                                                id="businessaddress"
                                                label="Business Address"
                                                name="businessaddress"
                                                autoComplete="businessaddress"
                                                error={businessAddressError}
                                            />
                                        </Grid>
                                        
                                        {/* Nature of Business */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, businessNature:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={businessClosure.businessNature}
                                                required
                                                fullWidth
                                                id="natureofbusiness"
                                                label="Nature of Business"
                                                name="natureofbusiness"
                                                autoComplete="natureofbusiness"
                                                error={natureOfBusinessError}
                                            />
                                        </Grid>
                                        
                                        {/* Last Business Operation */}
                                        <Grid item xs={6}>
                                            {/* Input goes here */}
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
                                                error={dateReceivedError}
                                                defaultValue={businessClosure.dateReceived}
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

export default BusinessClosure