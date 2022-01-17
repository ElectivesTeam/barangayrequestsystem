import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          ODRS
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
  },
  image: {
    width: 500,
    height: '500px',
    marginTop: '90px',
    marginLeft:130,
    
    '@media (max-width: 600px)': {
      display:'none'
    },
    '@media (min-width: 600px)': {
      display:'none'
    },
    '@media (min-width: 1260px)': {
      display:'initial',
      
    },
    
  
  },
  paper: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '110px 32px',
    
  },
  signInContainer: {
    borderRadius: 28,
    margin: 'auto'
    
  },
  avatar: {
    margin: theme.spacing(1),
    color: '#fff',
    backgroundColor: '#3f51b5',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(1),
    fontFamily: 'Montserrat',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 16,
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 18,
    width: '40%',
    left: '30%',    
      
    '@media (max-width: 600px)': {
      width: '53%',
      left: '23%'
    },
    
  },
  h1: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    margin: '10px 10px', 
  },
  login: {
    display: 'flex',
    flexDirection: 'row',
  },
  
  
}));

function SignInSide() {
  const classes = useStyles();

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const[emailError, setEmailError] = useState(false)
  const[passwordError, setPasswordError] = useState(false)
  const[loginCredentialError, setLoginCredentialError] = useState('')

  let history = useHistory();
  const handleSubmit = (e) =>{
    e.preventDefault()

    setEmailError(false)
    setPasswordError(false)
    setLoginCredentialError('')

    let setChecker = true

    if(email == ''){
      setEmailError(true)
      setChecker = false
    }

    if(password == ''){
      setPasswordError(true)
      setChecker = false
    }

    if(setChecker){
      AuthService.login(email, password)
        .then((response) => {
            if (response !== undefined){
                console.log('Logged in')
                history.push('/')
                window.location.reload(false);
            }
        })
        .catch(error => {
          if (error.response.status === 401){
            setPasswordError(true);
            setEmailError(true)
            setLoginCredentialError(JSON.stringify(error.response.data.detail));
          } 
          else console.log("Something went wrong. Please try again later.");
        })
    }

  }

  const user = AuthService.getCurrentUser()

  if (!user){
    return (  
      <Grid container component="main" className={classes.root} >
        
        <CssBaseline />
          <div className={classes.divtest}>
          <img src="../img/login.png" alt="" className= {classes.image}/>
          </div>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={2} square className={classes.signInContainer}>
          <div className={classes.paper}>
            <div className={classes.login}>
              <Avatar className={classes.avatar} >
                <PeopleAltIcon />
              </Avatar>
              <Typography component="h1" variant="h5" className={classes.h1}>
                Login
              </Typography>
            </div>
            
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={emailError}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Typography variant="body2"  align="center" color="secondary" name="loginCredentialError">
              {loginCredentialError}
              </Typography>
              
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                
              />
              <div>
                <Button
                    onClick = {handleSubmit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    href="/"
                    color= "primary"
                >
                    Sign In
                </Button>
              </div>
              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    )
  }else{
    history.push('/')
    return(<h2>Home</h2>)
  }
}
  
  export default SignInSide
