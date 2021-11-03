import React,{ useState, useEffect } from 'react';
import OfferCard from './OfferCard';

/* hero offer components */
function Offer(){
    /* storing data from localhost server */
    const [offers,setOffers] = useState([])
    
    /* featching data from localHost */
    useEffect(()=>{
        fetch('https://protected-gorge-97772.herokuapp.com/alloffers')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setOffers(data)
        })
    },[])

    return(
        <div>
            <h2 className='text-center secondery-color py-4'>Recommended Offer</h2>
            {
                offers.map(offer => <OfferCard

                key={offer.key}
                offerObject={offer}

                ></OfferCard>)
            }
        </div>
    )
}
export default Offer;