import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';

import AuthService from "../services/auth.service"

//table
import AdminListofRequest from '../table/AdminListofRequest';
import AdminListofUser from '../table/AdminListofUser';

const useStyles = makeStyles((theme) => ({
    floatingButtonContainer:{
        marginLeft: theme.spacing(6),
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
    }
}));


function Admin() {
    const classes = useStyles();
    let history = useHistory();

    const [showListOfRequestTable, setShowListOfRequestTable] = useState(false)
    const [showListOfUserTable, setShowListOfUserTable] = useState(false)
    
    const handleRequest = () => {
        setShowListOfRequestTable(true)
        setShowListOfUserTable(false)
    }

    const handleUser = () => {
        setShowListOfRequestTable(false)
        setShowListOfUserTable(true)
    }

    if (AuthService.getCurrentUser()) {
        return (
                <Grid container>
                    <Grid item xs={1}>
                        <Box sx={{ '& > :not(style)': { m: 1 } }} className={classes.floatingButtonContainer}>
                            <Tooltip title="Requests">
        
                                <Fab aria-label="add" onClick={handleRequest} color={showListOfRequestTable ? "primary" : "default"}>
                                    <ArticleIcon />
                                </Fab>
                            </Tooltip>
                        
                            <Tooltip title="User">
                                <Fab aria-label="add" onClick={handleUser} color={showListOfUserTable ? "primary" : "default"}>
                                    <GroupIcon />
                                </Fab>
                            </Tooltip>
                        </Box>
                    </Grid>
                       
                     {/* show tables */}
                    <Grid item xs={11}>
                        {showListOfRequestTable && <AdminListofRequest/>}
                        {showListOfUserTable && <AdminListofUser/>}
                    </Grid>
                </Grid>
          )
    }
    else{
		history.push('/')
    	return(<h2>Home</h2>)
	}
  
}
export default Admin;