import React from 'react';

function Login (props) {
    return (
        <div>
            <from>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" />
                <button type="button" >Submit</button>
            </from>
            <a href="/signup"><button>Sign up</button></a>
        </div>
    )
}

export default Login;