import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Home from './navigation/Home';
import Login from './navigation/Login';
import Register from './navigation/Register';
import MenuAppBar from './components/navbar';

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
        </Switch>
      </div>
    </ThemeProvider> 
    </Router>
  );
}

export default App;
