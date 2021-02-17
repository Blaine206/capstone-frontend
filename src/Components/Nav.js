import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Nav = (props) => {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            
            <Link style={navStyle} to='/'>
                <h3>Tigary C.C.</h3>
            </Link>
            <ul>
                <li><h4>Welcome: {props.name}</h4></li>
                <li><h4>Email: {props.email}</h4></li>
            </ul>
            <img src={props.url} alt={props.name} /> 
            <ul className="nav_links">
                <Link style={navStyle} to='/signin'>
                    <li>Login</li>
                </Link>
                <Link style={navStyle} to='/events'>
                    <li>Events</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
