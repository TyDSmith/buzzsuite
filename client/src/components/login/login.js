import React, {Component} from 'react';
const API = require("../utility/API").default

class Login extends Component {

    google = () => {
        // API.googleLogin().then(res => console.log (res))

        // Post request to backend
        fetch('/auth/google', {
            method: 'GET',
        }).then((req)=>{
            console.log (req)
        })
    };

    render () {
        return (
            <div>
                <form>
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button type="button" >Submit</button>
                </form>
                <a href="/signup"><button>Sign up</button></a>
                <a href="http://localhost:3001/auth/google"><button>Login with Google</button></a>
                {/* <button onClick={this.google}>Login with Google+</button> */}
            </div>
        )
    }
    
}

export default Login;