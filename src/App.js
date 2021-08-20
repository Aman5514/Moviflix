import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Private from "./components/Private";

function App() {

  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Private exact path="/home" Component={HomePage}/>
        </Switch>
      </Router>
  );
}

export default App;
