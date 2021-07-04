import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button  from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
      padding: '30px', 
    },

    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      margin: '20px 32px',       
    },

    registerContainer: {
      borderTopRightRadius: 28,
      borderBottomRightRadius: 28,
      borderTopLeftRadius: 28,
      borderBottomLeftRadius: 28,
    },

    avatar: {
      margin: theme.spacing(1),
      color: '#fff',
      backgroundColor: 'black',
    },

    form: {
      width: '100%', // Fix IE 11 issue.
      margin: theme.spacing(1),
      fontFamily: 'Montserrat',
    },

    button: {
      margin: theme.spacing(7, 0, 2, 0),
      borderRadius: 16,
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 18,
      width: '15%',
      left: '83%',    
      backgroundColor: 'black',
      color: 'white',
      '&:hover': {
        backgroundColor: '#b71c1c',
      }
    },

    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      margin: '10px 10px', 
    },

    h2: {
        fontFamily: 'Montserrat',
        fontWeight: 500,
        fontSize : 14,
        margin: '0px 71px', 
    },

    header:{
      margin: '0px',
      fontWeight: 1000,
    },

    divtest: {
      display: 'flex',
      flexDirection: 'row',
    },

    formControlGender: {
      marginTop: theme.spacing(2),
      minWidth: 160,
    },

    formControlSubdivision: {
      marginTop: theme.spacing(2),
      minWidth: 200,
    }
}));


function Register() {
    //Date Picker
    const [selectedDate, setSelectedDate] = React.useState(
      new Date('2021-06-22'),
    );

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    //Dropdown Component
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    //Style
    const classes = useStyles();

    return (
         <Grid container component="main" className={classes.root} >
             <CssBaseline/>
             <Grid item xs={12} sm={12} md={12} component={Paper} elevation={2} square className={classes.registerContainer}>
                <div className={classes.paper}>
                    
                    <div className={classes.divtest}>
                        <Avatar className={classes.avatar} >
                             <BorderColorIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h4" className={classes.h1}>
                            Register
                         </Typography>
                    </div>

                    <Typography className={classes.h2}>
                            Basic Information (*Required to be filled out)
                    </Typography>

                    <form className={classes.form} noValidate>

                        <Grid item xs={12} sm={12}>
                          <Typography className={classes.header}>
                              PERSONAL INFORMATION
                          </Typography>
                        </Grid>

                        <Grid container spacing={2}>

                            {/* Last Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="last_name"
                                    autoFocus
                                />
                            </Grid>

                            {/* First Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    name="first_name"
                                    autoComplete="first_name"
                                    autoFocus
                                />
                            </Grid>

                            {/* Middle Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="middle_name"
                                    label="Middle Name"
                                    name="Middle Name"
                                    autoComplete="middle_name"
                                    autoFocus
                                />
                            </Grid>

                            {/* Birthday */}
                            <Grid item xs={12} sm={4}>
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid>
                                  <KeyboardDatePicker
                                    disableToolbar
                                    required
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="birthday"
                                    label="Birthday"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                      'aria-label': 'change date',
                                    }}
                                  />
                                </Grid>
                              </MuiPickersUtilsProvider>
                            </Grid>

                            {/* Gender */}
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="outlined" className={classes.formControlGender} required>
                                  <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="gender"
                                    value={value}
                                    onChange={handleChange}
                                    label="Gender"
                                  >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                  </Select>
                                </FormControl>
                            </Grid>
                            
                            
                            {/* Address */}
                            <Grid item xs={12} sm={12}>
                              <Typography className={classes.header}>
                                  ADDRESS
                              </Typography>
                            </Grid>

                            {/*  Room/Flr/Unit No./ Bldg. Name */}
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="room_number"
                                    label="Room/Flr/Unit No./ Bldg. Name"
                                    name="room_number"
                                    autoComplete="room_number"
                                    autoFocus
                                />
                            </Grid>

                            {/* House/Lot and Blk No. */}
                            <Grid item xs={12} sm={2}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="house_number"
                                    label="House/Lot and Blk No."
                                    name="house_number"
                                    autoComplete="house_number"
                                    autoFocus
                                />
                            </Grid>

                            {/* Street Name */}
                            <Grid item xs={12} sm={2}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="street_name"
                                    label="Street Name"
                                    name="street_name"
                                    autoComplete="street_name"
                                    autoFocus
                                />
                            </Grid>

                            {/* Subdivision */}
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="outlined" className={classes.formControlSubdivision} required>
                                  <InputLabel id="demo-simple-select-outlined-label">Subdivision</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="subdivision"
                                    value={value}
                                    onChange={handleChange}
                                    label="Subdiivision"
                                  >
                                    <MenuItem value={"Purok1"}>Purok 1</MenuItem>
                                    <MenuItem value={"Purok2"}>Purok 2</MenuItem>
                                    <MenuItem value={"Purok3"}>Purok 3</MenuItem>
                                    <MenuItem value={"Purok4"}>Purok 4</MenuItem>
                                    <MenuItem value={"Purok5"}>Purok 5</MenuItem>
                                    <MenuItem value={"Purok6"}>Purok 6</MenuItem>
                                    <MenuItem value={"Purok7"}>Purok 7</MenuItem>
                                    <MenuItem value={"Pulo"}>Pulo</MenuItem>
                                    <MenuItem value={"Camcam"}>Camcam</MenuItem>
                                    <MenuItem value={"Southfairway"}>Southfairway</MenuItem>
                                  </Select>
                                </FormControl>
                            </Grid>


                            {/* Barangay */}
                            <Grid item xs={12} sm={2}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    disabled
                                    fullWidth
                                    id="barangay"
                                    label="Barangay Landayan"
                                    name="barangay"
                                    autoComplete="barangay"
                                    autoFocus
                                />
                            </Grid>

                            {/* City */}
                            <Grid item xs={12} sm={2}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    disabled
                                    fullWidth
                                    id="city"
                                    label="City of San Pedro"
                                    name="city"
                                    autoComplete="city"
                                    autoFocus
                                />
                            </Grid>

                            {/* Province */}
                            <Grid item xs={12} sm={2}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    disabled
                                    fullWidth
                                    id="province"
                                    label="Laguna"
                                    name="province"
                                    autoComplete="province"
                                    autoFocus
                                />
                            </Grid>

                        </Grid>          
                        <div>
                          
                          {/* Next Button */}
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.button}
                            href="register2nd"
                          >
                              Next
                          </Button>
                        </div>

                    </form>
                </div>
             </Grid>
        </Grid>
    )
}
export default Register