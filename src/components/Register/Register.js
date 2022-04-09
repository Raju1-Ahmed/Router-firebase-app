import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>Please Registry with us..</h2>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle} >Google sign in</button>
            </div>
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