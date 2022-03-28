import React, { useState } from 'react';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Link from '@material-ui/core/Link';
import { DialogTitle, responsiveFontSizes} from '@material-ui/core';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AuthService from "../services/auth.service";

const useStyles = makeStyles((theme) => ({
    root: {
      height: '125vh',
      padding: '30px 30px 40px 30px',
    },

    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      margin: '20px 32px 0px 32px',
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

    buttonUpload: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(-3),
      top: '32%',
      left: '150%',
      width: '120px',
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 11,
      backgroundColor: 'gray',
      color: 'white',
      '&:hover': {
        backgroundColor: '#b71c1c',
      },
    },

    button: {
      margin: theme.spacing(7, 0, 0, 0),
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
      marginTop: '15px',
    },

    divtest: {
      display: 'flex',
      flexDirection: 'row',
    },

    formControlCivilStatus: {
      marginTop: theme.spacing(2),
      minWidth: 270,
    },

    
    formPassword: {
      marginTop: theme.spacing(2),
      minWidth: 270,
    },

    formControlGender: {
      marginTop: theme.spacing(2),
      minWidth: 160,
    },

    formControlBirthplace: {
      marginTop: theme.spacing(2),
      minWidth: 270,
    },

    formControlSubdivision: {
      marginTop: theme.spacing(2),
      minWidth: 200,
    }, 

    input: {
      "&:disabled": {
        color: "green"
      }
    },
  
    picture: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(4)
    },

    uploadContainer: {
      height:'180px',
      marginRight: theme.spacing(2)
    },
    
    margin: {
      marginTop: theme.spacing(2),
    },
    textField: {
      width: '34ch',
    },
}));


function Register() {
    const handleDateChange = (date, value) => {
      setSelectedDate(date);
      setDateValue(value);
    };

     //form Values
    const[lastname, setLastname] = useState('')
    const[firstname, setFirstname] = useState('')
    const[middlename, setMiddlename] = useState('')
    const [selectedDate, setSelectedDate] = useState();
    const [dateValue, setDateValue] = useState();
    const[age, setAge] = useState(0);
    const[gender, setGender] = useState('');
    const[address, setAddress] = useState('');
    const[residentnumber, setResidentNumber] = useState('');
    const[birthplace, setBirthplace] = useState('')
    const[barangay, setBarangay] = useState('');
    const[contactnumber, setContactnumber] = useState('');
    const ph_country_code = "+63";
    const[civilstatus, setCivilstatus] = useState('');
    const[email, setEmail] = useState('');
    const [values, setValues] = useState({
      password: '',
      showPassword: false,
      });
    const[ImageID, setImageID] = useState('')
    const[ImageSelfie, setImageSelfie] = useState('')
    const[ImageIDURL, setImageIDURL] = useState('')
    const[ImageSelfieURL, setImageSelfieURL] = useState('')

    //error messages
    const[lastnameError, setLastnameError] = useState(false)
    const[firstnameError, setFirstnameError] = useState(false)
    const[middlenameError, setMiddlenameError] = useState(false)
    const[genderError, setGenderError] = useState(false)
    const[addressError, setAddressError] = useState(false)
    const[residentNumberError, setResidentNumberError] = useState(false)
    const[ageError, setAgeError] = useState(false)
    const[birthplaceError, setBirthplaceError] = useState(false)
    const[barangayError, setBarangayError] = useState(false)
    const[civilstatusError, setCivilstatusError] = useState(false)
    const[contactnumberError, setContactnumberError] = useState(false)
    const[emailError, setEmailError] = useState(false)
    const[passwordError, setPasswordError] = useState(false)
    
    //password handler
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const[open, setOpen] = useState(false);

    function handleIDUpload(e) {
      setImageID(e.target.files[0]);
      let url = URL.createObjectURL(e.target.files[0]);
      setImageIDURL(url)
    }

    function handleIDRemove() {
      setImageID('');
      setImageIDURL('')
    }

    function handleSelfieUpload(e) {
      setImageSelfie(e.target.files[0]);
      let url = URL.createObjectURL(e.target.files[0]);
      setImageSelfieURL(url)
    }

    function handleSelfieRemove() {
      setImageSelfie('');
      setImageSelfieURL('')
    }

    const handleSubmit = (e) =>{
      e.preventDefault()

      setLastnameError(false)
      setFirstnameError(false)
      setMiddlenameError(false)
      setGenderError(false)
      setAddressError(false)
      setResidentNumberError(false)
      setAgeError(false)
      setBirthplaceError(false)
      // setBarangayError(false)
      setCivilstatusError(false)
      setContactnumberError(false)
      setEmailError(false)
      setPasswordError(false)
      
      let setChecker = true

      if(lastname == ''){
        setLastnameError(true)
        setChecker = false
      }

      if(firstname == ''){
        setFirstnameError(true)
        setChecker = false
      }

      if(middlename == ''){
        setMiddlenameError(true)
        setChecker = false
      }

      if(gender == ''){
        setGenderError(true)
        setChecker = false
      }

      if (age == '') {
        setAgeError(true)
        setChecker = false
      }
      if(address == ''){
        setAddressError(true)
        setChecker = false
      }

      if(residentnumber == ''){
        setResidentNumberError(true)
        setChecker = false
      }

      if(birthplace === ''){
        setBirthplaceError(true)
        setChecker = false
      }
  
      if(barangay === ''){
        setBarangayError(true)
        setChecker = false
      }
  
      if(civilstatus === ''){
        setCivilstatusError(true)
        setChecker = false
      }
  
      if(contactnumber === ''){
        setContactnumberError(true)
        setChecker = false
      }
  
      if(email === ''){
        setEmailError(true)
        setChecker = false
      }
  
      if(values.password === ''){
        setPasswordError(true)
        setChecker = false
      }
  
      if(setChecker){
        // setOpen(true)
        AuthService.register(
          email, 
          firstname,
          middlename,
          lastname,
          values.password,
          address,
          contactnumber,
          residentnumber,
          dateValue,
          age,
          gender.toUpperCase(),
          birthplace, //province
          civilstatus.toUpperCase(),
          ImageSelfie,
          ImageID
        )
        .then((response) => {
            if (response !== undefined){
                setOpen(true)
                console.log('Register Success')
                window.history.push('/login')
                window.location.reload(false);
            }
        })
        .catch(error => {
          if (error.response != undefined){
            if (error.response.status === 400) {
              // setLastnameError(JSON.stringify(error.response.data.last_name));
              // setFirstnameError(JSON.stringify(error.response.data.first_name));
              // setResidentNumberError(JSON.stringify(error.response.data.resident_number));
              // setCivilstatusError(JSON.stringify(error.response.data.civil_status));
              setEmailError(JSON.stringify(error.response.data.email))
              setContactnumberError(JSON.stringify(error.response.data.mobile_number))
              setPasswordError(JSON.stringify(error.response.data.password))
            }
              else console.log(error.response);
            }
          }
        )
      }

    }

    //from Register2nd
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
  
      const handleClose = () => {
        setOpen(false);
      };
  
      //Pop-up Dialogue (Agreement)
      const [openAgreement, setOpenAgreement] = React.useState(false);
      const handleClickOpenAgreement = () => {
        setOpenAgreement(true);
      };
      const handleCloseAgreement = () => {
        setOpenAgreement(false);
      };
  
      //Pop-up Dialogue (Notice)
      const [openNotice, setOpenNotice] = React.useState(false);
      const handleClickOpenNotice = () => {
        setOpenNotice(true);
      };
      const handleCloseNotice = () => {
        setOpenNotice(false);
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

                    <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>

                        <Grid item xs={12} sm={12}>
                          <Typography className={classes.header}>
                              PERSONAL INFORMATION
                          </Typography>
                        </Grid>

                        <Grid container spacing={2}>

                            {/* Last Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    onChange={(e) => setLastname(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="last_name"
                                    autoFocus
                                    error={lastnameError}
                                />
                            </Grid>

                            {/* First Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    onChange={(e) => setFirstname(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    name="first_name"
                                    autoComplete="first_name"
                                    autoFocus
                                    error={firstnameError}
                                />
                            </Grid>

                            {/* Middle Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    onChange={(e) => setMiddlename(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="middle_name"
                                    label="Middle Name"
                                    name="Middle Name"
                                    autoComplete="middle_name"
                                    autoFocus
                                    error={middlenameError}
                                />
                            </Grid>
                        
                            {/* Birthday */}
                            <Grid item xs={12} sm={4}>
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid>
                                  <KeyboardDatePicker
                                    required
                                    variant="inline"
                                    format="yyyy-MM-dd"
                                    margin="normal"
                                    id="birthday"
                                    label="Birthday"
                                    value={selectedDate}
                                    inputValue={dateValue}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                      'aria-label': 'change date',
                                    }}
                                  />
                                </Grid>
                              </MuiPickersUtilsProvider>
                              
                            </Grid>
                            {/* Age */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    onChange={(e) => setAge(parseInt(e.target.value, 10))}
                                    variant="outlined"
                                    margin="normal"
                                    type = "number"
                                    required
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    name="Age"
                                    autoComplete="age"
                                    autoFocus
                                    error={ageError}
                                />
                            </Grid>
                            {/* Gender */}
                            <Grid item xs={12} sm={4}>
                                <FormControl variant="outlined" className={classes.formControlGender} required>
                                  <InputLabel>Gender</InputLabel>
                                  <Select
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    label="Gender"
                                    error={genderError}
                                  >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                  </Select>
                                </FormControl>
                            </Grid>
                            
                            
                            

                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Typography className={classes.header}>
                              BASIC INFORMATION
                          </Typography>
                        </Grid>

                        
                        <Grid container spacing={2}>
                          {/* Address */}
                          <Grid item xs={12} sm={4}>
                            <TextField
                                onChange={(e) => setAddress(e.target.value)}
                                variant="outlined"
                                margin="normal"
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

                          {/* Resident Number */}
                          <Grid item xs={12} sm={4}>
                            <TextField
                                onChange={(e) => setResidentNumber(e.target.value)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="residentnumber"
                                label="Resident Number"
                                name="residentnumber"
                                autoComplete="residentnumber"
                                autoFocus
                                error={residentNumberError}
                            />
                          </Grid>


                          {/* Birth Place */}
                          <Grid item xs={12} sm={4}>
                            <TextField
                            onChange={(e) => setBirthplace(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth             
                            id="birth_place"
                            label="Birth Place"
                            name="birth_place"
                            autoComplete="birth_place"
                            autoFocus
                            error={birthplaceError}
                            />
                          </Grid>
                          
                          {/* Barangay */}
                          <Grid item xs={12} sm={4}>
                            <TextField
                              onChange={(e) => setBarangay(e.target.value)}
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="barangay"
                              label="Barangay"
                              name="barangay"
                              autoComplete="barangay"
                              autoFocus
                              error={barangayError}
                            />
                          </Grid>

                          {/* Contact Number */}
                          <Grid item xs={12} sm={4}>
                            <TextField
                            InputProps={{
                              startAdornment: <InputAdornment position="start">
                                 (+63)
                                 </InputAdornment>,
                            }}
                              onChange={(e) => setContactnumber(ph_country_code + e.target.value)}
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="contact_number"
                              label="Contact Number"
                              name="contact_number"
                              autoComplete="contact_number"
                              autoFocus
                              error={contactnumberError}
                            />
                          <Typography variant="body2"  align="left" color="secondary" name="contactnumberError">
                              {contactnumberError}
                          </Typography>
                          </Grid>
                          

                          {/* Civil Status */}
                          <Grid item xs={12} sm={3}>
                            <FormControl variant="outlined" className={classes.formControlCivilStatus} required>
                              <InputLabel>Civil Status</InputLabel>
                              <Select
                              id="civil_status"
                              value={civilstatus}
                              onChange={(e) => setCivilstatus(e.target.value)}
                              label="Civil Status"
                              error={civilstatusError}
                              >
                              <MenuItem value={"single"}>Single</MenuItem>
                              <MenuItem value={"married"}>Married</MenuItem>
                              <MenuItem value={"widowed"}>Widowed</MenuItem>
                              <MenuItem value={"divorced"}>Divorced</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>

                          

                          {/* E-mail */}
                          <Grid item xs={12} sm={3}>
                            <TextField
                              onChange={(e) => setEmail(e.target.value)}
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              label="E-mail"
                              name="email"
                              autoComplete="email"
                              autoFocus
                              error={emailError}
                            />
                            <Typography variant="body2"  align="left" color="secondary" name="emailError">
                              {emailError}
                            </Typography>
                          </Grid>

                          {/* Password */}
                          <Grid item xs={12} sm={3}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" required>
                              <InputLabel>Password</InputLabel>
                              <OutlinedInput
                                error={passwordError}
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                }
                                labelWidth={70}
                              />
                            </FormControl>
                            <Typography variant="body2"  align="left" color="secondary" name="passwordError">
                              {passwordError}
                            </Typography>
                          </Grid>


                          {/* Picture */}
                          <Grid item xs={12} sm={12}>
                            <Typography className={classes.header}>
                              PICTURE 
                            </Typography>
                          </Grid>
                          
                          {/* Selfie */}
                          <Grid item xs={12} sm={3} component={Paper} elevation={2} square className={classes.uploadContainer}>
                            Upload your selfie 
                            <div className={classes.divtest}>
                            <img width = "170px" height = "150px" src={ImageSelfie=='' ? '../img/image.png': ImageSelfieURL}></img>
                             <Grid item xs={12} sm={1}>
                              <div className={classes.picture}>
                                <Button 
                                  component="label"
                                  fullWidth
                                  variant="contained"
                                  className={classes.buttonUpload}
                                  href="#"
                                >
                                  <input 
                                    accept="image/*"
                                    type="file"
                                    hidden 
                                    onChange={handleSelfieUpload}
                                  />
                                  UPLOAD
                                </Button>
                                <Button 
                                  component="label"
                                  onClick={handleSelfieRemove}
                                  fullWidth
                                  variant="contained"
                                  className={classes.buttonUpload}
                                  href="#"
                                >
                                  DELETE
                                </Button>
                              </div>
                             </Grid>    
                            </div>
                          </Grid>

                          {/* Valid ID */}
                          <Grid item xs={12} sm={3} component={Paper} elevation={2} square className={classes.uploadContainer}>
                            Upload your valid ID 
                            <div className={classes.divtest}>
                            <img width = "170px" height = "150px" src={ImageID=='' ? '../img/image.png': ImageIDURL}></img>
                             <Grid item xs={12} sm={1}>
                              <div className={classes.picture}>
                                <Button 
                                  component="label"
                                  fullWidth
                                  variant="contained"
                                  className={classes.buttonUpload}
                                  href="#"
                                >
                                  <input 
                                    accept="image/*"
                                    type="file"
                                    hidden 
                                    onChange={handleIDUpload}
                                  />
                                  UPLOAD
                                </Button>
                                <Button 
                                  component="label"
                                  onClick={handleIDRemove}
                                  fullWidth
                                  variant="contained"
                                  className={classes.buttonUpload}
                                  href="#"
                                >
                                  DELETE
                                </Button>
                              </div>
                             </Grid>    
                            </div>
                          </Grid>
                        </Grid>
                        
                          

                          {/* Submit Button */}
                          <div className={classes.divtest}>			    
                            <Button variant="outlined" color="primary" onClick={handleSubmit}
                                fullWidth
                                className={classes.button}
                            >
				                        Submit
			                      </Button>
                          

                             {/* Terms and Condition */}
                              <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                              >
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  By clicking on Submit, means that you agree to our <Link onClick={handleClickOpenAgreement}> 
                                  Terms, Privacy Data and Cookies Policy
                                  </Link>.
                                  <Dialog
                                    open={openAgreement}
                                    onClose={handleCloseAgreement}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                  >
                                    <DialogTitle id="alert-dialog-title">{"Terms, Privacy Data and Cookies Policy"}</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aspernatur. Soluta fugiat maxime 
                                      iure esse amet unde accusamus quod temporibus quas quia, repellat, rerum eaque beatae exercitationem tenetur 
                                      eius reprehenderit!
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleCloseAgreement} color="primary" autoFocus>
                                      OK
                                    </Button>
                                    </DialogActions>
                                  </Dialog>
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                  Disagree
                                </Button>
                                <Button onClick={handleClickOpenNotice} color="primary" autoFocus>
                                  Agree
                                  <Dialog
                                    open={openNotice}
                                    onClose={handleCloseNotice}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                  >
                                    <DialogTitle id="alert-dialog-title">{"Notice"}</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                      Please allow three working days for our barangay official to verify your registration. Thank you!
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleCloseNotice} color="primary" autoFocus href="login">
                                      OK
                                    </Button>
                                    </DialogActions>
                                  </Dialog>
                                </Button>
                                </DialogActions>
                              </Dialog>`
                          </div>
                    </form>
                </div>
             </Grid>
        </Grid>
    )
}
export default Register
