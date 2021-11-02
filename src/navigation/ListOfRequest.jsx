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
import BusinessClearanceForm from '../forms/BusinessClearanceForm';
import ImmunizationForm from '../forms/ImmunizationForm';
import DentalServiceForm from '../forms/DentalServiceForm';
import MaternalCareForm from '../forms/MaternalCareForm';

const ListOfRequest = () => {
    return (
        <>
            {/* sample data */}
            <Cedula />
            <BuildingClearance/>
            <ConstituentIdForm/>
        </>
        
    )
}

export default ListOfRequest
