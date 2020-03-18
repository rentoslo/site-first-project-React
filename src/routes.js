import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './views/Home'
import Profile from './views/Profile'
import Register from './views/Register'
import Login from './views/Login'

export default function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
 
        <Route path="/profile" exact>
          <Profile name="Renato" email="rentoslo@yahoo.com"/>
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/register" exact>
          <Register />
        </Route>

      </Switch>
    </Router>
  );
}
