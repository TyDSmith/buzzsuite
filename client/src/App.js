import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Dashboard from './components/pages/dashboard';
import Influencers from './components/pages/influencers';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";


function App() {
  return (
      <Router>
        <div className="App">
          <Header />

        </div>
    </Router>

  );
}

export default App;
