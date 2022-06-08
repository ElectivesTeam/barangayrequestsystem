import React, { useEffect, useState } from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Grow from '@mui/material/Grow';
import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    
  },
  title: {
    flexGrow: 1,   
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'Montserrat',
    fontWeight: 600,
    
    '@media (max-width:550px)': {
      display: 'none',

    },
  },
  styledButton: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 16,
    
  },
  styledMenu: {
    marginTop: 35,
  },
  styledMenuItem: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    
  },
  styledTooltip: {
    color: '#fff',
  },
  logo: {
    height: 45,
    
  },
  divTool: {
    '@media (max-width:550px)': {
      marginLeft: 'auto',     
    },
  }
}));


export default function MenuAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = () => {
    setAnchorEl(null);
    AuthService.logout();
    window.location.reload();
  };

  const user = AuthService.getCurrentUser()
  const[adminstatus, setAdminStatus] = useState(false)
  const[refreshVerified, setRefreshVerified] = useState(false)
  const[accessVerified, setAccessVerified] = useState(false)
  const[snackbarEmailSentState, setSnackbarEmailSentState] = useState({open: false, Transition: Slide})
  const[snackbarNoticeState, setSnackbarState] = useState({open: false, Transition: Grow})
  const[dataLoaded, setDataLoaded] = useState(false)
  useEffect( () => {
    async function fetchData(){
      if(user && dataLoaded === false){
        if(refreshVerified === false){
          await AuthService.verifyToken("refresh")
          .then((response) => {
            if(response.status === 200){
              setRefreshVerified(true)
              console.log("refresh verified")
            }
          })
          .catch(error => {
            try {
              if (error.response.status === 401){
                AuthService.logout()
                history.push('/')
              }
            } catch (error) {
              console.log(error)
            }
          })
        }
        if (refreshVerified === true && accessVerified === false){
          await AuthService.verifyToken("access")
          .then((response) => {
            if(response.status === 200){
              setAccessVerified(true)
              console.log("access verified")
            }
          })
          .catch(error => {
            if (error.response.status === 401){
              AuthService.refreshAccess()
              window.location.reload()
            }else{
              console.log("Something went wrong")
            }
          })
        }
        if (accessVerified === true && dataLoaded === false){
          await AuthService.getAccountStatus()
          .then (response => {
            if(response.data !== undefined && response.status === 200){
              setAdminStatus(response.data.is_admin)
              if(response.data.is_email_verified === false){
                setSnackbarState({open: true, Transition: Grow})
                setSnackbarEmailSentState({open: false, Transition: Slide})
              }
              console.log("account status loaded")
              setDataLoaded(true)
            }
          })
          .catch(error => {
            if (error.response !== undefined){
              console.log(error.response);
            }
          })
        }
      }
    }
    fetchData()
  })
  
  const loginButton = () => {
    if(user){
    }else{
      return <Tooltip title="Login" color="inherit"> 
        <IconButton
          href="/login"
        >
          <VpnKeyIcon />
        </IconButton>
      </Tooltip>
    }
  }
  
  const profileMenu = () => {
    if(user){
      return <div style={{display: "contents"}}>
        <Tooltip title="Profile" color="inherit">
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}                  
          >
            <AccountCircle />
          </IconButton>
        </Tooltip>
        <Menu
          className={classes.styledMenu}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            className={classes.styledMenuItem}  
            onClick={handleClose}
            component={Link}
            to="/myaccount"
            >                   
          My Account</MenuItem>
          <MenuItem
            className={classes.styledMenuItem}  
            onClick={handleClose}
            component={Link}
            to="/myrequests"
            >                   
          My Requests</MenuItem>
          <MenuItem 
            className={classes.styledMenuItem} 
            onClick={Logout}
            component={Link}
            to="/"
            >                   
          Logout</MenuItem>
        </Menu>
      </div>
    }
  }

  const admin = () => {
    if (user){
      if(adminstatus){
        return <Tooltip title="Admin" color="inherit"> 
          <IconButton
            href="/admin"
          >
            <AdminPanelSettingsIcon />
          </IconButton>
        </Tooltip>
      }
    }
  }

  const sendVerificationLink = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
    AuthService.sendVerificationLink()
    .then((response) => {
			if (response.status === 200){
        setSnackbarState({open: false, Transition: Grow})
        setSnackbarEmailSentState({open: true, Transition: Slide})
			}
		})
	};

  const action = (
    <React.Fragment>
      <Button color="inherit" size="small" onClick={sendVerificationLink}>
        Send Link
      </Button>
    </React.Fragment>
  );

  const closeSnackBar = () => {
    setSnackbarEmailSentState({open: false, Transition: Slide})
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={snackbarEmailSentState.open}
        onClose={closeSnackBar}
        TransitionComponent={snackbarEmailSentState.Transition}
      >
        <Alert onClose={closeSnackBar} severity="success" sx={{ width: '100%' }}>
          Email Verification Link Sent
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackbarNoticeState.open}
        TransitionComponent={snackbarNoticeState.Transition}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' , backgroundColor: "#3f51b5"}} action={action}>
          Your email is not verified. Please check your email or click the button to send a new verification link
        </Alert>
      </Snackbar>
      <AppBar position="static" className={classes.navbar} color="primary">
        <Toolbar>
          <Button href="/">
            <img src="../img/Brgy Landayan Logo.png" className={classes.logo} alt=""  />
          </Button>
          <Typography variant="h6" className={classes.title} >
            Online Document Request
          </Typography>
          { (
            <div className={classes.divTool}> 
              <Tooltip title="Home" color="inherit">
                <IconButton
                href="/"
                >
                <HomeIcon />
                </IconButton>
              </Tooltip>
              {loginButton()}
              <Tooltip title="Request" color="inherit"> 
                <IconButton
                  href="/requests"
                >
                  <NoteAddIcon />
                </IconButton>
              </Tooltip>
              {admin()}
              {profileMenu()}            
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
