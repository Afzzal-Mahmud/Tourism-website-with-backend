import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import './OfferCard.css'
import useAuth from '../../Hooks/useAuth';
import { async } from '@firebase/util';
/* offer card components */
function OfferCard({offerObject}){
    /* seting the user order */ 
    const {user,userOrder} = useAuth()
 
    const {_id,image,name,description,price} = offerObject
    const history = useHistory()

    function redirectLogIn() {
        history.push('/login') 
    }

    /* add order to the ui */
        function addOrder(currentId) {
        const orderItem = offerObject;
        orderItem.email = user.email;
        orderItem.type = 'current offers'
        orderItem.detail = 'order'
        
        const previousOrderId = userOrder.find(order => order._id == currentId)
        
         /* responce function  */
         if(currentId !=previousOrderId){
            axios.post('http://localhost:5000/order',orderItem)
            .then(res =>{
                console.log(res)
                if(res.data.insertedId){
                    alert('order added successfully')
                }
            })
        }
        
    }

   
    

    return(
    //    <div className="d-flex m-4">
           <div className="card-main">
               <div className="card-img">
                   <img src={image} alt="" />
               </div>
               <div className="card-body">
                   <h3>{name}</h3>
                   <p>
                       {description}
                   </p>
                   {/* add star icon */}
                   <span>
                   <i class="bi bi-star-fill"></i>
                   <i class="bi bi-star-fill"></i>
                   <i class="bi bi-star-fill"></i>
                   <i class="bi bi-star-fill"></i>
                   <i class="bi bi-star-fill"></i>
                   </span>
                   <h5>{price} per person</h5>

                   {
                       user.email ? <button onClick={() =>addOrder(_id)}
                       className='offer-btn btn-border'>Add Offer</button>
                      
                       : <button onClick={redirectLogIn} className='offer-btn btn-border'>Log In To Add</button>
                   }
               </div>
           </div>
    //    </div>
    )
}
export default OfferCard