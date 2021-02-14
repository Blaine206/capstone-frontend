// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from './Components/UserList';
import Nav from './Components/Nav';
import EventFeed from './Components/EventFeed';
// import User from './Components/User';


// const BASE_URL = 'http://localhost:3001'

function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/users" component={UserList} />
          <Route path="/events" component={EventFeed} />
          <Route path="/" exact component={Nav} />
         {/* <UserList baseUrl={BASE_URL} />
         <EventFeed baseUrl={BASE_URL} /> */}
      </div>
    </Router>
  );
}

export default App;

{/* <User baseUrl={BASE_URL} id={1}/> */}