import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Nav from './Components/Nav';
import EventFeed from './Components/EventFeed';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Login from '.Components/Login'
// import User from './Components/User';

// const BASE_URL = 'http://localhost:3001'

function App() {

  const [user, setUser] = useState({});

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [url, setUrl] = useState('');

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    axios
      .post("/auth/signin", {
        id_token: response.getAuthResponse().id_token,
      })
      .then((response) => {
        setUser(response.data.user);
      });

    refreshTokenSetup(response);
  };

// axios call post to users saving email and name for user, check for existing email

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
    <Router>
      <div className="App">
        <GoogleLogin
          clientId="422134929902-nl2c86n17fm0nrk2kkvt3sl8v4cf39h3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
        <Switch>
          <Route exact path="/">
            <Nav />
          </Route> 
          <Route path="/events" component={EventFeed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// {/* <Route path="/login" component={Login}/> */}
//  {/* <UserList baseUrl={BASE_URL} />
//   <EventFeed baseUrl={BASE_URL} /> */}
// {/* <User baseUrl={BASE_URL} id={1}/> */}