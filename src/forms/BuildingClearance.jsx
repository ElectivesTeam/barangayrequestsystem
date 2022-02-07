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
import AuthService from "../services/auth.service";

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

const BuildingClearance = ({ activeForm, handleBack, handleNext}) => {
    const classes = useStyles();
    const[name, setName] = useState('')
    const[nameError, setNameError] = useState(false)

    const[address, setAddress] = useState('')
    const[addressError, setAddressError] = useState(false)

    const[type, setType] = useState('')
    const[typeError, setTypeError] = useState(false)
    
    const[getInfo, setGetInfoCheck] = useState(false)
	if (!getInfo){
		AuthService.getUserInformation()
		.then((response) => {
			if (response !== undefined){
				if(JSON.stringify(response.data.first_name).length >= 3 && JSON.stringify(response.data.middle_name).length >= 0 && JSON.stringify(response.data.last_name).length >= 3)
					setName(JSON.stringify(response.data.first_name + " " + response.data.middle_name + " " + response.data.last_name).slice(1,-1));
				if(JSON.stringify(response.data.address).length >= 3)
					setAddress(JSON.stringify(response.data.address).slice(1,-1));
				// if(JSON.stringify(response.data.email).length >= 3)
				// 	setEmail(JSON.stringify(response.data.email).slice(1,-1));
				// if(JSON.stringify(response.data.mobile_number).length >= 3)
				// 	setContactNumber(JSON.stringify(response.data.mobile_number).slice(1,-1));
				setGetInfoCheck(true);
            }
		})
	}

    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        // setNameError(false)
        // if(name == ''){
        //     setNameError(true)
        //     setChecker = false
        // }

        // setAddressError(false)
        // if(address == ''){
        //     setAddressError(true)
        //     setChecker = false
        // }

        setTypeError(false)
        if(type == ''){
            setTypeError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Building Clearance Form'}/>
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
                                                onChange={(e) => setName(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={name}
                                                required
                                                fullWidth
                                                id="name"
                                                label="Name"
                                                name="name"
                                                autoComplete="name"
                                                autoFocus
                                                // error={nameError}
                                            />
                                        </Grid>
                                        
                                        {/* Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setAddress(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                value={address}
                                                required
                                                fullWidth
                                                id="address"
                                                label="Address"
                                                name="address"
                                                autoComplete="address"
                                                autoFocus
                                                // error={addressError}
                                            />
                                        </Grid>

                                        {/* Other Fields */}
                                        <Grid item xs={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={type}
                                                    label="Type"
                                                    onChange={(e) => setType(e.target.value)}
                                                    error={typeError}
                                                >
                                                <MenuItem value={'Repair'}>Repair</MenuItem>
                                                <MenuItem value={'Repainting'}>Repainting</MenuItem>
                                                <MenuItem value={'Extension'}>Extension</MenuItem>
                                                <MenuItem value={'Fencing'}>Fencing</MenuItem>
                                                <MenuItem value={'Roofing'}>Roofing</MenuItem>
                                                <MenuItem value={'Construction'}>Construction</MenuItem>
                                                <MenuItem value={'Renovation'}>Renovation</MenuItem>
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

export default BuildingClearance