import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({children,...rest}) {
    const {user} = useAuth()
    // const {isLoading} = useLoading()
   
    return(
        <Route
        {...rest}
        render={({location})=>user.email ? children 
        :<Redirect 
        to={
            {
                pathname:'/login',
                state:{from : location}
            }
        }
        ></Redirect>}
       >

       </Route>
    )
}
export default PrivateRoute;