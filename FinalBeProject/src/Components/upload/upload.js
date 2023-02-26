import axios from 'axios';
// import handLung from "C:\Users\sejal\Downloads\aa\src\Assests\images\hand-with-lungs-cutout.png";
import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import './upload.css';

class Upload extends Component {

    state = {

        // Initially, no file is selected
        selectedFile: null
    };

    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return ( <
                div className = 'fileDetails' >
                <
                h2 > < span > File Details: < /span>  < /
                h2 > <

                p > < span > File Name: < /span> { this.state.selectedFile.name } < /p >

                <
                p > < span > File Type: < /span> { this.state.selectedFile.type } < /p >

                <
                p >
                <
                span > Last Modified: < /span> { " " } { this.state.selectedFile.lastModifiedDate.toDateString() } < /
                p >

                <
                /div>
            );
        } else {
            return ( <
                div >
                <
                br / >
                <
                h4 > Choose before Pressing the Upload button < /h4> < /
                div >
            );
        }
    };

    render() {

        return ( < div className = 'MainUpload' >
            <
            header className = "nav-header" >
            <
            Navbar collapseOnSelect expand = "lg"
            className = "navbar" >
            <
            Container > {
                /* <
                        img src = { 'Lungs' }
                        width = "50"
                        height = "50"
                        className = "d-inline align-left"
                        alt = "LungTech logo" / > */
            } <
            span className = "nav-tag" > LungTech < /span> <
            Nav className = "d-flex" >
            <
            a href = "/Home" > < span className = "nav-tag" > Home < /span></a >
            <
            a href = "/Home" > < span className = "nav-tag" > How it 's done</span></a> <
            a href = "/Home" > < span className = "nav-tag" > Team < /span></a >

            <
            /Nav> < /
            Container > < /
            Navbar > <
            /header > <
            h2 > Detect The Lung Cancer with < span > LungTech < /span> < /
            h2 > <
            p > We provide you the best result
            for detecting lung cancer in an instant.We act as a helping hand intended to reduce time
            for checkup before performing the further surgical steps. < /p> <
            div className = 'uploadDiv' >
            <
            h1 > LungTech < /h1> <
            h3 > Upload Your CT scan Image here.. < /h3>  <
            div >
            <
            input type = "file"
            onChange = { this.onFileChange }
            /> <
            button onClick = { this.onFileUpload } > Upload! < /button> < /
            div > { this.fileData() }

            <
            /div>  < /
            div >
        );
    }
}

export default Upload;