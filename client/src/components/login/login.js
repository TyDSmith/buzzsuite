import React, {Component} from 'react';
//const API = require("../utility/API").default

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
        console.log (this.state)
    }

    render () {
        return (
            <div>
            <div class="login-modal">
                <img src="../images/logos/BuzzSuite.png" alt="logo" width="40%;" />
                <form class="login-form">
                    <input onChange = {this.onChange.bind(this)} type="text" name="username" placeholder="Username" class="login-form-input" />
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