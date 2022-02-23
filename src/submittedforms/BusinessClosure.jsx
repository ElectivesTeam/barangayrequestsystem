import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px 30px 0px 30px',
        fontFamily: 'Montserrat'
    },
    title:{ 
        fontWeight: 600,
        fontSize:'1.4rem',
    },
    info:{
        fontWeight: 500,
        fontSize:'1rem',
        paddingLeft:'25px'
    }
}));

function BusinessClosureForm(reviewBusinessClosure){
    const classes = useStyles();
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            Business Closure Form
                            
                            <div className={classes.info}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p>Business Name: {reviewBusinessClosure.reviewBusinessClosure.businessName}</p>
                                        <p>Business Owner: {reviewBusinessClosure.reviewBusinessClosure.businessOwner}</p>
                                        <p>Business Address: {reviewBusinessClosure.reviewBusinessClosure.businessAddress}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>Nature of Business: {reviewBusinessClosure.reviewBusinessClosure.businessNature}</p>
                                        <p>Last Business Operation: {reviewBusinessClosure.reviewBusinessClosure.dateReceived}</p>
                                    </Grid>
                                </Grid>
                            </div>

                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default BusinessClosureForm
