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

function DentalServiceForm(reviewDentalService){
    const classes = useStyles();
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            Dental Service Form
                            
                            <div className={classes.info}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p>Last Name: {reviewDentalService.reviewDentalService.last_name}</p>
                                        <p>First Name: {reviewDentalService.reviewDentalService.first_name}</p>
                                        <p>Middle Name: {reviewDentalService.reviewDentalService.middle_name}</p>
                                        <p>Birthday: {reviewDentalService.reviewDentalService.birthday}</p>
                                        <p>Address: {reviewDentalService.reviewDentalService.address}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>Civil Status: {reviewDentalService.reviewDentalService.civilStatus}</p>
                                        <p>Birthplace: {reviewDentalService.reviewDentalService.birthplace}</p>
                                        <p>Contact Number: {reviewDentalService.reviewDentalService.contactNumber}</p>
                                        <p>Date Received: {reviewDentalService.reviewDentalService.dateReceived}</p>
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

export default DentalServiceForm
