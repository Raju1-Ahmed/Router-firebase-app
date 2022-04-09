import React from 'react';

const Login = () => {
    return (
        <div>
    <h2>Please Registry with us..</h2>
            <form>
                <input type="email" placeholder='type your Email'/> <br/> <br/>
                <input type="password" placeholder='type your password'/> <br/> <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;