import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        margin: 'auto'
        
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
        '@media (max-width:600px)': {
            fontSize: '0.8rem',
            textAlign: 'center'
        },
        '@media (min-width:600px)': {
            fontSize: '1rem',
            textAlign: 'center'
        },
        '@media (min-width:768px)': {
            
            fontSize: '0.8rem',   
        },
        '@media (min-width:1200px)': {
            fontSize: '1rem', 
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
        '@media (max-width:972px)': {
            width: '90%'   
        },   
        
    },

    heroImg: {
        
        height:'400px',
        '@media (max-width:767px)': {
            display: 'none'
        },
        
        '@media (min-width:768px)': {
            display: 'initial',
            width:'400px',  
        },
        '@media (max-width:1200px)': {
            width:'400px', 
        },
        '@media (min-width:1300px)': {
            width:'550px',  
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
                    <img src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/202752111_762647197749285_7031941526061508193_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEyiyG0dHoGpZKJFJwK603OgkmMM9FXM9uCSYwz0Vcz2ynUBHaIovmyxDL0s7AkrcR44NsnL0bfgUbCDUbdIhPO&_nc_ohc=Bc4lFzD2Ai4AX9GDq_Y&_nc_ht=scontent.fmnl17-1.fna&oh=5b35710cdd5bc6236169ed3722448cbc&oe=60D230CC" alt="" className= {classes.heroImg}/>
                </div>
                
                <div className={classes.heroContent}>
                    <Typography variant="h4" className={classes.title}>
                        Request Documents Online!
                    </Typography>
                    <Typography variant="h5" className={classes.styledTypography}>
                        Request, Pay, Submit the Requirements, & Claim.
                    </Typography>
                </div>
            </div>    
                
                
                
            
        </Grid>
        
        <div className={classes.divtest}>
        <Grid container spacing={2} className={classes.styledGridContainer}>
        <Card className={classes.styledCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://image.freepik.com/free-photo/closeup-hands-passing-contract-unrecognizable-businessman_1098-19612.jpg"
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
            <CardActions>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            
        </Card>
        <Card className={classes.styledCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://image.freepik.com/free-photo/closeup-hands-passing-contract-unrecognizable-businessman_1098-19612.jpg"
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
            <CardActions>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            
        </Card>
        <Card className={classes.styledCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://image.freepik.com/free-photo/closeup-hands-passing-contract-unrecognizable-businessman_1098-19612.jpg"
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
            <CardActions>
                <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
            
        </Card>
        
        
        </Grid>
        </div>
    </Grid>
        
        
        
        
    )
}


export default Home