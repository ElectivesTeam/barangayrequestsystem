import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@mui/material/Divider';

//table
import Approved from '../table/requests/Approved';
import Pending from '../table/requests/Pending';
import Rejected from '../table/requests/Rejected';
import Released from '../table/requests/Released';
import AdminListofUser from '../table/AdminListofUser';
import AdminHome from '../table/AdminHome';

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

    const [showListOfUserTable, setShowListOfUserTable] = useState(false)
    const [showApproved, setShowApproved] = useState(false)
    const [showRejected, setShowRejected] = useState(false)
    const [showPending, setShowPending] = useState(false)
    const [showReleased, setShowReleased] = useState(false)
    const [showHome, setShowHome] = useState(true)

    const onClick = button => {
        setShowListOfUserTable(false)
        setShowApproved(false)
        setShowRejected(false)
        setShowPending(false)
        setShowReleased(false)
        setShowHome(false)

        switch (button){
            case "home":
                setShowHome(true)
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
                setShowHome(true)
        }
        console.log(button)
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
  return (
    <>
        <Grid container>
            <Grid item xs={1}>
                <Box sx={{ '& > :not(style)': { m: 1 } }} className={classes.floatingButtonContainer}>
                    <Tooltip title="Home">

                        <Fab aria-label="add" onClick={() => onClick("home")} color={showHome ? "primary" : "default"}>
                            <HomeIcon />
                        </Fab>
                    </Tooltip>
                    <Divider />

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

                
                    <Tooltip title="User">
                        <Fab aria-label="add" onClick={() => onClick("user")} color="primary" color={showListOfUserTable ? "primary" : "default"}>
                            <GroupIcon />
                        </Fab>
                    </Tooltip>
                </Box>
            </Grid>
               
             {/* show tables */}
            <Grid item xs={11}>
                {showApproved && <Approved/>}
                {showRejected && <Rejected/>}
                {showPending && <Pending/>}
                {showReleased && <Released/>}
                {showListOfUserTable && <AdminListofUser/>}
                {showHome && <AdminHome/>}
            </Grid>
        </Grid>
    </>
  );
}

export default Admin;