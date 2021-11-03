import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

/* initialize the authentication system */
initializeAuthentication()
function useFirebase(){

    /* special for mongoDb to geting data */
    const [userOrder,setUserOrder] = useState([])



    /* special for mongoDb end */


    /* create user state */
    const [user,setUser] = useState({})
    const auth = getAuth()
    /* create error state */
    const [err,setErr] = useState('')

    /* fixing reload issue */
    const [isLoading,setIsLoading] = useState(true)

    /* use googleLog In */
    function signInUsignGoogle() {
        const googleProvider = new GoogleAuthProvider()
        /* for redirect purpose use google logIn then on LogIn components */
        return signInWithPopup(auth,googleProvider) 
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
            setIsLoading(false)
        })
    },[])
    return{
        signInUsignGoogle,
        user,
        setUser,
        err,
        setErr,
        logOut,
        isLoading,
        setIsLoading,
        userOrder,
        setUserOrder
    }
}
export default useFirebase