import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Home from './navigation/Home';
import Login from './navigation/Login';
import Register from './navigation/Register';
import MenuAppBar from './components/navbar';
import MyAccount from './navigation/Myaccount';
import ReviewRequest from './navigation/ReviewRequest'
import HorizontalLinearStepper from './components/Stepper'
import StickyFooter from "./components/Footer";
import MyRequests from './navigation/MyRequests'
import Admin from './navigation/Admin'

//to remove
import Cedula from './forms/Cedula';
import BuildingClearance from './forms/BuildingClearance';
import ConstituentIdForm from './forms/ConstituentIdForm';
import ResidencyForm from './forms/BuildingClearance';
import BarangayClearanceForm from './forms/BarangayClearanceForm';
import ComelecForm from './forms/ComelecForm';
import BusinessClosure from './forms/BusinessClosure';
import BailBondForm from './forms/BailBondForm';
import GuardianshipForm from './forms/GuardianshipForm';
import IndigencyClearance from './forms/IndigencyClearance';
import VoucherForm from './forms/VoucherForm';
import BusinessClearanceForm from './forms/BusinessClearanceForm';
import ImmunizationForm from './forms/ImmunizationForm';
import DentalServiceForm from './forms/DentalServiceForm';
import MaternalCareForm from './forms/MaternalCareForm';

const theme = createTheme({
  typography: {
    fontFamily: [
      "'Montserrat', sans-serif",
    ].join(','),
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <MenuAppBar/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/requests" component={HorizontalLinearStepper}></Route>
            <Route exact path="/myaccount" component={MyAccount}></Route>
            <Route exact path="/reviewrequest" component={ReviewRequest}></Route>
            <Route exact path="/myrequests" component={MyRequests}></Route>
            <Route exact path="/admin" component={Admin}></Route>

            <Route exact path="/requests/cedula" component={Cedula}></Route>
            <Route exact path="/requests/buildingclearance" component={BuildingClearance}></Route>
            <Route exact path="/requests/constituentidform" component={ConstituentIdForm}></Route>
            <Route exact path="/requests/residencyform" component={ResidencyForm}></Route>
            <Route exact path="/requests/barangayclearanceform" component={BarangayClearanceForm}></Route>
            <Route exact path="/requests/comelecform" component={ComelecForm}></Route>
            <Route exact path="/requests/businessclosure" component={BusinessClosure}></Route>
            <Route exact path="/requests/bailbondform" component={BailBondForm}></Route>
            <Route exact path="/requests/guardianshipform" component={GuardianshipForm}></Route>
            <Route exact path="/requests/indigencyclearance" component={IndigencyClearance}></Route>
            <Route exact path="/requests/voucherform" component={VoucherForm}></Route>
            <Route exact path="/requests/businessclearance" component={BusinessClearanceForm}></Route>
            <Route exact path="/requests/immunizationform" component={ImmunizationForm}></Route>
            <Route exact path="/requests/dentalserviceform" component={DentalServiceForm}></Route>
            <Route exact path="/requests/maternalcareform" component={MaternalCareForm}></Route>
          </Switch>
        </div>
        <StickyFooter/>
      </ThemeProvider> 
    </Router>
  );
}

export default App;
