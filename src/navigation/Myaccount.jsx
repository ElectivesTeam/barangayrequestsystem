import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';


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
		width: '100px',
		fontFamily: 'Montserrat',
		fontWeight: 600,
		fontSize: 11,
		color: 'white',
	  },
	
	  button: {
		borderRadius: 16,
		fontFamily: 'Montserrat',
		fontWeight: 600,
		fontSize: 14,
		width: '48%',
		textAlign: 'center',
		left: '52%',    
		
		
	  },
}));


function MyAccount() {

	//Style
	const classes = useStyles();
	let history = useHistory();
	const [changeSuccess, openChangeSuccess] = useState(false);
	const [changeFailed, openChangeFailed] = useState(false);
	const[first_name, setFirstName] = useState([]);
	const[last_name, setLastName] = useState([]);
	const[middle_name, setMiddleName] = useState([]);
	const[email, setEmail] = useState([]);
	const[contact_number, setContactNumber] = useState([]);
	const[getInfo, setGetInfoCheck] = useState(false)
	const[profilePic, setProfilePic] = useState([])
	const[profilePicURL, setProfilePicURL] = useState([])
	const[old_password, setOldPassword] = useState([]);
	const[new_password, setNewPassword] = useState([]);
	const[confirm_password, setConfirmPassword] = useState([]);
	const[lastnameError, setLastnameError] = useState(false);
    const[firstnameError, setFirstnameError] = useState(false);
    const[middlenameError, setMiddlenameError] = useState(false);
	const[contactnumberError, setContactnumberError] = useState(false);
    const[emailError, setEmailError] = useState(false);
	const[oldpasswordError, setOldPasswordError] = useState(false);
	const[newpasswordError, setNewPasswordError] = useState(false);
	const[newpassword2Error, setNewPassword2Error] = useState(false);
	
	function handleSelfieUpload(e) {
		setProfilePic(e.target.files[0]);
		let url = URL.createObjectURL(e.target.files[0]);
		try {
			AuthService.updateProfilePic(e.target.files[0])
			.then(() => {
				openChangeSuccess(true);
				setProfilePicURL(url)
			})
		} catch (error) {
			openChangeFailed(true)
			console.log(error)
		}
	}
	function handleSelfieRemove() {
		try {
			AuthService.updateProfilePic('')
			.then(() => {
				setProfilePic('');
				setProfilePicURL('')
				openChangeSuccess(true);
			})
		} catch (error) {
			openChangeFailed(true)
			console.log(error)
		}
	}

	//run once
	useEffect(() => {
		async function fetchData() {
			if (!AuthService.getCurrentUser()){
				history.push('/')
			}
			else{
				if (!getInfo){
					AuthService.getUserInformation()
					.then((response) => {
						if (response !== undefined){
							if(JSON.stringify(response.data.first_name).length >= 3)
								setFirstName(JSON.stringify(response.data.first_name).slice(1,-1));
							if(JSON.stringify(response.data.last_name).length >= 3)
								setLastName(JSON.stringify(response.data.last_name).slice(1,-1));
							if(JSON.stringify(response.data.middle_name).length >= 3)
								setMiddleName(JSON.stringify(response.data.middle_name).slice(1,-1));
							if(JSON.stringify(response.data.email).length >= 3)
								setEmail(JSON.stringify(response.data.email).slice(1,-1));
							if(JSON.stringify(response.data.mobile_number).length >= 3)
								setContactNumber(JSON.stringify(response.data.mobile_number).slice(1,-1));
							if(JSON.stringify(response.data.profile_pic).length >= 3){
								if(response.data.profile_pic != null){
									setProfilePicURL(AuthService.CLOUDINARY_URL() + response.data.profile_pic)
								}
								else
									setProfilePic('')
							}
							setGetInfoCheck(true);
						}
					})
				}
			}
		}
		fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	  });

	const handleUpdateInfo = (e) => {
		e.preventDefault()
		setLastnameError(false)
		setFirstnameError(false)
		setMiddlenameError(false)
		setContactnumberError(false)
		setEmailError(false)
		AuthService.updateUser(
			first_name,
			middle_name,
			last_name,
			email,
			contact_number
		  )
		.then((response) => {
			if (response.status === 200){
				if(JSON.stringify(response.data.first_name).length >= 3)
					setFirstName(JSON.stringify(response.data.first_name).slice(1,-1));
				if(JSON.stringify(response.data.last_name).length >= 3)
					setLastName(JSON.stringify(response.data.last_name).slice(1,-1));
				if(JSON.stringify(response.data.middle_name).length >= 3)
					setMiddleName(JSON.stringify(response.data.middle_name).slice(1,-1));
				if(JSON.stringify(response.data.email).length >= 3)
					setEmail(JSON.stringify(response.data.email).slice(1,-1));
				if(JSON.stringify(response.data.mobile_number).length >= 3)
					setContactNumber(JSON.stringify(response.data.mobile_number).slice(1,-1));
				setGetInfoCheck(true);
				openChangeSuccess(true);
				AuthService.getUserInformation()
			}
		})
		.catch((error) => {
			openChangeFailed(true)
			if (error.response !== undefined){
				if (error.response.status === 400) {
				  setLastnameError(JSON.stringify(error.response.data.last_name));
				  setMiddlenameError(JSON.stringify(error.response.data.middle_name));
				  setFirstnameError(JSON.stringify(error.response.data.first_name));
				  setEmailError(JSON.stringify(error.response.data.email))
				  setContactnumberError(JSON.stringify(error.response.data.mobile_number))
				  console.log(error.response.data);
				}
				  else console.log(error.response);
			}
		})
	};

	const handleUpdatePassword = (e) => {
		e.preventDefault()
		setOldPasswordError(false)
		setNewPasswordError(false)
		setNewPassword2Error(false)
		openChangeSuccess(false);
		openChangeFailed(false);
		AuthService.updatePassword(
			old_password,
			new_password,
			confirm_password
		)
		.then((response) => {
			if (response.status === 200){
				openChangeSuccess(true);
				setOldPassword('');
				setNewPassword('');
				setConfirmPassword('');
			}
		})
		.catch((error) => {
			openChangeFailed(true)
			if (error.response !== undefined){
				if (error.response.status === 400) {
					setOldPasswordError(JSON.stringify(error.response.data.old_password));
					setNewPasswordError(JSON.stringify(error.response.data.password));
					setNewPassword2Error(JSON.stringify(error.response.data.password));
				}
				  else console.log(error.response);
			}
		})
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		openChangeSuccess(false);
		openChangeFailed(false);
	};
	
	  

	if (AuthService.getCurrentUser()) {
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
										onChange={(e) => setFirstName(e.target.value)}
										value={first_name}
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="first_name"
										label="First name"
										name="first_name"
										autoComplete="first_name"
										autoFocus
										error={firstnameError}
										/>
										<Typography variant="body2"  align="left" color="secondary" name="firstnameError">
										  {firstnameError}
										</Typography>
									</Grid>
	
									{/* Last Name */}
									<Grid item xs={12} sm={12}>
										<TextField
										onChange={(e) => setLastName(e.target.value)}
										value={last_name}
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="last_name"
										label="Last Name"
										name="last_name"
										autoComplete="last_name"
										autoFocus
										error={lastnameError}
										/>
										<Typography variant="body2"  align="left" color="secondary" name="lastnameError">
										  {lastnameError}
										</Typography>
									</Grid>
	
									{/* Middle Name */}
									<Grid item xs={12} sm={12}>
										<TextField
										onChange={(e) => setMiddleName(e.target.value)}	
										value={middle_name}									
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="middle_name"
										label="Middle Name"
										name="Middle Name"
										autoComplete="middle_name"
										autoFocus
										error={middlenameError}
										/>
										<Typography variant="body2"  align="left" color="secondary" name="middlenameError">
										  {middlenameError}
										</Typography>
									</Grid>
	
									{/* E-mail */}
									<Grid item xs={12} sm={12}>
										<TextField
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="email"
										label="E-mail"
										name="email"
										autoComplete="email"
										autoFocus
										error={emailError}
										/>
										<Typography variant="body2"  align="left" color="secondary" name="emailError">
										  {emailError}
										</Typography>
									</Grid>
	
									{/* Contact Number */}
									<Grid item xs={12} sm={12}>
										<TextField
										onChange={(e) => setContactNumber(e.target.value)}
										value={contact_number}
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="contact_number"
										label="Contact Number"
										name="contact_number"
										autoComplete="contact_number"
										autoFocus
										error={contactnumberError}
										/>
										<Typography variant="body2"  align="left" color="secondary" name="contactnumberError">
											{contactnumberError}
										</Typography>
									</Grid>
									<Stack spacing={2} sx={{ width: '100%' }}>
										<Button
											type="submit"
											color="primary"
											fullWidth
											variant="contained"
											className={classes.button}
											onClick={handleUpdateInfo}
											>
											SAVE
										</Button>
										<Snackbar open={changeSuccess} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} TransitionComponent={Slide}>
											<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
												Account updated
											</Alert>
										</Snackbar>
										<Snackbar open={changeFailed} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} TransitionComponent={Slide}>
											<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
												Account change failed
											</Alert>
										</Snackbar>
									</Stack>
								</Grid>
								<Grid item xs={12} sm={1}></Grid>
								<Grid item xs={12} sm={3}>
									{/* Old Password */}
									<Grid item xs={12} sm={12}>
										<TextField
										onChange={(e) => setOldPassword(e.target.value)}
										value={old_password}
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="old_password"
										label="Old Password"
										name="old_password"
										autoComplete="old_password"
										autoFocus
										error={oldpasswordError}
										/>
										<Typography variant="body2"  align="left" color="secondary" name="oldpasswordError">
										  {oldpasswordError}
										</Typography>
									</Grid>
	
									{/* New Password */}
									<Grid item xs={12} sm={12}>
										<TextField
										onChange={(e) => setNewPassword(e.target.value)}
										value={new_password}
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="new_password"
										label="New Password"
										name="new_password"
										autoComplete="new_password"
										autoFocus
										error={newpasswordError}
										/>
										<Typography variant="body2"  align="left" color="secondary" name="newpasswordError">
										  {newpasswordError}
										</Typography>
									</Grid>
	
									{/* Confirm New Password */}
									<Grid item xs={12} sm={12}>
										<TextField
										onChange={(e) => setConfirmPassword(e.target.value)}
										value={confirm_password}
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="confirm_new_password"
										label="Confirm New Password"
										name="confirm_new_password"
										autoComplete="confirm_new_password"
										autoFocus
										error={newpassword2Error}
										/>
										<Typography variant="body2"  align="left" color="secondary" name="newpassword2Error">
										  {newpassword2Error}
										</Typography>
									</Grid>
									<Button
										type="submit"
										color="primary"
										fullWidth
										variant="contained"
										className={classes.button}
										onClick={handleUpdatePassword}
										>
										CONFIRM
									</Button>
								</Grid>	
									
								<Grid item xs={12} sm={1}></Grid>
								<Grid item xs={12} sm={3}>
									<Grid item xs={12} sm={12} className={classes.uploadContainer}>
										Update your selfie 
										<div className={classes.divtest}>
											<img src={(profilePic==='' || profilePic===null) ? '../img/image.png': profilePicURL} alt="" width = "170px" height = "150px"></img>
											<Grid item xs={12} sm={2}>
												<div className={classes.picture}>
													<Button 
													component="label"
													fullWidth
													variant="contained"
													color="primary"
													className={classes.buttonUpload}
													href="#"
													>
													<input 
														accept="image/*"
														type="file"
														hidden 
														onChange={handleSelfieUpload}
													/>
													UPLOAD
													</Button>

													<Button 
													component="label"
													onClick={handleSelfieRemove}
													fullWidth
													variant="contained"
													color="primary"
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