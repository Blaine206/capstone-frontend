import React from "react";
// import axios from "axios";
// import Navigation from './Nav'
// import { navigate } from "@reach/router";
import { GoogleLogout } from "react-google-login";

const clientId = "422134929902-nl2c86n17fm0nrk2kkvt3sl8v4cf39h3.apps.googleusercontent.com";

const Logout = ({ user, setUser }) => {
    const onSuccess = (res) => {
        setUser({});
        alert("Logout made successfully");
        console.log("logged out");
        
        // navigate("/");
        //HOW DO I RE-RENDER to get login button back????
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default Logout;
