import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import './OfferCard.css'
import useAuth from '../../Hooks/useAuth';
/* offer card components */
function OfferCard({offerObject}){
    const {user} = useAuth()
    const {image,name,description,price} = offerObject
    /* seting the user order */
    const [currentOrderItem,setCurrentOrderItem] = useState([])
    /* setting the status of the uesr */
    // const [status,setStatus] = useState(false)
    const history = useHistory()

    function redirectLogIn() {
        // setStatus(true)
        history.push('/login') 
    }

    /* add order to the ui */
    function addOrder() {
        const orderItem = offerObject;
        orderItem.email = user.email;
        orderItem.type = 'current offers'

        /* conditionali add item to the database */

        if(currentOrderItem._id != orderItem._id){
            axios.post('http://localhost:5000/order',orderItem)
            .then(res => {
                const newOrder = JSON.parse(res?.config?.data)
                setCurrentOrderItem(newOrder)
               /* if it have the id we show this message */
                if(res.data.insertedId){
                    alert('Offer add successfully')
                }
            })
            .finally(err => {
                console.log(err)
            })
        }else{
            alert('you already add this item')
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
                       user.email ? <button onClick={addOrder}
                       className='offer-btn btn-border'>Add Offer</button>
                      
                       : <button onClick={redirectLogIn} className='offer-btn btn-border'>Log In To Add</button>
                   }
               </div>
           </div>
    //    </div>
    )
}
export default OfferCard