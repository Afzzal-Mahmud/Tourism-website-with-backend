import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({children,...rest}) {
    const {user,isLoading} = useAuth()
    // const {isLoading} = useLoading()
   if(isLoading){
       return <h4 className='text-center'>"Please wait this page is Loading"</h4>
   }
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