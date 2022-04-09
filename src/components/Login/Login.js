import { getAuth } from 'firebase/auth';
import React from 'react';
import  { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebasei.init';

const auth = getAuth(app)

const Login = () => {
        const  [signInWithGoogle, use] =  useSignInWithGoogle(auth);
        const location = useLocation();
        const navigate = useNavigate();

        const from = location?.state?.from?.pathname ||  "/";

        const handleGoogleSignin = () => {
            signInWithGoogle()
            .then(() =>{
                navigate(from, {replace: true})
            })
        } 
    return (
        <div>
            <div style={{margin: '20px'}}>
                <button onClick={handleGoogleSignin} >Google sign in</button>
            </div>
            <form>
                <input type="email" placeholder='type your Email'/> <br/> <br/>
                <input type="password" placeholder='type your password'/> <br/> <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;