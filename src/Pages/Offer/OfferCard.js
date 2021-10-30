import React from 'react';
import './OfferCard.css'
/* offer card components */
function OfferCard(){
    return(
       <div className="d-flex m-4">
           <div className="card-main">
               <div className="card-img">
                   <img src="https://i.ibb.co/HBBpJ9q/coffee.jpg" alt="" />
               </div>
               <div className="card-body">
                   <h3>welcome to offer</h3>
                   <p className='hide-mobile'>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae porro soluta fugiat molestiae facere sequi?
                   </p>
                   <span>star icon ***</span>
                   <h5>$350 per person</h5>
                   <button className='offer-btn'>Add Offer</button>
               </div>
           </div>
           {/* last one */}
           <div className="card-main d-flex">
               <div className="card-img">
                   <img src="https://i.ibb.co/pzrfKd6/mountain.jpg" alt="" />
               </div>
               <div className="card-body">
                   <h3>welcome to offer</h3>
                   <p className='hide-mobile'>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae porro soluta fugiat molestiae facere sequi?
                   </p>
                   <span>star icon ***</span>
                   <h5>$350 per person</h5>
                   <button className='offer-btn'>Add Offer</button>
               </div>
           </div>
           {/* last one end */}
       </div>
    )
}
export default OfferCard