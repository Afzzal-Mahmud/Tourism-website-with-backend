import React from "react";
import { useForm } from "react-hook-form";
function Admin() {
    /* function add data to mongoDb database */
    function addToDb(data) {
        console.log(data)
    }
    /* hook form validation */
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    return(
        <form className='form-field' onSubmit={handleSubmit(addToDb)}>

               {/* key field validation */}
               <label className='fw-bold' htmlFor="key">Offer Key</label>
               <input placeholder='offer key must contain one Uppercase lette' type="text" {...register("key", { required: 'One uppercase letter and max length 5',maxLength: 5,
               pattern : {
                   value : /(?=.*[A-Z])/,
                   message : "Must contain one UpperCase letter and max-Length 5"
               }
               })}/>
               {/* hendling key errors */}
               {errors.key && (<small className='text-danger'>{errors.key.message}</small>)}


               {/* name field validation */}
               <label className='fw-bold' htmlFor="name">Offer Name</label>
               <input placeholder='Must contain one upperCase Letter max langth 20 carecter' type="name" {...register("name", { required: 'One uppercase letter and max lengt 20',maxLength: 20,
               pattern : {
                   value : /(?=.*[A-Z])/,
                   message : "Must contain one UpperCase letter and maxLength 20"
               }
               })}/>
               {/* hendling name errors */}
               {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}
               

               {/* price field validation */}
               <label className='fw-bold' htmlFor="price">Offer Price</label>
               <input placeholder='minmum price 50 and max price 2000' type="number" {...register("price", { min: 50, max: 2000 })}/>
               {/* hendling price errors */}
               {errors.key && (<small className='text-danger'>{errors.price.message}</small>)}


               {/* description field validation */}
               <textarea type="text" {...register("description", { required: 'minimum description length is 50 characters',min:{
                   value : 50,
                   message : 'description should be min 50 characters long'
                } })} rows="4" cols="50" className='mt-4' htmlFor="description">
                   Your awsome nice and fine description must contain minimum 50 characters
                   </textarea>
                   {/* hendling description errors */}
                   {errors.description && (<small className='text-danger'>{errors.description.message}</small>)}
                   

               {/* offer-btn came from OfferCard btn-border came from App.css*/}
               <div className="login-btn pt-4">
                   {/* add offer to the server */}
                   <button className='offer-btn btn-border'>Add Offer</button>
               </div>
           </form>
    )
}
export default Admin