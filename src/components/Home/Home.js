import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebasei.init';

const auth = getAuth(app)

const Home = () => {
    const [user] =  useAuthState(auth);
    return (
        <div>
            <h2>This isn ...{user? user.displayName : 'not a name...'}</h2>
      
        </div>
    );
};

export default Home;