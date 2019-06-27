import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Dashboard from './components/dashboard';
import Influencers from './components/influencers';
import Login from './components/login';
import Signup from './components/login/signup';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/influencers" component={Influencers} />
          {/* <Route path="/login" component={Login} /> */}
          <Route 
            path="/login" 
            render={(props) => (this.state.UserLoggedIn ? 
              (<Redirect to="/campaigns" />) : 
              (<Login {...props} updateState={this.updateState}/>))}
            // render={(props)=> <Login {...props} updateState={this.updateState} />} 
            />
          <Route path="/signup" component={Signup} />
          <Route 
            path="/campaigns" 
            render={(props) => (this.state.UserLoggedIn ? 
            (<Campaigns {...props} UserInfo={this.state.UserInfo}/>) : 
            (<Redirect to="/login" />) )} />
          <Route path="/influencer" component={SingleInfluencer} />
        </div>

        {greeting}

      </Router >

    );
  }
}

export default App;
