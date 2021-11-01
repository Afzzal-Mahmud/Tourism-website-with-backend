import './Login.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import useFirebase from '../../Hooks/useFirebase';

/* LogIn components */

function LogIn(){
    const {signInUsignGoogle} = useFirebase()
    function logInOrRegister(e) {
        e.preventDefault()
    }
    return(
       <Container>
           <h2 className='text-center pt-4'>Please LogIn</h2>
           <form className='form-field' onSubmit={logInOrRegister}>
               <label htmlFor="email">E-mail</label>
               <input type="text" />
               <label htmlFor="password">Password</label>
               <input type="password" />
               <span><input type="checkbox"/> <span>already have an account ?</span></span>
               {/* offer-btn came from OfferCard */}
               <div className="login-btn">
                   <button className='offer-btn btn-border me-4'>Log In</button>
                   <button onClick={signInUsignGoogle} className='offer-btn btn-border'>Google LogIn</button>
               </div>
           </form>
       </Container>
    )
}
export default LogIn;