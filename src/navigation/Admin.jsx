import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@mui/material/Divider';

import AuthService from "../services/auth.service"

//table
import Approved from '../table/requests/Approved';
import Pending from '../table/requests/Pending';
import Rejected from '../table/requests/Rejected';
import Released from '../table/requests/Released';
import General from '../table/requests/General';
import AdminListofUser from '../table/AdminListofUser';

import CheckIcon from '@mui/icons-material/Check';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

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

    const [showListOfUserTable, setShowListOfUserTable] = useState(true)
    const [showGeneral, setShowGeneral] = useState(false)
    const [showApproved, setShowApproved] = useState(false)
    const [showRejected, setShowRejected] = useState(false)
    const [showPending, setShowPending] = useState(false)
    const [showReleased, setShowReleased] = useState(false)

    const onClick = button => {
        setShowListOfUserTable(false)
        setShowGeneral(false)
        setShowApproved(false)
        setShowRejected(false)
        setShowPending(false)
        setShowReleased(false)

        switch (button){
            case "general":
                setShowGeneral(true)
                break;
            case "approved":
                setShowApproved(true)
                break;
            case "rejected":
                setShowRejected(true)
                break;
            case "pending":
                setShowPending(true)
                break;
            case "released":
                setShowReleased(true)
                break;
            case "user":
                setShowListOfUserTable(true)
                break;
            default:
                setShowListOfUserTable(true)
        }
    }

    
    // const handleHome = () => {
    //     setShowHome(true)
    //     setShowListOfRequestTable(false)
    //     setShowListOfUserTable(false)
    // }
    
    // const handleRequest = () => {
    //     setShowHome(false)
    //     setShowListOfRequestTable(true)
    //     setShowListOfUserTable(false)
    // }

    // const handleUser = () => {
    //     setShowHome(false)
    //     setShowListOfRequestTable(false)
    //     setShowListOfUserTable(true)
    // }

    if (AuthService.getCurrentUser()) {
        return (
            <Grid container>
                <Grid item xs={1}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }} className={classes.floatingButtonContainer}>
                        <Tooltip title="User">
                            <Fab aria-label="add" onClick={() => onClick("user")} color={showListOfUserTable ? "primary" : "default"}>
                                <GroupIcon />
                            </Fab>
                        </Tooltip>
                        <Divider />

                        <Tooltip title="General">

                            <Fab aria-label="add" onClick={() => onClick("general")} color={showGeneral ? "primary" : "default"}>
                                <AllInboxIcon />
                            </Fab>
                        </Tooltip>

                        <Tooltip title="Approved">

                            <Fab aria-label="add" onClick={() => onClick("approved")} color={showApproved ? "primary" : "default"}>
                                <CheckIcon />
                            </Fab>
                        </Tooltip>

                        <Tooltip title="Rejected">

                            <Fab aria-label="add" onClick={() => onClick("rejected")} color={showRejected ? "primary" : "default"}>
                                <CloseOutlinedIcon />
                            </Fab>
                        </Tooltip>

                        <Tooltip title="Pending">

                            <Fab aria-label="add" onClick={() => onClick("pending")} color={showPending ? "primary" : "default"}>
                                <AssignmentLateOutlinedIcon />
                            </Fab>
                        </Tooltip>

                        <Tooltip title="Released">

                            <Fab aria-label="add" onClick={() => onClick("released")} color={showReleased ? "primary" : "default"}>
                                <ReceiptLongIcon />
                            </Fab>
                        </Tooltip>
                        <Divider />

                    
                        
                    </Box>
                </Grid>
                
                {/* show tables */}
                <Grid item xs={11}>
                    {showGeneral && <General/>}
                    {showApproved && <Approved/>}
                    {showRejected && <Rejected/>}
                    {showPending && <Pending/>}
                    {showReleased && <Released/>}
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