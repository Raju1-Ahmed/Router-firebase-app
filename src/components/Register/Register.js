import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder='type your name..'/> <br/>
                <input type="email" placeholder='type your Email'/> <br/> 
                <input type="password" placeholder='type your password'/> <br/> <br/>
                <input type="submit" value="Registy"/>
            </form>
        </div>
    );
};

export default Register;