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

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar} color="primary">
        <Toolbar>
          <Button href="/">
          <img src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/204627169_611989476473092_2429560391142003983_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEJVn396gh0XvvopH5uPJacBIrhXmX8CJAEiuFeZfwIkE7Q8QMXzmRTlt2qemEb8Xv58xppjIxPO8sxInaV6yyU&_nc_ohc=CsCkA7Qx_bMAX8UsTLA&_nc_ht=scontent.fmnl17-1.fna&oh=b5cd9569a4c3e6384447d24e0c122d6d&oe=60D53F80" className={classes.logo} alt=""  />
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
              
              <Tooltip title="Login" color="inherit"> 
                <IconButton
                  href="/login"
                  
                >
                  <VpnKeyIcon />
                </IconButton>
              </Tooltip>
              
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
