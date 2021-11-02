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

const ListOfRequest = ({ selectedRequest }) => {
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

    return (
        <>
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
        </>
    )
}

export default ListOfRequest
