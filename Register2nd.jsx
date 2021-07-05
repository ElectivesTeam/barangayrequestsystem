import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns'
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
import { DialogTitle} from '@material-ui/core';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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

    formControlCivilStatus: {
      marginTop: theme.spacing(2),
      minWidth: 270,
    },

    
    formPassword: {
      marginTop: theme.spacing(2),
      minWidth: 270,
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

    button: {
      margin: theme.spacing(7, 1, 2, 0),
      borderRadius: 16,
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 18,
      width: '15%',
      left: '70%',    
      backgroundColor: 'black',
      color: 'white',
      '&:hover': {
        backgroundColor: '#b71c1c',
      }
    }, 
    margin: {
      marginTop: theme.spacing(2),
    },
    textField: {
      width: '34ch',
    },
  }));


function Register2nd() {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const[open, setOpen] = useState(false);

  const[birthplace, setBirthplace] = useState('')
  const[nationality, setNationality] = useState('');
  const[civilstatus, setCivilstatus] = useState('');
  const[contactnumber, setContactnumber] = useState('');
  const[email, setEmail] = useState('');

  const[birthplaceError, setBirthplaceError] = useState(false)
  const[nationalityError, setNationalityError] = useState(false)
  const[civilstatusError, setCivilstatusError] = useState(false)
  const[contactnumberError, setContactnumberError] = useState(false)
  const[emailError, setEmailError] = useState(false)
  const[passwordError, setPasswordError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    setBirthplaceError(false)
    setNationalityError(false)
    setCivilstatusError(false)
    setContactnumberError(false)
    setEmailError(false)
    setPasswordError(false)
    let setChecker = true

    if(birthplace == ''){
      setBirthplaceError(true)
      setChecker = false
    }

    if(nationality == ''){
      setNationalityError(true)
      setChecker = false
    }

    if(civilstatus == ''){
      setCivilstatusError(true)
      setChecker = false
    }

    if(contactnumber == ''){
      setContactnumberError(true)
      setChecker = false
    }

    if(email == ''){
      setEmailError(true)
      setChecker = false
    }

    if(values.password == ''){
      setPasswordError(true)
      setChecker = false
    }

    if(setChecker){
      setOpen(true)
    }
  }

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

                    <form className={classes.form} noValidate>
                      
                        <Grid item xs={12} sm={12}>
                          <Typography className={classes.header}>
                              BASIC INFORMATION
                          </Typography>
                        </Grid>

                        
                        <Grid container spacing={2}>

                          {/* Birth Place */}
                          <Grid item xs={12} sm={6}>
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
                          {/* Nationality */}
                          <Grid item xs={12} sm={3}>
                            <TextField
                              onChange={(e) => setNationality(e.target.value)}
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="nationality"
                              label="Nationality"
                              name="nationality"
                              autoComplete="nationality"
                              autoFocus
                              error={nationalityError}
                            />
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

                          {/* Contact Number */}
                          <Grid item xs={12} sm={3}>
                            <TextField
                              onChange={(e) => setContactnumber(e.target.value)}
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
                            <img src="https://image.flaticon.com/icons/png/512/149/149092.png" width = "170px" height = "150px"></img>
                             <Grid item xs={12} sm={1}>
                              <div className={classes.picture}>
                                <Button 
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  className={classes.buttonUpload}
                                  href="#"
                                >
                                  UPLOAD
                                </Button>
                                <Button 
                                  type="submit"
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
                            <img src="https://image.flaticon.com/icons/png/512/149/149092.png" width = "170px" height = "150px"></img>
                             <Grid item xs={12} sm={1}>
                              <div className={classes.picture}>
                                <Button 
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  className={classes.buttonUpload}
                                  href="#"
                                >
                                  UPLOAD
                                </Button>
                                <Button 
                                  type="submit"
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
                        

                          {/* Submit and Back Button */}
                          <div className={classes.divtest}>
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.button}
                                href="Register"
                            >
                                Back
                            </Button>
			    
                            <Button variant="outlined" color="primary" onClick={handleSubmit}
                                fullWidth
                                variant="contained"
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
export default Register2nd