import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Influencers from "./components/influencers";
import Login from "./components/login";
import Signup from "./components/login/signup";
import forgotPassword from "./components/login/forgotPassword";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Campaigns from "./components/campaigns";
import SingleInfluencer from "./components/single-influencer";
import Home from "./components/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserLoggedIn: false,
      UserInfo: {}
    };
  }

  updateState = UserInfo => {
    this.setState({ UserInfo: UserInfo });

    if (this.state.UserInfo.data !== null) {
      this.setState({ UserLoggedIn: true });
    } else {
      alert("Account Not Found / Password Does Not Match!");
    }
  };

  signout = () => {
    console.log("sign out triggered");
    this.setState({ UserLoggedIn: false });
  };

  render() {
    let greeting = "";

    if (this.state.UserLoggedIn) {
      greeting = <p>Welcome back, {this.state.UserInfo.data.email}</p>;
    }

    console.log(this.state.UserInfo);

    return (
      <Router>
        <div className="App">
          <NavBar
            UserLoggedIn={this.state.UserLoggedIn}
            signout={this.signout}
          />
          <Switch>
            <Route
              path="/campaigns"
              render={props =>
                this.state.UserLoggedIn ? (
                  <Campaigns {...props} UserInfo={this.state.UserInfo} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              path="/dashboard"
              render={props =>
                this.state.UserLoggedIn ? (
                  <Dashboard {...props} UserInfo={this.state.UserInfo} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              path="/influencers"
              render={props =>
                this.state.UserLoggedIn ? (
                  <Influencers {...props} UserInfo={this.state.UserInfo} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              path="/influencer"
              render={props =>
                this.state.UserLoggedIn ? (
                  <SingleInfluencer {...props} UserInfo={this.state.UserInfo} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              path="/login"
              render={props =>
                this.state.UserLoggedIn ? (
                  <Redirect to="/campaigns" />
                ) : (
                  <Login {...props} updateState={this.updateState} />
                )
              }
            />

            <Route path="/signup" component={Signup} />
            <Route path="/forgotpassword" component={forgotPassword} />
            <Route path="/" component={Home} />
            {/* <Route path="/home" component={Home} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
