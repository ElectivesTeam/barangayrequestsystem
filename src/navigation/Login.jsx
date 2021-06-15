import React from 'react';
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
import PrimarySearchAppBar from '../components/navbar';



function NavBar() {
  return (
      <PrimarySearchAppBar/>
  )
}    

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const useStyles = makeStyles((theme) => ({
  root: {
    
    height: '100vh',
    padding: '30px',
  },
  image: {
    backgroundColor: 'grey',
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28, 
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '110px 32px'       
  },
  signInContainer: {
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,

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

  },
  h1: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    margin: '10px 10px', 
  },
  divtest: {
    display: 'flex',
    flexDirection: 'row',
  }
  
}));


function SignInSide() {
  const classes = useStyles();
  
  return (  
    <div>
        <NavBar/>
        <Grid container component="main" className={classes.root} >
          
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.signInContainer}>
            <div className={classes.paper}>
              <div className={classes.divtest}>
                <Avatar className={classes.avatar} >
                  <PeopleAltIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.h1}>
                  Login
                </Typography>
              </div>
              
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  
                />
                <div>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      href="/"
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
  </div>
  )
}
  
  export default SignInSide
