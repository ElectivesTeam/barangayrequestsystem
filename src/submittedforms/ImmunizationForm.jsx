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

function ImmunizationForm(reviewImmunization){
    const classes = useStyles();
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            Immunization Form
                            
                            <div className={classes.info}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p>Name: {reviewImmunization.reviewImmunization.name}</p>
                                        <p>Address: {reviewImmunization.reviewImmunization.address}</p>
                                        <p>Father's Name: {reviewImmunization.reviewImmunization.father_name}</p>
                                        <p>Mother's Name: {reviewImmunization.reviewImmunization.mother_name}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>Height: {reviewImmunization.reviewImmunization.birth_height}</p>
                                        <p>Weight: {reviewImmunization.reviewImmunization.birth_weight}</p>
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

export default ImmunizationForm
