import React from 'react';
import { Link } from 'react-router-dom';
import './OfferCard.css'
/* offer card components */
function OfferCard({offerObject}){
    const {image,name,description,price} = offerObject
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
                   {/* offer btn came from offer.css and btn-border came from App.css */}
                   <Link to='/yourcart'><button className='offer-btn btn-border'>Add Offer</button></Link>
               </div>
           </div>
    //    </div>
    )
}
export default OfferCard