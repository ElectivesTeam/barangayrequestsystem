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

function VoucherForm(reviewVoucher){
    const classes = useStyles();
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            Voucher Form
                            
                            <div className={classes.info}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <p>Student Name: {reviewVoucher.reviewVoucher.studentName}</p>
                                        <p>Parent Name: {reviewVoucher.reviewVoucher.parentName}</p>
                                        <p>Address: {reviewVoucher.reviewVoucher.schoolAddress}</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>School: {reviewVoucher.reviewVoucher.school}</p>
                                        <p>Grade or Year: {reviewVoucher.reviewVoucher.grade}</p>
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

export default VoucherForm
