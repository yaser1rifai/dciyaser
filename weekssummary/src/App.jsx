import React, { Component } from 'react';
import   "./App.css";
import Home from './components/Home';
import Lifecycle from './components/Lifecycle';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import pageNotFound from './components/PageNotFound';

function App (){
  
    return (
      <Router>

      <main>
        <nav>
          <li><Link to="/"> Home     </Link> </li>
          <li><Link to="/Lifecycle"> Lifecycle</Link> </li>
        </nav>

        <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Lifecycle" component={Lifecycle} />
     <Route path="" component={pageNotFound} /> 
     </Switch>
     </main>
     </Router>

    );
  }


export default App;
