import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'; 
// import { Link } from 'react-router-dom';


const Navigation = (props) => {
    const navStyle = {
        color: 'white',
        // font-size: "20px"; 
        // color: "#4a54f1";
        // text-align: "center";
        // padding-top:"100px";
    };
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand><Link style={navStyle} to='/'>Tigary C.C.</Link></Navbar.Brand>
    <ul>
     <li><h4>Welcome: {props.name}</h4></li>
     <li><h4>Email: {props.email}</h4></li>
    </ul>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="events">
                    Events
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
};

export default Navigation;

// <Link style={navStyle} to='/'>
//     <h3>Tigary C.C.</h3>
// </Link>
// <ul>
//     <li><h4>Welcome: {props.name}</h4></li>
//     <li><h4>Email: {props.email}</h4></li>
// </ul>
// <img src={props.url} alt={props.name} /> 
// <ul className="nav_links">
//     <Link style={navStyle} to='/signin'>
//         <li>Login</li>
//     </Link>
//     <Link style={navStyle} to='/events'>
//         <li>Events</li>
//     </Link>
// </ul>