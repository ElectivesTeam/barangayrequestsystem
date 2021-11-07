import React from 'react'
import Button  from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import BailBondForm from '../submittedforms/BailBondForm';
import BarangayClearanceForm from '../submittedforms/BarangayClearanceForm';
import BuildingClearance from '../submittedforms/BuildingClearance';
import BusinessClearanceForm from '../submittedforms/BusinessClearanceForm';
import BusinessClosure from '../submittedforms/BusinessClosure';
import Cedula from '../submittedforms/Cedula';
import ComelecForm from '../submittedforms/ComelecForm';
import ConstituentIdForm from '../submittedforms/ConstituentIdForm';
import DentalServiceForm from '../submittedforms/DentalServiceForm';
import GuardianshipForm from '../submittedforms/GuardianshipForm';
import ImmunizationForm from '../submittedforms/ImmunizationForm';
import IndigencyClearance from '../submittedforms/IndigencyClearance';
import MaternalCareForm from '../submittedforms/MaternalCareForm';
import ResidencyForm from '../submittedforms/ResidencyForm';
import VoucherForm from '../submittedforms/VoucherForm';

import FormHeader from '../forms/components/FormHeader';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
    button: {
        width: '10%',
        height: '10%',   
        left: '77%',
    },
    buttondiv: {
        paddingTop: '15px',
        paddingBottom: '15px'
    }
}));

const ReviewRequest = ({ handleBack, selectedRequest }) => {
    const classes = useStyles();
    const bailbondform = selectedRequest.indexOf('bailbondform')
    const barangayclearanceform = selectedRequest.indexOf('barangayclearanceform')
    const buildingclearance = selectedRequest.indexOf('buildingclearance')
    const businessclearance = selectedRequest.indexOf('businessclearance')
    const businessclosure = selectedRequest.indexOf('businessclosure')
    const cedula = selectedRequest.indexOf('cedula')
    const comelecform = selectedRequest.indexOf('comelecform')
    const constituentidform = selectedRequest.indexOf('constituentidform')
    const dentalserviceform = selectedRequest.indexOf('dentalserviceform')
    const guardianshipform = selectedRequest.indexOf('guardianshipform')
    const immunizationform = selectedRequest.indexOf('immunizationform')
    const indigencyclearance = selectedRequest.indexOf('indigencyclearance')
    const maternalcareform = selectedRequest.indexOf('maternalcareform')
    const residencyform = selectedRequest.indexOf('residencyform')
    const voucherform = selectedRequest.indexOf('voucherform')

    
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const handleSubmit = () => {
        setOpen(true);
        history.push('/')
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <FormHeader formTitle={'Review Request'}/>
                {cedula !== -1 && <Cedula/>}
                {buildingclearance !== -1 && <BuildingClearance/>}
                {businessclearance !== -1 && <BusinessClearanceForm/>}
                {constituentidform !== -1 && <ConstituentIdForm/>}
                {residencyform !== -1 && <ResidencyForm/>}
                {barangayclearanceform !== -1 && <BarangayClearanceForm/>}
                {comelecform !== -1 && <ComelecForm/>}
                {businessclosure !== -1 && <BusinessClosure/>}
                {bailbondform !== -1 && <BailBondForm/>}
                {guardianshipform !== -1 && <GuardianshipForm/>}
                {indigencyclearance !== -1 && <IndigencyClearance/>}
                {voucherform !== -1 && <VoucherForm/>}
                {immunizationform !== -1 && <ImmunizationForm/>}
                {dentalserviceform !== -1 && <DentalServiceForm/>}
                {maternalcareform !== -1 && <MaternalCareForm/>}
                
                

                <div className={classes.buttondiv}>
                    <Stack spacing={1} direction="row">
                        <Button

                            variant="contained"
                            onClick={handleBack}
                            color="primary"
                            className={classes.button}
                        >
                            Edit
                        </Button> 
                        
                        <Button
                            variant="contained"
                            onClick={handleOpen}
                            color="primary"
                            className={classes.button}
                        >
                            Submit
                        </Button>
                    </Stack>
                </div>

            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Notice"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    We'll notify you in your email for further instruction
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleSubmit} autoFocus>
                    Ok
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ReviewRequest
