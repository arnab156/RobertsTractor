import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Nav from "./Components/Nav/Nav";

const App = () => (
  <div>
        <Nav/>

  <Router >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route component={NoMatch} />
    </Switch>

</Router>
 </div>
    );


export default App;
