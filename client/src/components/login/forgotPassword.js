import React, { Component } from 'react';
import API from '../utility/API';


class ForgotPassword extends Component {

    constructor(props){
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
        
        API.userVerify({email: this.state.email, firstName: this.state.firstName,}).then((account)=>{
            
            if (account.data !== null && account.data.email === this.state.email) {
                this.setState({emailFound:true, errorMessage: ""})
            } else {
                this.setState({errorMessage: "Account not verified"})
            }
        });
    };

    CheckPassword = () => {
        if (this.state.newPassword === this.state.newPasswordConfirm) {
            this.setState({errorMessage: ""})
            let userData = {
                email: this.state.email,
                password: this.state.newPassword
            };
            API.forgotPassword(userData).then((account)=>{
                if (account.status === 200) {
                    this.setState({errorMessage: "Password Successfully Updated", emailFound:false})
                }
            });

        } else {
            this.setState({errorMessage: "Password Dose Not Match"})
        };
    }

    render() {
        let fieldOne;
        if (this.state.emailFound) {
            fieldOne = <p>Email: {this.state.email}</p>
        } else {
            fieldOne =  <form >   
                            <input onChange = {this.onChange.bind(this)} type="text" name="firstName" placeholder="First Name"/>
                            <input onChange = {this.onChange.bind(this)} type="text" name="email" placeholder="E-mail"/>

                            <button type="button" onClick={this.findUserName}> Submit</button>
                        </form>     
        }

        let fieldTwo;
        if (this.state.emailFound) {
            fieldTwo = <form>     
                <input onChange = {this.onChange.bind(this)} type="password" name="newPassword" placeholder="New Password"/>
                <input onChange = {this.onChange.bind(this)} type="password" name="newPasswordConfirm" placeholder="Confirm New Password"/>
                <button type="button" onClick={this.CheckPassword}> Submit</button>
            </form>  
        } 

        return (
            <div>
                {fieldOne}
                {fieldTwo}
                <h3>{this.state.errorMessage}</h3>
            </div>
        )
    }
}

export default ForgotPassword;