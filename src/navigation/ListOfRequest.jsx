import React from 'react'
import { useHistory } from 'react-router-dom';

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

import ReviewRequest from './ReviewRequest';
import Button  from '@material-ui/core/Button';


const ListOfRequest = ({ selectedRequest }) => {


    const getRequest= (i) => {
        return selectedRequest[i]
    }

    const renderRequest = (i) => {
        switch(i) {
            case "cedula" : return <Cedula activeForm={activeForm} handleBack={handleBack} handleNext={handleNext}/>
            case "buildingclearance" : return <BuildingClearance/>
            case "constituentidform" : return <ConstituentIdForm/>
            case "residencyform" : return <ResidencyForm/>
            case "barangayclearanceform" : return <BarangayClearanceForm/>
            case "comelecform": return <ComelecForm/>
            case "businessclosure" : return <BusinessClosure/>
            case "bailbondform" : return <BailBondForm />
            case "guardianshipform" : return <GuardianshipForm/>
            case "indigencyclearance" : return <IndigencyClearance/>
            case "voucherform" : return <VoucherForm/>
            case "immunizationform" : return <ImmunizationForm/>
            case "dentalserviceform" : return <DentalServiceForm/>
            case "maternalcareform" : return <MaternalCareForm/>
            default: throw new Error('Unknown Form');
        }
    }   

    const [requestSubmitted, setRequestSubmitted] = React.useState(false)
    const [activeForm, setActiveForm] = React.useState(0);

    const handleNext = () => {
        setActiveForm(activeForm + 1);
        console.log(activeForm)
    };

    const handleBack = () => {
        setRequestSubmitted(false)
        if(activeForm === selectedRequest.length){
            setActiveForm(0)
            
        }else{
            setActiveForm(activeForm - 1);
        }
        console.log(activeForm)
    };

    const handleSubmit = () => {
        setActiveForm(activeForm + 1);
        setRequestSubmitted(true)
        console.log(activeForm)
    };

    return (
        requestSubmitted ? <ReviewRequest handleBack={handleBack}/> : 
        (
            <>
                {renderRequest(getRequest(activeForm))}
                {activeForm !== 0 &&
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                    </Button>
                }

                {activeForm === selectedRequest.length - 1 ? 
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ mt: 3, ml: 1 }}
                    >
                        Submit
                    </Button> :
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                    >
                        Next
                    </Button>
                }
            </>
            
        )
    )
}

export default ListOfRequest
