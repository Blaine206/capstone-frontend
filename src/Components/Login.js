import React from "react";
import axios from "axios";
// import Navigation from './Nav'
// import { navigate } from "@reach/router";
import { GoogleLogin } from "react-google-login";

const clientId = "422134929902-nl2c86n17fm0nrk2kkvt3sl8v4cf39h3.apps.googleusercontent.com";

const Login = ({ user, setUser }) => {
  const onSuccess = (res) => {
    axios
      .post("/auth/signin", {
        id_token: res.getAuthResponse().id_token,
      })
      .then((res) => {
        setUser(res.data);
        // navigate("/users");
      });

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log("newAuthRes:", newAuthRes);
      console.log("new auth Token", newAuthRes.id_token);
      setTimeout(refreshToken, refreshTiming);
    };

    setTimeout(refreshToken, refreshTiming);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={user != null}
      />
    </div>
  );
};

export default Login;

// import { Link } from 'react-router-dom';
{/* <div><Link to='/'>Home</Link></div> */}
