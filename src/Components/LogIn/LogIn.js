import './Login.css'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import useFirebase from '../../Hooks/useFirebase';
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from '@firebase/auth';


/* LogIn components */

function LogIn(){
    /* google sign in method */
    const {signInUsignGoogle} = useFirebase()
    /* hook form validation */
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    /* user status */
    const [status,setStatus] = useState(false)

    /* current user data */

    function setUpLogInOrRegister(data) {
        const userInputEmail = data.email;
        const userInputPassword = data.password;

        {
            status ? 
            /* if user don't have any account he will createUserAccount and status is false
            but if he have already an account he will logInWith email and password */
            logInWithEmailAndPassword(userInputEmail,userInputPassword) 
            : createUserWithEmailAndPassword(userInputEmail,userInputPassword)
        }
    }
    /* logIn user with email*/
    function logInWithEmailAndPassword(userEmail,userPassword) {
        console.log(userEmail,userPassword,'have checkmark active and logIn function')
    }
    function createUserWithEmailAndPassword(userEmail,userPassword) {
        console.log(userEmail,userPassword,'have checkmark deactive and create user function')
    }
    /* use this function to impliment a user log In or Sign In */
    function signInOrSignUp() {
        
    }
    /* for checking the user account */
    function haveAnyAccount(e) {
        setStatus(e.target.checked)
    }
   
    return(
       <Container>
           {/* show status based logIn or Sign Up */}
           <h2 className='text-center pt-4'>Please {status ? "Log In" : "Sign Up" }</h2>
           <form className='form-field' onSubmit={handleSubmit(setUpLogInOrRegister)}>

               {/* email field validation */}
               <label className='fw-bold' htmlFor="email">E-mail</label>
               <input type="email" {...register("email", { required: 'email field is requird',
               pattern : {
                   value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                   message : "invalid email"
               }
               })}/>
               {/* hendling email errors */}
               {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
               
               {/* password field validation */}
               <label className='fw-bold' htmlFor="password">Password</label>
               <input type="password" {...register("password", { required: 'your password should be 6 carecter long',min:{
                   value : 6,
                   message : 'password should be 6 carecter long'
               } })}/>
               {/* hendling password errors */}
               {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
               
               <span><input onClick={haveAnyAccount} type="checkbox"/> <span>already have an account ?</span></span>
               {/* offer-btn came from OfferCard btn-border came from App.css*/}
               <div className="login-btn">
                   {/* show status based button */}
                   <button className='offer-btn btn-border me-4'>{status ? "Log In" : "Sign Up" }</button>
                   <button onClick={signInUsignGoogle} className='offer-btn btn-border'>Google LogIn</button>
               </div>
           </form>
       </Container>
    )
}
export default LogIn;