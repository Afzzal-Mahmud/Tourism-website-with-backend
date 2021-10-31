import React from 'react';
import Container from 'react-bootstrap/Container';
// import useFirebase from '../../Hooks/useFirebase';
/* carousel banner components */
function LogIn(){
    // const {signInUsignGoogle} = useFirebase()
    function logInOrRegister(e) {
        e.previntDefault()
    }
    return(
       <Container>
           <form onSubmit={logInOrRegister}>
               <label htmlFor="email">E-mail</label>
               <input type="text" />
               <label htmlFor="password">Password</label>
               <input type="password" />
               {/* offer-btn came from OfferCard */}
               <div className="login-btn d-flex">
                   <button className='offer-btn'>Log In</button>
                   {/* <button onClick={signInUsignGoogle} className='offer-btn'>Google LogIn</button> */}
               </div>
           </form>
       </Container>
    )
}
export default LogIn;