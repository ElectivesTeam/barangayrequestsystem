import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 65
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Copyright = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{fontFamily:'Montserrat', fontWeight:600, color:'#3f51b5'}}>{"Terms & Conditions"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" sx={{fontFamily:'Montserrat',fontWeight:600,}}>
            Welcome to ODRS (Brgy. Landayan, Laguna)!
            </DialogContentText>
            <br/>
            <DialogContentText id="alert-dialog-slide-description" sx={{fontFamily:'Montserrat', textAlign:'justify'}}>
              These terms and conditions outline the rules and regulations for the use of our Website, located at https://landayan-odrs.herokuapp.com/.
              By accessing this website we assume you accept these terms and conditions. Do not continue to use ODRS if you do not agree to take all of the terms and conditions stated on this page.
            </DialogContentText>
            <br/>
            <DialogContentText id="alert-dialog-slide-description" sx={{fontFamily:'Montserrat', textAlign:'justify'}}>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </DialogContentText>
            <br/>
            <DialogContentText id="alert-dialog-slide-description" sx={{fontFamily:'Montserrat', textAlign:'justify'}}>
            License
            <br/>
            Unless otherwise stated, Licensors own the intellectual property rights for all material on ODRS. All intellectual property rights are reserved. You may access this from ODRS for your own personal use subjected to restrictions set in these terms and conditions.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} sx={{fontFamily:'Montserrat', backgroundColor:"#3f51b5", borderRadius:3 }}>I agree to the terms & conditions</Button>
          </DialogActions>
        </Dialog>

      <Typography variant="body2" color="white" sx={{fontFamily:'Montserrat'}}>
        {'Copyright © '}
        {new Date().getFullYear()}
        {' | '}
        <Link color="inherit" onClick={handleClickOpen} style={{cursor:'pointer'}}>
          Terms & Conditions
        </Link>
      </Typography>

    </div>
    
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