import React, { Component } from 'react';
import API from '../utility/API';
import "./login.css";
import "./signup.css";

class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailFound: false,
            email: "",
            newPassword: "",
            newPasswordConfirm: "",
            errorMessage: ""
        };
    };

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    findUserName = () => {

        API.userVerify({ email: this.state.email, firstName: this.state.firstName, }).then((account) => {

            if (account.data !== null && account.data.email === this.state.email) {
                this.setState({ emailFound: true, errorMessage: "" })
            } else {
                this.setState({ errorMessage: "Account not verified" })
            }
        });
    };

    CheckPassword = () => {
        if (this.state.newPassword === this.state.newPasswordConfirm) {
            this.setState({ errorMessage: "" })
            let userData = {
                email: this.state.email,
                password: this.state.newPassword
            };
            API.forgotPassword(userData).then((account) => {
                if (account.status === 200) {
                    this.setState({ errorMessage: "Password Successfully Updated", emailFound: false })
                }
            });

        } else {
            this.setState({ errorMessage: "Password Does Not Match" })
        };
    }

    render() {
        let fieldOne;
        if (this.state.emailFound) {
            fieldOne = <p>Email: {this.state.email}</p>
        } else {
            fieldOne = <form classNAme="forgot-password-form">
                <input onChange={this.onChange.bind(this)} type="text" className="forgot-password-form-input" name="firstName" placeholder="First Name" />
                <input onChange={this.onChange.bind(this)} type="text" className="forgot-password-form-input" name="email" placeholder="E-mail" />
                <button type="button" onClick={this.findUserName} className="signup-form-button"> Submit</button>
            </form>
        }

        let fieldTwo;
        if (this.state.emailFound) {
            fieldTwo = <form classNAme="forgot-password-form">
                <input onChange={this.onChange.bind(this)} type="password" className="forgot-password-form-input" name="newPassword" placeholder="New Password" />
                <input onChange={this.onChange.bind(this)} type="password" className="forgot-password-form-input" name="newPasswordConfirm" placeholder="Confirm New Password" />
                <button type="button" onClick={this.CheckPassword} className="signup-form-button"> Submit</button>
            </form>
        }

        return (
            <div className="page-start">
                <div className="forgot-password-modal">
                    <img src="../images/logos/BuzzSuite.png" alt="logo" width="40%;" />
                    <h3>Reset your password</h3>
                    {fieldOne}
                    {fieldTwo}
                    <h3>{this.state.errorMessage}</h3>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;