import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

/* initialize the authentication system */
initializeAuthentication()
function useFirebase(){
    /* create user state */
    const [user,setUser] = useState({})
    const auth = getAuth()
    /* create error state */
    const [err,setErr] = useState('')

    /* use googleLog In */
    function signInUsignGoogle() {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
    }

    /* use logOut */
    function logOut() {
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }

    /* onAuthState Change for tracking user logIn status */
    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
    },[])
    return{
        signInUsignGoogle,
        user,
        setUser,
        err,
        setErr,
        logOut
    }
}
export default useFirebase