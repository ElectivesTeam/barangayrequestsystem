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

const BusinessClearanceForm = ({ activeForm, handleBack, handleNext, handleChange, businessClearance}) => {
    const classes = useStyles();
    const[nameError, setNameError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[ownerError, setOwnerError] = useState(false)
    const[natureError, setNatureError] = useState(false)
    const[startBusinessError, setStartBusinessError] = useState(false)
    const [information, setInformation] = useState({
        businessName: businessClearance.businessName,
        businessOwner: businessClearance.businessOwner,
        businessAddress: businessClearance.businessAddress,
        businessNature: businessClearance.businessNature,
        start_business_operated: businessClearance.start_business_operated
    });
    
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setNameError(false)
        if(information.businessName == ''){
            setNameError(true)
            setChecker = false
        }

        setAddressError(false)
        if(information.businessAddress == ''){
            setAddressError(true)
            setChecker = false
        }

        setOwnerError(false)
        if(information.businessOwner == ''){
            setOwnerError(true)
            setChecker = false
        }

        setNatureError(false)
        if(information.businessNature == ''){
            setNatureError(true)
            setChecker = false
        }

        setStartBusinessError(false)
        if(information.start_business_operated == ''){
            setStartBusinessError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleChange("businessClearanceForm",information)
            console.log(information)
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Business Clearance Form'}/>
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
                                                defaultValue={businessClearance.businessName}
                                                required
                                                fullWidth
                                                id="name"
                                                label="Business Name"
                                                name="name"
                                                autoComplete="name"
                                                autoFocus
                                                error={nameError}
                                            />
                                        </Grid>
                                        
                                        {/* Business Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, businessAddress:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={businessClearance.businessAddress}
                                                required
                                                fullWidth
                                                id="address"
                                                label="Business Address"
                                                name="address"
                                                autoComplete="address"
                                                error={addressError}
                                            />
                                        </Grid>

                                        {/* Business Owner */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, businessOwner:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={businessClearance.businessOwner}
                                                required
                                                fullWidth
                                                id="owner"
                                                label="Business Owner"
                                                name="owner"
                                                autoComplete="owner"                                               
                                                error={ownerError}
                                            />
                                        </Grid>

                                        {/* Business Nature */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, businessNature:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={businessClearance.businessNature}
                                                required
                                                fullWidth
                                                id="nature"
                                                label="Business Nature"
                                                name="nature"
                                                autoComplete="nature"
                                                error={natureError}
                                            />
                                        </Grid>

                                        {/* Start Business */}
                                        <Grid item xs={6}>
                                            {/* Input goes here */}
                                            <TextField
                                                type="date"
                                                onChange={(e) => setInformation({...information, start_business_operated:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="start_business_operated"
                                                label="Start Business Operated"
                                                name="start_business_operated"
                                                autoComplete="start_business_operated"
                                                error={startBusinessError}
                                                defaultValue={businessClearance.start_business_operated}
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

export default BusinessClearanceForm