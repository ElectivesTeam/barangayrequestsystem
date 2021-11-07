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

function BusinessClosureForm(){
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
                                        <p>Business Name: AWS123</p>
                                        <p>Business Owner: Juan Dela Cruz</p>
                                        <p>Business Address: Blk 38 Lot 64 Southfairway Homes Landayan San Pedro Laguna</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>Nature of Business: Electronics</p>
                                        <p>Last Business Operation: August 12, 2020</p>
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