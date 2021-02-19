import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import Navigation from './Components/Nav';
import EventFeed from './Components/EventFeed';
// import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import Login from './Components/Login' 
import Logout from './Components/Logout' 
import EventForm from './Components/EventForm' 

// import Login from '.Components/Login'
// import User from './Components/User';

// const BASE_URL = 'http://localhost:3001'

function App() {
  
  const [user, setUser] = useState({});
  // Usually set to null then create safety checks

  const createEvent = (formData) => {
    // how to hangle event creation only byb logged in user.
    console.log(formData)

    axios.post('http://localhost:3001/events', formData)
      .then(() => console.log('Event Created!'))
      .catch(error => {
        console.error(error);
      });
  };
    // axios post & add creator with user.email
  console.log(user)

  return (
    <Router>
      <div className="App">
        {Object.keys(user).length === 0? <Login user={user} setUser={setUser} /> : <Logout user={user} setUser={setUser}/>}
        <Navigation email={user.email} name={user.name} />
        <Switch>
          <Route exact path="/"/> 
          <Route path="/events" component={EventFeed}/>
          <Route path="/eventform">
            {Object.keys(user).length !== 0? <EventForm user={user.email} onSubmit={createEvent}/>: "Login to create event" }
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
        // <GoogleLogin
        //   clientId="422134929902-nl2c86n17fm0nrk2kkvt3sl8v4cf39h3.apps.googleusercontent.com"
        //   buttonText="Login"
        //   onSuccess={responseGoogle}
        //   onFailure={onFailure}
        //   cookiePolicy={'single_host_origin'}
// {/* <Route path="/login" component={Login}/> */}
//  {/* <UserList baseUrl={BASE_URL} />
//   <EventFeed baseUrl={BASE_URL} /> */}
// {/* <User baseUrl={BASE_URL} id={1}/> */}