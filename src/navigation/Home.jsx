import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        margin: 'auto',
        
    },

    paper: {
        padding: theme.spacing(6),
        
        margin: '25px 33px 0px',
        color: '#616161',
        flexDirection: 'row',
        backgroundColor: '#fff',
        
    },
    
    title : {
        fontWeight: 600,
        
        '@media (max-width:600px)': {
            fontSize: '1.7rem',
            textAlign: 'center',  
        },
        '@media (min-width:600px)': {
            textAlign: 'center',
            fontSize: '2rem',   
        },
        '@media (min-width:1200px)': {
            fontSize: '2.5rem',
        },
    },

    styledTypography : {
        textAlign: 'center',
        '@media (max-width:600px)': {
            fontSize: '0.8rem',
        },
        '@media (min-width:600px)': {
            fontSize: '1rem',
            
        },
        '@media (min-width:1200px)': {
            fontSize: '1.2rem',
        },
    },
    
    styledGridContainer: {
        margin: '0px 30px',
        paddingBottom: '30px',
        '@media (max-width:600px)': {
            margin:'auto',
            width: '100%'
        },
        '@media (min-width:600px)': {
            margin:'auto',
            width: '100%'
        },
    },
    
    styledCard: {
         
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '13px',
        maxHeight: '350px',
        
        '@media (min-width:1300px)': {
            width: '32%', 
             
        },
        '@media (max-width:1300px)': {
            width: '32%',    
        },
        '@media (max-width:1080px)': {
            width: '90%',   
        },    
        
    },
    styledButton: {
        width: '58%',
        textAlign: 'center',
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 8,
        
        letterSpacing: 1,
        '@media (min-width:1000px)': {
            width: '32%', 
            
        },
    },

    heroImg: {
        
        height:'320px',
        '@media (max-width:767px)': {
            display: 'none'
        },
        
        '@media (max-width:1000px)': {
            width:'430px', 
        },
        '@media (min-width:1000px)': {
            width:'500px',  
        },
        '@media (min-width:1300px)': {
            width:'600px',  
        },
    },

    heroPage: {
        display: 'flex',
        
    },

    heroContent: {
        margin: '100px 0px 0px 197px',
        
        '@media (max-width:600px)': {
            margin:'auto',
        },
        '@media (min-width:600px)': {
            margin:'auto',
            
        },
    },
    
    

    
}));
function Home() {
    const classes = useStyles();
    return (
        
    <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} className={classes.paper}>
            
            <div className={classes.heroPage}>
                <div>
                    <img src="../img/support.png" alt="" className= {classes.heroImg}/>
                </div>
                
                <div className={classes.heroContent}>
                    <Typography variant="h4" className={classes.title}>
                        Request Documents Online!
                    </Typography>
                    <Typography variant="h5"className={classes.styledTypography}>
                        (For Residents of Barangay Landayan)
                    </Typography>
                    <Typography variant="h5" className={classes.styledTypography}>
                        Request, Pay, Submit the Requirements, & Claim.
                    </Typography>
                    <Button href="/register" variant="contained" className={classes.styledButton} color = "primary">
                        Get Started
                    </Button>
                </div>
            </div>    
                
                
            
        </Grid>
        
        <div className={classes.divtest}>
        <Divider />  
        <Grid container spacing={2} className={classes.styledGridContainer}>
        <Card className={classes.styledCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Document"
                    height="175"
                    image="../img/graph.png"
                    title="test"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Document Requesting
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Requesting of documents is now available online. Create an account and upload your valid ID for verfication to get an access to the Online Document Request Page
                    </Typography>
                </CardContent>
            </CardActionArea>
            
            
        </Card>
        <Card className={classes.styledCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Payment"
                    height="175"
                    image="../img/payment.png"
                    title="test"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Easy Payment
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Requesting of documents is now available online. Create an account and upload your valid ID for verfication to get an access to the Online Document Request Page
                    </Typography>
                </CardContent>
            </CardActionArea>
            
            
        </Card>
        <Card className={classes.styledCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Clearance"
                    height="175"
                    image="../img/team.png"
                    title="test"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Clearance Monitoring
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                    Requesting of documents is now available online. Create an account and upload your valid ID for verfication to get an access to the Online Document Request Page
                    </Typography>
                </CardContent>
            </CardActionArea>
            
            
        </Card>
        
        
        </Grid>
        </div>
    </Grid>
        
        
        
        
    )
}


export default Home