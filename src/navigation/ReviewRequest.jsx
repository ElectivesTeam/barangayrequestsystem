import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button  from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Stack from '@mui/material/Stack';

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

import formService from '../services/form.service';
import AuthService from "../services/auth.service";

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

const ReviewRequest = ({ handleBack, selectedRequest, apiFormsData }) => {
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

    const[residentNumber, setResidentNumber] = useState(null)
    const[disabled, setDisabled] = useState(false)
    const [open, setOpen] = React.useState(false);

    const history = useHistory();
    const handleSubmit = () => {
        setOpen(true);
        history.push('/')
        window.location.reload(false);
    }

    useEffect(async() => {
      
        await AuthService.getUserInformation()
        .then((response) => {
            if (response !== undefined) {
                setResidentNumber(response.data.resident_number)
            }
        }
    )
    }, [])

    const handleOpen = () => {
        //to prevent multiple clicks/post
        setDisabled(true);

        // Bail Bond
        if (bailbondform >= 0) {
            formService.bailBond(residentNumber, apiFormsData.bailBondData.caseNumber)
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('bailbondform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('bailbondform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }
        
        // Barangay Clearance
        if (barangayclearanceform >= 0) {
            formService.barangayClearance(residentNumber, apiFormsData.bailBondData.purpose)
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('barangayclearanceform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('barangayclearanceform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Building Clearance
        if (buildingclearance >= 0) {
            formService.buildingClearance(residentNumber, apiFormsData.buildingClearanceData.type)
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('buildingclearance success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('buildingclearance error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Business Clearance
        if (businessclearance >= 0) {
            formService.businessClearance(
                residentNumber, 
                apiFormsData.businessClearanceData.businessName, 
                apiFormsData.businessClearanceData.businessOwner, 
                apiFormsData.businessClearanceData.businessAddress, 
                apiFormsData.businessClearanceData.businessNature, 
                apiFormsData.businessClearanceData.start_business_operated
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('businessclearance success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('businessclearance error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Business Closure
        if (businessclosure >= 0) {
            formService.businessClosure(
                residentNumber, 
                apiFormsData.businessClosureData.businessName, 
                apiFormsData.businessClosureData.businessOwner, 
                apiFormsData.businessClosureData.businessAddress, 
                apiFormsData.businessClosureData.businessNature, 
                apiFormsData.businessClosureData.dateReceived
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('businessclosure success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('businessclosure error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Cedula 
        if (cedula >= 0) {
            formService.cedula(
                residentNumber, 
                apiFormsData.cedulaData.birthplace, 
                apiFormsData.cedulaData.profession, 
                apiFormsData.cedulaData.monthlyIncome
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('cedula success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('cedula error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Comelec
        if (comelecform >= 0) {
            formService.comelec(residentNumber)
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('comelecform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('comelecform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Constituent ID
        if (constituentidform >= 0) {
            formService.constituent(
                residentNumber, 
                apiFormsData.constituentIdData.id_number, 
                apiFormsData.constituentIdData.dateReceived
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('constituentidform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('constituentidform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Dental Service
        if (dentalserviceform >= 0) {
            formService.dentalService(residentNumber)
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('dentalserviceform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('dentalserviceform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Guardianship
        if (guardianshipform >= 0) {
            formService.guardianship(
                residentNumber,
                apiFormsData.guardianshipData.guardian
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('guardianshipform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('guardianshipform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Immunization
        if (immunizationform >= 0) {
            formService.immunization(
                residentNumber,
                apiFormsData.immunizationData.mother_name, 
                apiFormsData.immunizationData.father_name, 
                parseFloat(apiFormsData.immunizationData.birth_height), 
                apiFormsData.immunizationData.birth_weight
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('immunizationform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('immunizationform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Indigency Clearance
        if (indigencyclearance >= 0) {
            formService.indigencyClearance(
                residentNumber,
                apiFormsData.indigencyClearanceData.patient_relationship, 
                apiFormsData.indigencyClearanceData.patient_name, 
                apiFormsData.indigencyClearanceData.purpose , 
                apiFormsData.indigencyClearanceData.passed_onto_whom
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('indigencyclearance success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('indigencyclearance error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Maternal Care
        if (maternalcareform >= 0) {
            formService.maternalCare(
                residentNumber,
                apiFormsData.maternalCareData.child_name, 
                apiFormsData.maternalCareData.date_of_birth, 
                apiFormsData.maternalCareData.birthplace
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('maternalcareform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('maternalcareform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            }
            )
        }

        // Residency
        if (residencyform >= 0) {
            formService.residency(residentNumber, )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('residencyform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('residencyform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            })
        }

        // Voucher
        if (voucherform >= 0) {
            formService.voucher(
                residentNumber, 
                apiFormsData.voucherData.studentName, 
                apiFormsData.voucherData.parentName, 
                apiFormsData.voucherData.school, 
                apiFormsData.voucherData.grade
                )
            .then((response) => {
                if (response !== undefined){
                    setOpen(true)
                    console.log('voucherform success')
                }
            })
            .catch(error => {
                if (error.response != undefined){
                if (error.response.status === 400) {
                    console.log('voucherform error')
                }
                    else console.log("Something went wrong. Please try again later.");
                }
            })
        }

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <FormHeader formTitle={'Review Request'}/>
                {cedula !== -1 && <Cedula reviewCedula = {apiFormsData.cedulaData}/>}
                {buildingclearance !== -1 && <BuildingClearance reviewBuildingClearance = {apiFormsData.buildingClearanceData}/>}
                {businessclearance !== -1 && <BusinessClearanceForm reviewBusinessClearance = {apiFormsData.businessClearanceData}/>}
                {constituentidform !== -1 && <ConstituentIdForm reviewConstituentId = {apiFormsData.constituentIdData}/>}
                {residencyform !== -1 && <ResidencyForm reviewResidency = {apiFormsData.residenceData}/>}
                {barangayclearanceform !== -1 && <BarangayClearanceForm reviewBarangayClearance = {apiFormsData.barangayClearanceData}/>}
                {comelecform !== -1 && <ComelecForm reviewComelec = {apiFormsData.comelecData}/>}
                {businessclosure !== -1 && <BusinessClosure reviewBusinessClosure = {apiFormsData.businessClosureData}/>}
                {bailbondform !== -1 && <BailBondForm reviewBailBond = {apiFormsData.bailBondData}/>}
                {guardianshipform !== -1 && <GuardianshipForm reviewGuardianship = {apiFormsData.guardianshipData}/>}
                {indigencyclearance !== -1 && <IndigencyClearance reviewIndigencyClearance = {apiFormsData.indigencyClearanceData}/>}
                {voucherform !== -1 && <VoucherForm reviewVoucher = {apiFormsData.voucherData}/>}
                {immunizationform !== -1 && <ImmunizationForm reviewImmunization = {apiFormsData.immunizationData}/>}
                {dentalserviceform !== -1 && <DentalServiceForm reviewDentalService = {apiFormsData.dentalServiceData}/>}
                {maternalcareform !== -1 && <MaternalCareForm reviewMaternalCare = {apiFormsData.maternalCareData}/>}
                
                

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
                            disabled={disabled}
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
