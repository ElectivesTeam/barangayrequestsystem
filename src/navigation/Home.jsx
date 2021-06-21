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
            paddingBottom:8   
        },
        '@media (max-width:1300px)': {
            width: '32%',    
        },
        '@media (max-width:1080px)': {
            width: '90%',
            paddingBottom:30   
        },   
        '@media (min-width:972px)': {
            paddingBottom:12   
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
                    <img src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.15752-9/188300092_202878801651435_2133067217804359586_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeG2NE-9x8kiGoYwSBn-7pZeygqAx2o85FLKCoDHajzkUpBnXssCUQCmtHMSJEgmJLEA_8NtCx32AyJwwubtOA7W&_nc_ohc=ijUn_a3Yhm8AX9PGQev&_nc_ht=scontent.fcrk1-3.fna&oh=326220fa67b5832eff97fce894fa91fa&oe=60D5FF5D" alt="" className= {classes.heroImg}/>
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
                    alt="Contemplative Reptile"
                    height="175"
                    image="https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.15752-9/186481270_484180009573132_4728733517113713159_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFN8XI0_OLZ1241YhFma5c60VARI-K-KA_RUBEj4r4oDxOvkJ2dj0SB9WbnR6TQ_a_mFZZZxTkT44uq5-i-QQsF&_nc_ohc=B0awnYe_SjEAX_nma3T&tn=LC_zEBNov5h8K-5R&_nc_ht=scontent.fcrk1-1.fna&oh=b67ce1a4dbe17b6be04b4a02d2c1217b&oe=60D60484"
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
                    height="175"
                    image="https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.15752-9/187798736_755005728524555_4900334241093532067_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFyah2polI4hqQHkNeqGT1FrPI3a4WXoFWs8jdrhZegVaU531XytaL8JTTHRvmNuxnP3KAeATK37i3Qb2R-19pw&_nc_ohc=ze2LMFvNX2AAX_CbKCQ&_nc_ht=scontent.fcrk1-1.fna&oh=7bc9316265cfab67530b3e3a2dbb529c&oe=60D529EF"
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
                    height="175"
                    image="https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.15752-9/187530930_496613918207406_3165223724841735941_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHXIBuw1zaKmsRsgPIjxIP9IkKvHDLFP14iQq8cMsU_XvlLtUSVigHL6fHMI3HYozWqVbM0vRppwwHL1NPUp0he&_nc_ohc=6AlSiHNKS8MAX9z2kyq&tn=LC_zEBNov5h8K-5R&_nc_ht=scontent.fcrk1-3.fna&oh=fe1c0769d8d2f27326c85499175877c6&oe=60D4A189"
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
                <Button size="small" color="primary" >
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