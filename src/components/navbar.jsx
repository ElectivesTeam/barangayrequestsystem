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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  navbar: {
    backgroundColor: '#fff'
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 25,
    color: 'black'
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
    color: 'black'
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

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Title
          </Typography>
          
          { (
            <div>
              <Tooltip title="Home" className={classes.styledTooltip}>
                <IconButton
                href="/"
                
                >
                <HomeIcon />
                </IconButton>
              </Tooltip>
              
              <Tooltip title="Login" className={classes.styledTooltip}> 
                <IconButton
                  href="/login"
                  
                >
                  <VpnKeyIcon />
                </IconButton>
              </Tooltip>
              
              <Tooltip title="Menu" className={classes.styledTooltip}>
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
                  to="#"
                  
                 >
                   
                    Profile</MenuItem>
                <MenuItem
                  className={classes.styledMenuItem}  
                  onClick={handleClose}
                  component={Link}
                  to="#"
                  >                   
                My Account</MenuItem>
                <MenuItem
                  className={classes.styledMenuItem}  
                  onClick={handleClose}
                  component={Link}
                  to="#"
                  >                   
                Requests</MenuItem>
                <MenuItem 
                  className={classes.styledMenuItem} 
                  onClick={handleClose}
                  component={Link}
                  to="#"
                  >                   
                Logout</MenuItem>
              </Menu>
                  
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
