import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './navigation/Home';
import Login from './navigation/Login';
import Register from './navigation/Register';
import MenuAppBar from './components/navbar';


function App() {
  return (
    <Router>
      <div>
      <MenuAppBar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
