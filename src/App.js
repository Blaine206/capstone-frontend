// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './Components/Nav';
import EventFeed from './Components/EventFeed';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
// import Login from '.Components/Login'
// import User from './Components/User';


// const BASE_URL = 'http://localhost:3001'

function App() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [url, setUrl] = useState('');

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    // console.log(name);
  };

// axios call post to users saving email and name for user, check for existing email

//  const setNav = (name, email, url) => {
//     return <Nav>name={name} email={email} url={url}</Nav> 
//   }

  return (
    <Router>
      <div className="App">
        <GoogleLogin
          clientId="422134929902-nl2c86n17fm0nrk2kkvt3sl8v4cf39h3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <Switch>
          <Route exact path="/">
            <Nav name={name} email={email} url={url}/>
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