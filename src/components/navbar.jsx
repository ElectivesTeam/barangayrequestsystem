import React from 'react';
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

import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";

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
    fontSize: 22,
    
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
    height: 50,
    
  },
  divTool: {
    '@media (max-width:550px)': {
      marginLeft: 'auto',     
    },
  }
}));


export default function MenuAppBar() {
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
  };

  const user = AuthService.getCurrentUser()
  
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
        <Tooltip title="Menu" color="inherit">
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
            to="#"
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

  return (
    <div className={classes.root}>
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
              {profileMenu()}       
                   
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
