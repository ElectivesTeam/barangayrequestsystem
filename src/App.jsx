import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Home from './navigation/Home';
import Login from './navigation/Login';
import Requests from './navigation/Requests';
import Register from './navigation/Register/Register';
import Register2nd from './navigation/Register/Register2nd';
import MenuAppBar from './components/navbar';
import MyAccount from './navigation/Myaccount';

const theme = createMuiTheme({
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
          <Route exact path="/requests" component={Requests}></Route>
          <Route exact path="/register2nd" component={Register2nd}></Route>
          <Route exact path="/myaccount" component={MyAccount}></Route>
        </Switch>
      </div>
    </ThemeProvider> 
    </Router>
  );
}

export default App;
