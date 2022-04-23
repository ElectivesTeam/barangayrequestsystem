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
        left: '80%',
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

const IndigencyClearance = ({ activeForm, handleBack, handleNext, handleChange, indigencyClearance}) => {
    const classes = useStyles();
    const[nameError, setNameError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[patientRelationshipError, setPatientRelationshipError] = useState(false)
    const[patientNameError, setPatientNameError] = useState(false)
    const[purposeError, setPurposeError] = useState(false)
    const[passedError, setPassedError] = useState(false)
    const [information, setInformation] = useState({
        name: indigencyClearance.name,
        address: indigencyClearance.address,
        patient_relationship: indigencyClearance.patient_relationship,
        patient_name: indigencyClearance.patient_name,
        purpose: indigencyClearance.purpose,
        passed_onto_whom: indigencyClearance.passed_onto_whom
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

        setPatientRelationshipError(false)
        if(information.patient_relationship == ''){
            setPatientRelationshipError(true)
            setChecker = false
        }

        setPatientNameError(false)
        if(information.patient_name == ''){
            setPatientNameError(true)
            setChecker = false
        }

        setPurposeError(false)
        if(information.purpose == ''){
            setPurposeError(true)
            setChecker = false
        }

        setPassedError(false)
        if(information.passed_onto_whom == ''){
            setPassedError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleChange("indigencyClearanceForm", information)
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Indigency Clearance'}/>
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
                                                defaultValue={indigencyClearance.name}
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
                                                defaultValue={indigencyClearance.address}
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

                                        {/* Patient Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, patient_name:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={indigencyClearance.patient_name}
                                                required
                                                fullWidth
                                                id="patient_name"
                                                label="Patient Name"
                                                name="patient_name"
                                                autoComplete="patient_name"
                                                autoFocus
                                                error={patientNameError}
                                            />
                                        </Grid>

                                        {/* Passed onto whom */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, passed_onto_whom:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={indigencyClearance.passed_onto_whom}
                                                required
                                                fullWidth
                                                id="passed_onto_whom"
                                                label="Passed onto whom"
                                                name="passed_onto_whom"
                                                autoComplete="passed_onto_whom"
                                                error={passedError}
                                            />
                                        </Grid>

                                        {/* Patient Relationship */}
                                        <Grid item xs={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Patient Relationship</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    defaultValue={indigencyClearance.patient_relationship}
                                                    label="Patient Relationship"
                                                    onChange={(e) => setInformation({...information, patient_relationship:e.target.value})}
                                                    error={patientRelationshipError}
                                                >
                                                    <MenuItem value={'Father'}>Father</MenuItem>
                                                    <MenuItem value={'Mother'}>Mother</MenuItem>
                                                    <MenuItem value={'Son'}>Son</MenuItem>
                                                    <MenuItem value={'Daughter'}>Daughter</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid> 

                                        
                                        {/* Other Fields */}
                                        <Grid item xs={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    defaultValue={indigencyClearance.purpose}
                                                    label="Purpose"
                                                    onChange={(e) => setInformation({...information, purpose:e.target.value})}
                                                    error={purposeError}
                                                >
                                                <MenuItem value={'one'}>one</MenuItem>
                                                <MenuItem value={'two'}>two</MenuItem>
                                                <MenuItem value={'three'}>three</MenuItem>
                                                </Select>
                                            </FormControl>
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

export default IndigencyClearance