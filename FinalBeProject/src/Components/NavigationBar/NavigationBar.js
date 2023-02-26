import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Lungs from "../../Assets/images/Lungs.png";
// import Login from "../../Components/login.component"
import Button from "react-bootstrap/Button"
import './NavigationBar.css'
// import { Button } from "react-bootstrap/lib/inputgroup";

const NavigationBar = () => {
    return ( <
        header className = "nav-header" >
        <
        Navbar collapseOnSelect expand = "lg"
        className = "navbar" >
        <
        Container >

        <
        Navbar.Brand href = "#home"
        className = "align-left" >
        <
        img src = { Lungs }
        width = "50"
        height = "50"
        className = "d-inline align-left"
        alt = "LungTech logo" /
        >
        <
        span className = "nav-tag" > LungTech < /span>

        <
        /Navbar.Brand> <
        Nav className = "d-flex" >
        <
        Nav.Link href = "#home" > < span className = "nav-tag" > Home < /span></Nav.Link >
        <
        Nav.Link href = "#process" > < span className = "nav-tag" > How it 's done</span></Nav.Link> <
        Nav.Link href = "#team" > < span className = "nav-tag" > Team < /span></Nav.Link >

        <
        span className = "nav-tag" > < Button className = "button" >
        <
        a href = "/Login"
        className = "text-center text-decoration-none" > Try Now <
        /a> < /Button > < /span > 


        <
        /Nav> < /
        Container > <
        /Navbar> < /
        header >
    );
};

export default NavigationBar;