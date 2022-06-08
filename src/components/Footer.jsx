import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 65
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="white" sx={{fontFamily:'Montserrat'}}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {' | '}
      <Link color="inherit" href="#">
        Terms & Conditions
      </Link>
    </Typography>
  );
}

const StickyFooter = () => {
  const classes = useStyles();
  return (
    <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          textAlign:'center',
          backgroundColor: '#3f51b5'
        }} 
      >
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
              <img src="../img/Brgy Landayan Logo.png" className={classes.logo} alt=""  />
            </Box>
            <Typography variant="body1" sx={{fontFamily:'Montserrat', fontWeight:600, color:'white'}}>
              Brgy. Landayan, Laguna ODRS
            </Typography>
        <Copyright />
        
      </Box>
  );
}

export default StickyFooter