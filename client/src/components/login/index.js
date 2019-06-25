import React, {Component} from 'react';
const API = require("../utility/API").default

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {};
    };

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
          [name]: value
        });
    };

    onSubmit = () => {

        let userData = {
            email: this.state.email,
            password: this.state.password
        }

        API.userSignin(userData)
            .then(
                (account) => {
                    if (account.data === null) {
                        this.setState({
                            errorMessage: "Account not found / Password does not match with our records"
                        })
                    } else {
                        alert("logged in")
                    }
                })
            .catch((errorMessage)=> {
                if (errorMessage) {
                    this.setState({
                        errorMessage: "Account not found / Password does not match with our records"
                    })
                };
            });
    }

    render () {
        return (
            <div>
                <div class="login-modal">
                    <img src="../images/logos/BuzzSuite.png" alt="logo" width="40%;" />
                    <p>{this.state.errorMessage}</p>
                    <form class="login-form">
                        <input onChange = {this.onChange.bind(this)} type="text" name="email" placeholder="E-mail" class="login-form-input" />
                        <br />
                        <input onChange = {this.onChange.bind(this)} type="password" name="password" placeholder="Password" class="login-form-input" />
                        <br />
                        <button onClick = {this.onSubmit.bind(this)} type="button" class="login-form-button">Submit</button>
                    </form>
                    <a href="/signup"><button>Sign up</button></a>
                    <div class="forgot-password">
                        {/* <a href="#">Forgot your password?</a> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;