import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,Form,FormControl,Button,} from "react-bootstrap";
import  './App.css';

import Login from "./Component/LoginLayout/Login";
import Register from "./Component/LoginLayout/Register";
import Dashboard from "./Component/BackendLayout/BackendLayout";
import Profile from "./Component/Profile/Profile";



class App extends React.Component {

    render(){
        return(
            <Router>
      <div>
      <Navbar bg="primary" variant="dark">
      
      <Link to="/" className="navbar-brand">Home</Link>
    <Nav className="mr-auto">
        <Link to="/login" className="nav-link">Login</Link>
        
        <Link to="/profile" className="nav-link">Profile</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
        )
    }



}

export default App;
