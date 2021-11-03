import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import {useHistory} from 'react-router-dom';

function ConfirmShipping() {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const {user} = useAuth()
    function clearCollection() {
        console.log('clicked')
        fetch(`https://protected-gorge-97772.herokuapp.com/deleteall/${user.email}`,{
            method : "delete"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                
                    alert('Shipping successfully')
                
            }
            console.log(data)
        })
        reset()
        history.push('/home')
    }
    return(
        <>
        <h2 className='text-center pt-4'>Add Your Shipping Address</h2>
        <form className='form-field' onSubmit={handleSubmit(clearCollection)}>

               {/* email field validation */}
               <label className='fw-bold' htmlFor="email">E-mail</label>
               <input value={user.email} type="email" {...register("email", { required: 'email field is requird',
               pattern : {
                   value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                   message : "invalid email"
               }
               })}/>
               {/* hendling email errors */}
               {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}


               {/* image field validation */}
               <label className='fw-bold' htmlFor="city">City Name</label>
               <input placeholder='include your city name' type="text" {...register("city", { required: 'include your city name'})}/>
               {/* hendling image errors */}
               {errors.city && (<small className='text-danger'>{errors.city.message}</small>)}


                   
               {/* offer-btn came from OfferCard btn-border came from App.css*/}
               <div className="login-btn pt-4">
                   {/* add offer to the server */}
                   <button className='offer-btn btn-border'>Confirm</button>
               </div>
           </form>
           </>
    )
}
export default ConfirmShipping