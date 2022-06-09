import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import AuthService from "../services/auth.service";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
        color:'#3f51b5',
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
        padding: '30px 20px 35px 20px',
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
        borderRadius:'15px',
        
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
        textAlign: 'center',
        marginTop: 8,
        letterSpacing: 1,
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

    stepsContentContainer: {
        // padding: '30px 20px 35px 20px',
        display:'flex', 
        flexDirection:'row',
        margin:'0 90px',
        '@media (max-width:600px)': {
            
        },
        '@media (max-width:1080px)': {
            margin:0,
            flexDirection:'column',
        },  
    },

    stepsContentImage: {
        borderRadius: 15, 
        width:700, 
        boxShadow:'0px 10px 5px 0px rgba(0,0,0,0.4)',

        '@media (max-width:750px)': {
            width:550,
            
        }, 
        
        '@media (max-width:500px)': {
            width:350,
            
        },  

    },

    steps:{
        textAlign:'center',
        padding:'0 30px 50px 0',
        '@media (max-width:1080px)': {
            padding:0
        }, 
    },

    stepsContentText:{
        margin:'110px 0', 
        textAlign:'left',

        '@media (max-width:1080px)': {
          textAlign:'left',
          margin:'20px 50px'
        }, 
        '@media (max-width:550px)': {
            margin:'20px 20px',
            textAlign:'center'
        },  
    },

}));

const user = AuthService.getCurrentUser()

function Home() {
    const classes = useStyles();
    const getStarted = () => {
        if (!user) {
            return <div className={classes.styledButton}>
                <Button href="/register" variant="contained"  color = "primary" endIcon={<ArrowForwardOutlinedIcon/>}>
                            Get Started
                </Button>
            </div>
        }
    }

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
                        (For Residents of Barangay Landayan, Laguna)
                    </Typography>
                    <Typography variant="h5" className={classes.styledTypography}>
                        Request, Pay, Submit the Requirements, & Claim.
                    </Typography>
                    {getStarted()}
                </div>
            </div>    
                
                
            
        </Grid>
        
         
        <Grid container spacing={2} className={classes.styledGridContainer} style= {{backgroundColor:'#e0ecff'}}>
            <Card className={classes.styledCard}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Document"
                        height="175"
                        image="../img/graph.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:'#3f51b5'}}>
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
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:'#3f51b5'}}>
                        Easy & Convenient
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        We made it easier to request documents. No more waiting in long lines; simply select your desired document, fill in the required details, and submit. 
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
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:'#3f51b5'}}>
                        Clearance Monitoring
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" >
                            Check the latest status updates on your request. Easier communication when additional requirement is needed and notification when requested documents are ready for pick-up.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        

        <Grid style={{margin: 'auto'}} >
            <Grid style={{margin: '45px 0 45px 0'}} >
                <Typography variant="h1" style={{textAlign:'center',fontSize:40, fontWeight:600, color:'#3f51b5'}}>
                    How it works
                </Typography>
                <Typography variant="h2" style={{textAlign:'center',fontSize:20}}>
                    Get started with 3 easy steps.
                </Typography>
            </Grid>
            <Grid style={{}}>
                <Grid style={{}} className={classes.stepsContentContainer}>
                    <Grid style={{}} className={classes.steps}>
                        <img src="../img/step1.PNG" alt="" className={classes.stepsContentImage} />
                    </Grid>
                    <Grid className={classes.stepsContentText}>
                        <Typography variant="h2" style={{fontSize:30, fontWeight: 600,  color:'#3f51b5'}}>
                            1. Create an Account
                        </Typography>
                        <Typography variant="h2" style={{fontSize:19 }}>
                            To create an account, go to the Registration page. Fill out the form and upload your valid ID and a picture.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid style={{}} className={classes.stepsContentContainer}>
                    <Grid className={classes.stepsContentText}>
                        <Typography variant="h2" style={{fontSize:30, fontWeight: 600, color:'#3f51b5'}}>
                            2. Select a Document
                        </Typography>
                        <Typography variant="h2" style={{fontSize:19}}>
                            Select the document you wish to request and provide the necessary information.
                        </Typography>
                    </Grid>
                    <Grid className={classes.steps}>
                        <img src="../img/step2.PNG" alt="" className={classes.stepsContentImage} style={{marginBottom:30}} />
                    </Grid>
                </Grid>
                <Grid style={{}} className={classes.stepsContentContainer}>
                    <Grid className={classes.steps}>
                        <img src="../img/step3.PNG" alt="" className={classes.stepsContentImage}  />
                    </Grid>
                    <Grid className={classes.stepsContentText}>
                        <Typography variant="h2" style={{fontSize:30, fontWeight: 600, color:'#3f51b5'}}>
                            3. Review & Submit
                        </Typography>
                        <Typography variant="h2" style={{fontSize:19}}>
                            Review all the provided information & Submit. We will notify you in your email for further instruction.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        
    </Grid>
    )
}


export default Home