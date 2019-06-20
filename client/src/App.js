import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Dashboard from './components/pages/dashboard';
import Influencers from './components/pages/influencers';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Campaigns from './components/pages/campaigns';
import SingleInfluencer from './components/pages/single-influencer';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/influencers" component={Influencers} />
          <Route path="/campaigns" component={Campaigns} />
          <Route path="/influencer" component={SingleInfluencer} />

        </div>
      </Router >

    );
  }
}

export default App;
