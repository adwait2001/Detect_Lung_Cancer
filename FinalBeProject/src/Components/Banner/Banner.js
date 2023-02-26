import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Banner.css";
import Button from "react-bootstrap/esm/Button";
import handLung from "../../Assets/images/hand-with-lungs-cutout.png";

const Banner = () => {
    return ( <
        div className = "display-banner" >
        <
        Container >
        <
        Row >
        <
        Col className = "first-intro" >
        <
        h1 > Virtual Lung Cancer detection
        for you < /h1> <
        br / >
        <
        p className = "desc" >
        Trafalgar provides progressive, and affordable healthcare,
        accessible on mobile and online
        for everyone <
        /p> <
        br / >
        <
        br / >
        <
        Button className = "detect-now" >
        <
        a href = "/Upload"
        className = "text-center text-decoration-none" > Detect Now < /a>  </Button >
        <
        /Col> <
        Col md = {
            { span: 3, offset: 3 }
        }
        className = "second-pic" >
        <
        img src = { handLung }
        width = "500"
        height = "500"
        className = "d-inline align-left"
        alt = "LungTech logo" /
        >
        <
        /Col> < /
        Row > <
        /Container> < /
        div >
    );
};

export default Banner;