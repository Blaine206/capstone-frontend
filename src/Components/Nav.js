import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Nav = () => {

   
    return (
        <nav>
        <h3>Tigary C.C.</h3>
            <ul className="nav_links">
                <Link><li>Login</li> </Link>
                <Link><li>Events</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;
