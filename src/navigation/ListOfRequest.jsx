import React, {useState, useEffect} from 'react'

//forms to be imported
import Cedula from '../forms/Cedula';
import BuildingClearance from '../forms/BuildingClearance';
import ConstituentIdForm from '../forms/ConstituentIdForm';
import ResidencyForm from '../forms/ResidencyForm';
import BarangayClearanceForm from '../forms/BarangayClearanceForm';
import ComelecForm from '../forms/ComelecForm';
import BusinessClosure from '../forms/BusinessClosure';
import BailBondForm from '../forms/BailBondForm';
import GuardianshipForm from '../forms/GuardianshipForm';
import IndigencyClearance from '../forms/IndigencyClearance';
import VoucherForm from '../forms/VoucherForm';
import ImmunizationForm from '../forms/ImmunizationForm';
import DentalServiceForm from '../forms/DentalServiceForm';
import MaternalCareForm from '../forms/MaternalCareForm';
import BusinessClearanceForm from '../forms/BusinessClearanceForm';
import ReviewRequest from './ReviewRequest';

const ListOfRequest = ({ selectedRequest, apiFormsData, handleAPIFormsDataChange, handleNextStepper, handleBackStepper }) => {
    const submittedRequest = selectedRequest;
    const getRequest= (i) => {
        return selectedRequest[i]
    }
    const [activeForm, setActiveForm] = useState(0);
    const handleNext = () => {
        
        if(activeForm === selectedRequest.length - 1){
            setActiveForm(activeForm + 1);
            handleNextStepper();
        }else{
            setActiveForm(activeForm + 1);
            console.log(activeForm)
        }
    };

    const handleBack = () => {
        handleBackStepper();
        if(activeForm == selectedRequest.length){
            setActiveForm(0)
            
        }else{
            setActiveForm(activeForm - 1);
        }
        console.log(activeForm)
    };


    const renderRequest = (i) => {
        switch(i) {
            case "cedula" : 
                return <Cedula activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} cedula={apiFormsData.cedulaData}/>
            case "businessclearance":
                return <BusinessClearanceForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} businessClearance={apiFormsData.businessClearanceData}/>
            case "buildingclearance" : 
                return <BuildingClearance activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} buildingClearance={apiFormsData.buildingClearanceData} />
            case "constituentidform" : 
                return <ConstituentIdForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} constituentId={apiFormsData.constituentIdData}/>
            case "residencyform" : 
                return <ResidencyForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} residency={apiFormsData.residenceData}/>
            case "barangayclearanceform" : 
                return <BarangayClearanceForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} barangayClearance = {apiFormsData.barangayClearanceData}/>
            case "comelecform": 
                return <ComelecForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} comelec={apiFormsData.comelecData}/>
            case "businessclosure" : 
                return <BusinessClosure activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} businessClosure={apiFormsData.businessClosureData}/>
            case "bailbondform" : 
                return <BailBondForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} bailBond={apiFormsData.bailBondData}/>
            case "guardianshipform" : 
                return <GuardianshipForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} guardianship={apiFormsData.guardianshipData}/>
            case "indigencyclearance" : 
                return <IndigencyClearance activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} indigencyClearance={apiFormsData.indigencyClearanceData}/>
            case "voucherform" : 
                return <VoucherForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} voucher={apiFormsData.voucherData}/>
            case "immunizationform" : 
                return <ImmunizationForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} immunization={apiFormsData.immunizationData}/>
            case "dentalserviceform" : 
                return <DentalServiceForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} dentalService={apiFormsData.dentalServiceData}/>
            case "maternalcareform" : 
                return <MaternalCareForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext} handleChange={handleAPIFormsDataChange} maternalCare={apiFormsData.maternalCareData}/>
            default: return <ReviewRequest handleBack={handleBack} selectedRequest={submittedRequest} apiFormsData ={apiFormsData} handleChange={handleAPIFormsDataChange}/>
        }
    }   


    return <> {renderRequest(getRequest(activeForm))} </>
    
}

export default ListOfRequest
