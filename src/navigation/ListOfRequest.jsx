import React from 'react'

//forms to be imported
import Cedula from '../forms/Cedula';
import BuildingClearance from '../forms/BuildingClearance';
import ConstituentIdForm from '../forms/ConstituentIdForm';
import ResidencyForm from '../forms/BuildingClearance';
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

const ListOfRequest = ({ selectedRequest }) => {
    const submittedRequest = selectedRequest;
    const getRequest= (i) => {
        return selectedRequest[i]
    }

    const [activeForm, setActiveForm] = React.useState(0);

    const handleNext = () => {
        if(activeForm === selectedRequest.length - 1){
            setActiveForm(activeForm + 1);
        }else{
            setActiveForm(activeForm + 1);
            console.log(activeForm)
        }
    };

    const handleBack = () => {
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
                return <Cedula activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "businessclearance":
                return <BusinessClearanceForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "buildingclearance" : 
                return <BuildingClearance activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "constituentidform" : 
                return <ConstituentIdForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "residencyform" : 
                return <ResidencyForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "barangayclearanceform" : 
                return <BarangayClearanceForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "comelecform": 
                return <ComelecForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "businessclosure" : 
                return <BusinessClosure activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "bailbondform" : 
                return <BailBondForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "guardianshipform" : 
                return <GuardianshipForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "indigencyclearance" : 
                return <IndigencyClearance activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "voucherform" : 
                return <VoucherForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "immunizationform" : 
                return <ImmunizationForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "dentalserviceform" : 
                return <DentalServiceForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "maternalcareform" : 
                return <MaternalCareForm activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            default: return <ReviewRequest handleBack={handleBack} selectedRequest={submittedRequest}/>
        }
    }   

    return <> {renderRequest(getRequest(activeForm))} </>
    
}

export default ListOfRequest
