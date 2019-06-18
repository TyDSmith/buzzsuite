import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Dashboard from './components/pages/dashboard';
import Influencers from './components/pages/influencers';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/influencers" component={Influencers} />

        </div>
      </Router >

    );
  }
}

export default App;
