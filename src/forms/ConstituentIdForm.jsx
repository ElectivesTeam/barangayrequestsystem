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

const ConstituentIdForm = ({ activeForm, handleBack, handleNext, handleChange, constituentId}) => {
    const classes = useStyles();
    const[lastNameError, setLastNameError] = useState(false)
    const[firstNameError, setFirstNameError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[dateReceivedError, setDateReceivedError] = useState(false)
    const[idNumberError, setIdNumberError] = useState(false)
    const [information, setInformation] = useState({
        last_name: constituentId.last_name,
        middle_name: constituentId.middle_name,
        first_name: constituentId.first_name,
        address: constituentId.address,
        dateReceived: constituentId.dateReceived,
        id_number: constituentId.id_number
    });
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setLastNameError(false)
        if(information.last_name === ''){
            setLastNameError(true)
            setChecker = false
        }

        setFirstNameError(false)
        if(information.first_name === ''){
            setFirstNameError(true)
            setChecker = false
        }

        setAddressError(false)
        if(information.address === ''){
            setAddressError(true)
            setChecker = false
        }

        setDateReceivedError(false)
        if(information.dateReceived === ''){
            setDateReceivedError(true)
            setChecker = false
        }

        setIdNumberError(false)
        if(information.id_number === ''){
            setIdNumberError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            console.log(information)
            handleChange("constituentIdForm", information)
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
                                                onChange={(e) => setInformation({...information, last_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={constituentId.last_name}
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
                                                defaultValue={constituentId.middle_name}
                                                required
                                                fullWidth
                                                id="middlename"
                                                label="Middle Name"
                                                name="middlename"
                                                autoComplete="middlename"
                                                autoFocus
                                            />
                                        </Grid>

                                        {/* First Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, first_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={constituentId.first_name}
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
                                        
                                        {/* Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, address:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={constituentId.address}
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
                                        
                                        {/* ID Number */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, id_number:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={constituentId.id_number}
                                                required
                                                fullWidth
                                                id="id_number"
                                                label="ID Number"
                                                name="id_number"
                                                autoComplete="id_number"
                                                autoFocus
                                                error={idNumberError}
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
                                                error={dateReceivedError}
                                                defaultValue={constituentId.dateReceived}
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