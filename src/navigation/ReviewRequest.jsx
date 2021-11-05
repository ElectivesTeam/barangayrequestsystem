import React from 'react'
import Button  from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useHistory } from "react-router-dom";

import Cedula from '../submittedforms/Cedula';
import BuildingClearance from '../submittedforms/BuildingClearance';
import ConstituentIdForm from '../submittedforms/ConstituentIdForm';
import ResidencyForm from '../submittedforms/BuildingClearance';
import BarangayClearanceForm from '../submittedforms/BarangayClearanceForm';
import ComelecForm from '../submittedforms/ComelecForm';
import BusinessClosure from '../submittedforms/BusinessClosure';
import BailBondForm from '../submittedforms/BailBondForm';
import GuardianshipForm from '../submittedforms/GuardianshipForm';
import IndigencyClearance from '../submittedforms/IndigencyClearance';
import VoucherForm from '../submittedforms/VoucherForm';
import ImmunizationForm from '../submittedforms/ImmunizationForm';
import DentalServiceForm from '../submittedforms/DentalServiceForm';
import MaternalCareForm from '../submittedforms/MaternalCareForm';
import FormHeader from '../forms/components/FormHeader';

const ReviewRequest = ({ handleBack, selectedRequest }) => {
    const cedula = selectedRequest.indexOf('cedula')
    const buildingclearance = selectedRequest.indexOf('buildingclearance')
    const constituentidform = selectedRequest.indexOf('constituentidform')
    const residencyform = selectedRequest.indexOf('residencyform')
    const barangayclearanceform = selectedRequest.indexOf('barangayclearanceform')
    const comelecform = selectedRequest.indexOf('comelecform')
    const businessclosure = selectedRequest.indexOf('businessclosure')
    const bailbondform = selectedRequest.indexOf('bailbondform')
    const guardianshipform = selectedRequest.indexOf('guardianshipform')
    const indigencyclearance = selectedRequest.indexOf('indigencyclearance')
    const voucherform = selectedRequest.indexOf('voucherform')
    const immunizationform = selectedRequest.indexOf('immunizationform')
    const dentalserviceform = selectedRequest.indexOf('dentalserviceform')
    const maternalcareform = selectedRequest.indexOf('maternalcareform')
    
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const handleSubmit = () => {
        history.push('/')
    }
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <FormHeader formTitle={'Review Request'}/>
            {cedula !== -1 && <Cedula/>}
            {buildingclearance !== -1 && <BuildingClearance/>}
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

            <Button
                variant="contained"
                onClick={handleBack}
                sx={{ mt: 3, ml: 1 }}
                
            >
                Back
            </Button> 
            <Button
                variant="contained"
                onClick={handleOpen}
                sx={{ mt: 3, ml: 1 }}
                
            >
                Submit
            </Button>

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
