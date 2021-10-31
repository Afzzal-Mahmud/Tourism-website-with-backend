import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

/* initialize the authentication system */
initializeAuthentication()
function useFirebase(){
    /* create uer state */
    const [user,setUser] = useState({})
    const auth = getAuth()

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
    return{
        signInUsignGoogle,
        user,
        logOut
    }
}
export default useFirebase