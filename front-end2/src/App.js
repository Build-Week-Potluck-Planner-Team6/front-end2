import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Background from './images/pexels-pixabay-326279.jpg'

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import Guest from './components/Guest'
import Logout from './components/Logout';


const StyledApp = styled.div`
background-image: url(${Background});
background-repeat: no-repeat;
background-position: fixed;
background-size: auto;
height: 100%;
.App{
  padding:2%;
}
`

function App() {
  return (
    <StyledApp>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/recipes/:id" component={Recipe}/>
        <Route path="/recipes" component={Recipes}/>
        <Route path="/guest" component={Guest}/>
      </Switch>
      <Footer/>
    </div>
    </StyledApp>
  );
}

export default App;
