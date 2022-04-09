import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebasei.init';

const auth = getAuth(app)

const Product = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>knock knock ! Who is There..</h2>
            <h5>{user? user.displayName : 'nothing!'}</h5>
        </div>
    );
};

export default Product;