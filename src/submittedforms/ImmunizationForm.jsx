import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px 30px 0px 30px',
      
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

function ImmunizationForm(){
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
                                        {/* <p>Name: Juan Dela Cruz</p>
                                        <p>Address: Blk 38 Lot 64 Southfairway Homes Landayan San Pedro Laguna</p> */}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {/* <p>Guardian: Pedro Dela Cruz</p> */}
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