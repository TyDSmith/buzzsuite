import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Dashboard from './components/dashboard';
import Influencers from './components/influencers';
import Login from './components/login';
import Signup from './components/login/signup';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import Campaigns from './components/campaigns';
import SingleInfluencer from './components/single-influencer';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      UserLoggedIn: false,
      UserInfo: {},

    };
  };

  updateState = (UserInfo) => {
    
    this.setState({UserInfo: UserInfo,UserLoggedIn: true})
    // this.setState({UserLoggedIn: true})
    
  }


  render() {

    let greeting = "";

    if (this.state.UserLoggedIn) {
      greeting = <p>Welcome back, {this.state.UserInfo.data.email}</p>
    }

    console.log(this.state.UserInfo);

    return (


      <Router>
        <div className="App">
          <NavBar />

          <Link to="/dashboard"> Dashboard </Link>
          <Link to="/influencers"> Influencers </Link>
          <Link to="/influencer"> Influencer </Link>
          <Link to="/campaigns"> Campaigns </Link>

          <Route 
            path="/campaigns" 
            render={(props) => (this.state.UserLoggedIn ? 
            (<Campaigns {...props} UserInfo={this.state.UserInfo}/>) : 
            (<Redirect to="/login" />) )} />

          <Route 
            path="/dashboard" 
            render={(props) => (this.state.UserLoggedIn ? 
            (<Dashboard {...props} UserInfo={this.state.UserInfo}/>) : 
            (<Redirect to="/login" />) )} /> 
          
          <Route 
            path="/influencers" 
            render={(props) => (this.state.UserLoggedIn ? 
              (<Influencers {...props} UserInfo={this.state.UserInfo}/>) : 
              (<Redirect to="/login" />) )} /> 
          
          <Route 
            path="/influencer" 
            render={(props) => (this.state.UserLoggedIn ? 
              (<SingleInfluencer {...props} UserInfo={this.state.UserInfo}/>) : 
              (<Redirect to="/login" />) )} /> 

          <Route 
            path="/login" 
            render={(props) => (this.state.UserLoggedIn ? 
              (<Redirect to="/campaigns" />) : 
              (<Login {...props} updateState={this.updateState}/>))}
            // render={(props)=> <Login {...props} updateState={this.updateState} />} 
            />
          <Route path="/signup" component={Signup} />
          
          
        </div>

        {greeting}

      </Router >

    );
  }
}

export default App;
