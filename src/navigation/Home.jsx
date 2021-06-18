import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
        padding: theme.spacing(10),
        textAlign: 'center',
        margin: '25px 33px 0px',
        backgroundColor: '#f5f5f5',

    },
    
    title : {
        fontWeight: 600,
    },
    
    styledGridContainer: {
        margin: '0px 30px',
        
    },
    styledPaper: {
        padding: '20px 5px',
        height: 300,
        textAlign: 'justify',
        
    },
    
    styledCard: {
        maxWidth: 450,
        margin: 'auto',
        marginTop: '13px',
        maxHeight: '350px' 
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
        <Card className={classes.styledCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://image.freepik.com/free-photo/closeup-hands-passing-contract-unrecognizable-businessman_1098-19612.jpg"
                    title="Contemplative Reptile"
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
                    title="Contemplative Reptile"
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
                    title="Contemplative Reptile"
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
        </Grid>
        
        
        
        
    )
}


export default Home