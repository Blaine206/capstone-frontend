import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <Link style={navStyle} to='/'>
                <h3>Tigary C.C.</h3>
            </Link>
            <ul className="nav_links">
                <Link style={navStyle} to='/login'>
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
