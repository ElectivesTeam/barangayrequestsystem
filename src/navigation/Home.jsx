import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },

    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        margin: '25px 33px 0px',
        backgroundColor: '#f5f5f5'
    },
    
    title : {
        fontWeight: 600,
    },
    
    styledGridContainer: {
        margin: '0px 33px',
        
    },
    styledPaper: {
        padding: '20px 5px',
        height: 300,
    },
    
    
    
}));
function Home() {
    const classes = useStyles();
    return (
        
        <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.title}>
                    Request Documents Online!
                </Typography>
                <Typography variant="subtitle1">
                    For Students and Graduates of PUP Sta. Mesa, Manila (Main)
                </Typography>
                <Typography variant="subtitle1">
                    (Bachelor Degree / Traditional Undergrad)
                </Typography>
                <Typography variant="subtitle1">
                    For Concerns, email us at registrar@pup.edu.ph
                </Typography>
                <Typography variant="h5" >
                    Request, Pay, Submit the Requirements, Monitor, and Claim.
                </Typography>
            </Paper>
        </Grid>
        <Grid container spacing={2} className={classes.styledGridContainer}>
            <Grid item xs={4}>
                <Paper className={classes.styledPaper}>
                    <Typography variant="h5"gutterBottom>
                        Document Requesting
                    </Typography>
                    <Divider />
                    <Typography variant="body1">
                        Requesting of documents is now available online. Create an account and upload your valid ID for verfication to get an access to the Online Document Request Page
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.styledPaper}>
                    <Typography variant="h5" gutterBottom>
                        Easy Payment
                    </Typography>
                    <Divider />
                    <Typography variant="body1">
                        Payment of Document Request is easy. Either through any LandBank Branch or through PUP Cashier's Office
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.styledPaper}>
                    <Typography variant="h5"gutterBottom>
                        Clearance Monitoring
                    </Typography>
                    <Divider />
                    <Typography variant="body1">
                    Before, Document Requests should be submitted together with the Clearance Form, signed by all required signatories. But now, you’ll just have to wait (and do some actions if necessary) for the system to accomplish your clearance automatically.



                    </Typography>
                </Paper>
            </Grid>
            
        </Grid>
        
        
        </Grid>
        
        
        
        
    )
}


export default Home