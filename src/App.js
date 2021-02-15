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
// import User from './Components/User';


// const BASE_URL = 'http://localhost:3001'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Nav} />
          <Route path="/events" component={EventFeed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
 {/* <UserList baseUrl={BASE_URL} />
  <EventFeed baseUrl={BASE_URL} /> */}
{/* <User baseUrl={BASE_URL} id={1}/> */}