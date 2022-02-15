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

function BailBondForm(reviewBailBond){
    const classes = useStyles();
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            Bail Bond Form
                            
                            <div className={classes.info}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p>Name: {reviewBailBond.reviewBailBond.name}</p>
                                        <p>Address: {reviewBailBond.reviewBailBond.address}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>Case Number: {reviewBailBond.reviewBailBond.caseNumber}</p>
                                        
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

export default BailBondForm
