import React, { Component }from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom"
import './login.css';
import API from '../utility/API';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        };
    };

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
    };

    signin = () => {
        let userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
            
        }
        console.log (userData)
        API.userSignin(userData)
        .then((account) => this.props.updateState(account))

    }


    render () {
        return (
            <div>
                <div class="login-modal">
                    <img src="../images/logos/BuzzSuite.png" alt="logo" width="40%;" />
                    <form class="login-form">
                        <input onChange = {this.onChange.bind(this)} type="text" name="email" placeholder="Username" class="login-form-input" />
                        <br />
                        <input onChange = {this.onChange.bind(this)} type="password" name="password" placeholder="Password" class="login-form-input" />
                        <br />
                        <button onClick = {this.signin.bind(this)} type="button" class="login-form-button">Submit</button>
                    </form>
                    <a href="/signup"><button>Sign up</button></a>
                    <div class="forgot-password">
                        <Link to="/forgotpassword"> Forgot your password? </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;