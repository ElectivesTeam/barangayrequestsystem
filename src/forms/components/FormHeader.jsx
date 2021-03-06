import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px 30px 0px 30px',
      
    },
    title:{ 
        fontWeight: 600,
        fontSize:'1.7rem',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    }
}));

function FormHeader({ formTitle }){
    const classes = useStyles();
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Box bgcolor="#3f51b5" color="primary.contrastText" p={2} className={classes.title}>
                        {formTitle}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default FormHeader
