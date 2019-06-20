import React from 'react';
import './login.css';

function Login(props) {
    return (
        <div>
            <div class="login-modal">
                <img src="../images/logos/BuzzSuite.png" width="40%;" />
                <form class="login-form">
                    <input type="text" name="username" placeholder="Username" class="login-form-input" />
                    <br />
                    <input type="password" name="password" placeholder="Password" class="login-form-input" />
                    <br />
                    <button type="button" class="login-form-button">Submit</button>
                </form>

                <a href="/signup"><button>Sign up</button></a>


                <div class="forgot-password">
                    <a href="#">Forgot your password?</a>
                </div>

            </div>

        </div>







    )
}

export default Login;