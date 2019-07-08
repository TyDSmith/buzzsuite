import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import API from "../utility/API";
import "./signup.css";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "Create your account"
    };
  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  CheckPassword = () => {
    if (this.state.password === this.state.confirmPassword) {
      let userData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };

      API.userSignup(userData)
        .then(account => {
          if (account.status === 200) {
            this.setState({ errorMessage: "Account Created" });
          }
        })
        .catch(errorMessage => {
          if (errorMessage) {
            this.setState({
              errorMessage: "E-mail in use"
            });
          }
        });
    } else {
      this.setState({
        errorMessage: "Password Does not match"
      });
    }
  };

  render() {
    return (
      <div className="page-start">
        <div className="login-modal signup-modal">
          <form className="login-form signup-form">
            <span className="login-signup-modal-message">
              <h3>{this.state.errorMessage}</h3>
            </span>
            <input
              onChange={this.onChange.bind(this)}
              type="text"
              name="firstName"
              class="signup-form-input"
              placeholder="First Name"
            />
            <input
              onChange={this.onChange.bind(this)}
              type="text"
              name="lastName"
              class="signup-form-input"
              placeholder="Last Name"
            />
            <input
              onChange={this.onChange.bind(this)}
              type="text"
              name="email"
              class="signup-form-input"
              placeholder="E-mail"
            />
            <input
              onChange={this.onChange.bind(this)}
              type="password"
              name="password"
              class="signup-form-input"
              placeholder="Password"
            />
            <input
              onChange={this.onChange.bind(this)}
              type="password"
              name="confirmPassword"
              class="signup-form-input"
              placeholder="Confirm Password"
            />
            <button onClick={this.CheckPassword.bind(this)} type="button">
              {" "}
              Sign up
            </button>

          </form>
          <Link to="/login"> Already registered?</Link>
        </div>
      </div>
    );
  }
}

export default Signup;
