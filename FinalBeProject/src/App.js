import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from "./Components/login.component";
import Upload from "./Components/upload/upload";
import Home from "./Screens/LandingPage/LandingPage";
// import Process from "./Components/Purpose/Purpose";

function App() {
    return (

        <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < LandingPage / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        />  <
        Route path = "/upload"
        element = { < Upload / > }
        />  <
        Route path = "/Home"
        element = { < Home / > }
        />  

        <
        /
        Routes > <
        /Router>
    );
}

export default App;