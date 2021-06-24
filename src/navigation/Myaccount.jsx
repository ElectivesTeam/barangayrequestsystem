import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
      padding: '30px', 
    },

    myaccountContainer: {
      borderTopRightRadius: 28,
      borderBottomRightRadius: 28,
      borderTopLeftRadius: 28,
      borderBottomLeftRadius: 28,
    },

    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      padding: '15px',
      backgroundColor: 'gray',
      color: 'white',
      borderTopRightRadius: 28,
      borderTopLeftRadius: 28
    },

    paper: {
      margin: theme.spacing(4, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      margin: '20px 32px',       
    },

    form: {
      width: '100%', // Fix IE 11 issue.
      margin: theme.spacing(1),
      fontFamily: 'Montserrat',
    },
    
    divHeader: {
      marginLeft: theme.spacing(2),
      display: 'flex',
      flex: 'row'
    },
    
    uploadContainer: {
      height:'279px',
      margin: theme.spacing(1, 1, 1, 1),
    },

    h6: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        margin: '10px', 
    },

    divtest: {
      display: 'flex',
      flexDirection: 'row',
    },

    picture: {
      display: 'flex',
      flexDirection: 'column',
    },

    buttonUpload: {
      marginTop: theme.spacing(1),
      top: '32%',
      left: '150%',
      width: '120px',
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: 11,
      backgroundColor: 'gray',
      color: 'white',
      '&:hover': {
        backgroundColor: '#b71c1c',
      },
    }
}));


function MyAccount() {

	//Style
	const classes = useStyles();

	return (
		<Grid container component="main" className={classes.root}  >
		<CssBaseline/>
			<Grid item xs={12} sm={12} md={12} component={Paper} elevation={2} square className={classes.myaccountContainer}>
				<div className={classes.headerPanel}>
					<div>
						<Typography  component="h1" variant="h4" className={classes.h1}>My Account</Typography>
					</div>
				</div>
				<div className={classes.paper}>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<div className={classes.divHeader}>
								<Typography className={classes.header}>
									USER INFORMATION
								</Typography>
								{/* <Button 
								type="submit"
								fullWidth
								variant="contained"
								className={classes.button}
								href="#"
								>
								UPLOAD
								</Button> */}
								</div>
							</Grid>
							
							<Grid item xs={12} sm={6}>
								{/* First Name */}
								<Grid item xs={12} sm={6}>
									<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="first_name"
									label="First name"
									name="first_name"
									autoComplete="first_name"
									autoFocus
									/>
								</Grid>

								{/* Last Name */}
								<Grid item xs={12} sm={6}>
									<TextField
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

								{/* Middle Name */}
								<Grid item xs={12} sm={6}>
									<TextField
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

								{/* E-mail */}
								<Grid item xs={12} sm={6}>
									<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="email"
									label="E-mail"
									name="email"
									autoComplete="email"
									autoFocus
									/>
								</Grid>

								{/* Contact Number */}
								<Grid item xs={12} sm={6}>
									<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="contact_number"
									label="Contact Number"
									name="contact_number"
									autoComplete="contact_number"
									autoFocus
									/>
								</Grid>
							</Grid>

							<Grid item xs={12} sm={6}>
								<Grid item xs={12} sm={6} component={Paper} elevation={2} square className={classes.uploadContainer}>
									<Typography className={classes.h6}>PICTURE
									</Typography> 
									<div className={classes.divtest}>
										<Grid item xs={12} sm={2}>
											<img width="250px" height="250px" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_account_box_48px-512.png"></img>
										</Grid>
									
										<div className={classes.picture}>
											<Button 
											type="submit"
											fullWidth
											variant="contained"
											className={classes.buttonUpload}
											href="#"
											>
											UPLOAD
											</Button>
											<Button 
											type="submit"
											fullWidth
											variant="contained"
											className={classes.buttonUpload}
											href="#"
											>
											DELETE
											</Button>
										</div>
									</div>
								</Grid>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	)
}
export default MyAccount