import React from 'react';
import Container from 'react-bootstrap/Container';
/* carousel banner components */
function LogIn(){
    return(
       <Container>
           <div className="login-body">
               <label htmlFor="email">E-mail</label>
               <input type="text" />
               <label htmlFor="password">E-mail</label>
               <input type="password" />
               {/* offer-btn came from OfferCard */}
               <div className="login-btn d-flex">
                   <button className='offer-btn'>Log In</button>
                   <button className='offer-btn'>Google LogIn</button>
               </div>
           </div>
       </Container>
    )
}
export default LogIn;