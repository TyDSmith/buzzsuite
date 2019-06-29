import React from 'react';
import './App.css';
import NavBar, { Component } from './components/navbar';
import Dashboard from './components/dashboard';
import Influencers from './components/influencers';
import Login from './components/login';
import Signup from './components/login/signup';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Campaigns from './components/campaigns';
import SingleInfluencer from './components/single-influencer';
import Home from "./components/home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/influencers" component={Influencers} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/campaigns" component={Campaigns} />
          <Route path="/influencer" component={SingleInfluencer} />
          <Route path="/home" component={Home} />

        </div>
      </Router >

    );
  }
}

export default App;
