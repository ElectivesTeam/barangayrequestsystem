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

function IndigencyClearance(reviewIndigencyClearance){
    const classes = useStyles();
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            Indigency Clearance
                            
                            <div className={classes.info}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p>Claimant: {reviewIndigencyClearance.reviewIndigencyClearance.name}</p>
                                        <p>Address: {reviewIndigencyClearance.reviewIndigencyClearance.address}</p>
                                        <p>Patient Name: {reviewIndigencyClearance.reviewIndigencyClearance.patient_name}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>Passed onto whom: {reviewIndigencyClearance.reviewIndigencyClearance.passed_onto_whom}</p>
                                        <p>Patient Relationship: {reviewIndigencyClearance.reviewIndigencyClearance.patient_relationship}</p>
                                        <p>Purpose: {reviewIndigencyClearance.reviewIndigencyClearance.purpose}</p>
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

export default IndigencyClearance
