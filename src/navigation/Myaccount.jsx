import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";

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
      fontWeight: 600,
      fontSize:'1.7rem',
      padding: '18px',
      backgroundColor: '#4054b4',
      color: 'white',
	  
	  borderTopRightRadius:15,
	  borderTopLeftRadius:15,
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
		height:'180px',
		marginRight: theme.spacing(2)
	},

	uploadContent: {
		margin: theme.spacing (1, 1, 1, 1)
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
      marginTop: theme.spacing(4),
	  marginRight: theme.spacing(3)
    },

	buttonUpload: {
		marginTop: theme.spacing(1),
		marginLeft: theme.spacing(-3),
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
	  },
	
	  button: {
		borderRadius: 16,
		fontFamily: 'Montserrat',
		fontWeight: 600,
		fontSize: 18,
		width: '15%',
		left: '83%',    
		backgroundColor: 'black',
		color: 'white',
		'&:hover': {
		  backgroundColor: '#b71c1c',
		}
	  },
}));


function MyAccount() {

	//Style
	const classes = useStyles();
	let history = useHistory();
	const user = AuthService.getCurrentUser()

	if (user) {
		return (
			<Grid container component="main" className={classes.root}>
				
			<CssBaseline/>
				<Grid item xs={12} sm={12} md={12} component={Paper} elevation={2} square className={classes.myaccountContainer}>
				
					
						<div>
							<Typography  component="h2" variant="h4" className={classes.h1}>MY ACCOUNT</Typography>
						</div>
					
	
					<div className={classes.paper}>
						<form className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
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
								<Grid item xs={12} sm={4}>
									<div className={classes.divHeader}>
									<Typography className={classes.header}>
										PASSWORD
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
								<Grid item xs={12} sm={4}></Grid>
								
								<Grid item xs={12} sm={3}>
									{/* First Name */}
									<Grid item xs={12} sm={12}>
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
									<Grid item xs={12} sm={12}>
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
									<Grid item xs={12} sm={12}>
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
									<Grid item xs={12} sm={12}>
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
									<Grid item xs={12} sm={12}>
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
								<Grid item xs={12} sm={1}></Grid>
								<Grid item xs={12} sm={3}>
									{/* Old Password */}
									<Grid item xs={12} sm={12}>
										<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="old_password"
										label="Old Password"
										name="old_password"
										autoComplete="old_password"
										autoFocus
										/>
									</Grid>
	
									{/* New Password */}
									<Grid item xs={12} sm={12}>
										<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="new_password"
										label="New Password"
										name="new_password"
										autoComplete="new_password"
										autoFocus
										/>
									</Grid>
	
									{/* Confirm New Password */}
									<Grid item xs={12} sm={12}>
										<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="confirm_new_password"
										label="Confirm New Password"
										name="confirm_new_password"
										autoComplete="confirm_new_password"
										autoFocus
										/>
									</Grid>
								</Grid>	
									
								<Grid item xs={12} sm={1}></Grid>
								<Grid item xs={12} sm={3}>
									<Grid item xs={12} sm={12} className={classes.uploadContainer}>
										Upload your selfie 
										<div className={classes.divtest}>
											<img src="https://image.flaticon.com/icons/png/512/149/149092.png" width = "170px" height = "150px"></img>
											<Grid item xs={12} sm={2}>
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
											</Grid>    
										</div>
									</Grid>
								</Grid>
							
							</Grid>
						</form>
						{/* Next Button */}
						<Button
								type="submit"
								fullWidth
								variant="contained"
								className={classes.button}
								href="#"
							  >
								UPDATE
							  </Button>
					</div>
				</Grid>
			</Grid>
		)
	}else{
		history.push('/')
    	return(<h2>Home</h2>)
	}
}
export default MyAccount
