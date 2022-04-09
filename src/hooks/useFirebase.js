import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebasei.init";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const useFirebase= () =>{
    const [user, setUser] = useState({});

    const signInWithGoogle= () =>{
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user);
  }).catch((error) => {
      console.error(error);
  });
    }
    const handleSignOut= () =>{
        signOut(auth)
        .then(() =>{})
    }

    useEffect(()=>{
    onAuthStateChanged(auth, user =>{
    setUser(user);

    })
    },[])

    return{
        user,
        handleSignOut,
        signInWithGoogle
    }
}
export default useFirebase;