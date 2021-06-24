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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


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
      minWidth: 210,
    },
  
    picture: {
      display: 'flex',
      flexDirection: 'column',
    },

    uploadContainer: {
      height:'279px',
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
    }
  }));


function Register2nd() {

    //Dropdown Component
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    //Pop-up Dialogue
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
	    setOpen(true);
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
                          <Grid item xs={12} sm={8}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="birth_place"
                            label="Birth Place"
                            name="birth_place"
                            autoComplete="birth_place"
                            autoFocus
                            />
                          </Grid>

                          <Grid item xs={12} sm={4}>
                          </Grid>

                          {/* Civil Status */}
                          <Grid item xs={12} sm={2}>
                            <FormControl variant="outlined" className={classes.formControlCivilStatus} required>
                              <InputLabel id="demo-simple-select-outlined-label">Civil Status</InputLabel>
                              <Select
                              labelId="demo-simple-select-outlined-label"
                              id="civil_status"
                              value={value}
                              onChange={handleChange}
                              label="Civil Status"
                              >
                              <MenuItem value={"single"}>Single</MenuItem>
                              <MenuItem value={"married"}>Married</MenuItem>
                              <MenuItem value={"widowed"}>Widowed</MenuItem>
                              <MenuItem value={"divorced"}>Divorced</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>

                          {/* Nationality */}
                          <Grid item xs={12} sm={2}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="nationality"
                              label="Nationality"
                              name="nationality"
                              autoComplete="nationality"
                              autoFocus
                            />
                          </Grid>

                          {/* Contact Number */}
                          <Grid item xs={12} sm={2}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="contact_number"
                              label="Contact Number"
                              name="contact_number"
                              autoComplete="contact_number"
                              autoFocus
                            />
                          </Grid>

                          {/* E-mail */}
                          <Grid item xs={12} sm={3}>
                            <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              label="E-mail"
                              name="email"
                              autoComplete="email"
                              autoFocus
                            />
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
                              <Grid item xs={12} sm={2}>
                                <img width="250px" height="250px" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_account_box_48px-512.png"></img>
                              </Grid>
                            
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
                            </div>
                          </Grid>

                          {/* ID */}
                          <Grid item xs={12} sm={3} component={Paper} elevation={2} square className={classes.uploadContainer}>
                            Upload your ID 
                            <div className={classes.divtest}>
                              <Grid item xs={12} sm={2}>
                                <img width="250px" height="250px" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_account_box_48px-512.png"></img>
                              </Grid>
                            
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
			    
                            <Button variant="outlined" color="primary" onClick={handleClickOpen}
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
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aspernatur. Soluta fugiat maxime 
                                      iure esse amet unde accusamus quod temporibus quas quia, repellat, rerum eaque beatae exercitationem tenetur 
                                      eius reprehenderit!
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