import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./login.css";
import API from "../utility/API";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  signin = () => {
    let userData = {
      email: this.state.email,
      password: this.state.password
    };
    API.userSignin(userData).then(account => this.props.updateState(account));
  };

  signin = () => {
    let userData = {
      email: this.state.email,
      password: this.state.password
    };
    API.userSignin(userData).then(account => {
      this.props.updateState(account);
    });
  };
  render() {
    if (document.getElementsByClassName("header").length) {
      document.getElementsByClassName("header")[0].classList.remove("stuff");
    }

    return (
      <div className="page-start">
        <div className="login-modal">
          <img src="../images/logos/BuzzSuite.png" alt="logo" width="40%;" />
          <form className="login-form">
            <input
              onChange={this.onChange.bind(this)}
              type="text"
              name="email"
              placeholder="Username"
              className="login-form-input"
            />
            <br />
            <input
              onChange={this.onChange.bind(this)}
              type="password"
              name="password"
              placeholder="Password"
              className="login-form-input"
            />
            <br />
            <button
              onClick={this.signin.bind(this)}
              type="button"
              className="login-form-button"
            >
              Submit
            </button>
          </form>
          <Link to="/signup">
            {" "}
            <button className="signIn">Sign up</button>{" "}
          </Link>
          <div className="forgot-password">
            <Link to="/forgotpassword"> Forgot your password? </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
