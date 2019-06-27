import React, { Component } from 'react';
import API from '../utility/API';


class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            errorMessage: "Create your account"
        };
    };

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
    };

    CheckPassword = () => {
        if (this.state.password === this.state.confirmPassword) {
            let userData = {
                email: this.state.email,
                password: this.state.password
            }
            API.userSignup(userData)
            .then(
                (account) => {
                    if (account.status === 200) {
                        alert("Account Created") 
                    };
                })
            .catch((errorMessage)=> {
                if (errorMessage) {
                    this.setState({
                        errorMessage: "E-mail in use"
                    })
                };
            });
        } else {
            this.setState({
                errorMessage: "Password Does not match"
            })
        }
    }

    render() {
        return (
            <div>

                <p>{this.state.errorMessage}</p>

                <form > 
                    <input onChange = {this.onChange.bind(this)} type="text" name="firstName" placeholder="First Name"/> 
                    <input onChange = {this.onChange.bind(this)} type="text" name="lastName" placeholder="Last Name"/>      
                    <input onChange = {this.onChange.bind(this)} type="text" name="email" placeholder="E-mail"/>
                    <input onChange = {this.onChange.bind(this)} type="password" name="password" placeholder="Password"/>
                    <input onChange = {this.onChange.bind(this)} type="password" name="confirmPassword" placeholder="ConfirmPassword"/>
                    <button onClick = {this.CheckPassword.bind(this)} type="button"> Sign up</button>
                </form>
                <a href="/login"><button>login</button></a>
            </div>
        )
    }
}

export default Signup;