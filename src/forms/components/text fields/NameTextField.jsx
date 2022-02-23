import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '10vh',
      padding: '0px 30px 0px 30px',
    },

    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      margin: '20px 32px',       
    },

    registerContainer: {
      borderBottomRightRadius: 28,
      borderBottomLeftRadius: 28,
    },

    form: {
      width: '100%', // Fix IE 11 issue.
      margin: theme.spacing(1),
      fontFamily: 'Montserrat',
    },
}));


function NameTextField() {

     //form Validation
    const[lastname, setLastname] = useState('')
    const[firstname, setFirstname] = useState('')
    const[middlename, setMiddlename] = useState('')

    //Style
    const classes = useStyles();

    return (
         <Grid container component="main" className={classes.root} >
             <CssBaseline/>
             <Grid item xs={12} sm={12} md={12} component={Paper} elevation={2} square className={classes.registerContainer}>
                <div className={classes.paper}>
                    <form className={classes.form} noValidate autoComplete="off">
                        <Grid container spacing={2}>

                            {/* Last Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    onChange={(e) => setLastname(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="last_name"
                                    autoFocus
                                />
                            </Grid>

                            {/* First Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    onChange={(e) => setFirstname(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    name="first_name"
                                    autoComplete="first_name"
                                    autoFocus
                                />
                            </Grid>

                            {/* Middle Name */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    onChange={(e) => setMiddlename(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="middle_name"
                                    label="Middle Name"
                                    name="Middle Name"
                                    autoComplete="middle_name"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                    </form>
                </div>
             </Grid>
        </Grid>
    )
}
export default NameTextField
