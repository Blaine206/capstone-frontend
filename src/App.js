// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from './Components/UserList';
import Homepage from './Components/Hompage';
// import User from './Components/User';


// const BASE_URL = 'http://localhost:3001'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Homepage}  />
          <Route path="/users" component={UserList}  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
{/* <UserList baseUrl={BASE_URL} /> */}
{/* <User baseUrl={BASE_URL} id={1}/> */}