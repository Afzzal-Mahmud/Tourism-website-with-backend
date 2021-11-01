import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
export const AuthContext = createContext()
/* creating a context api */
function AuthProvider({children}) {
    /* all context is all the code of useFirebase hooks */
    const allContext = useFirebase()
    return(
    <AuthContext.Provider value={allContext}>
        {children}
    </AuthContext.Provider>
    )
}
export default AuthProvider;