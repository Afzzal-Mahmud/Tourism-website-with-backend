import React,{ useState, useEffect } from 'react';
/* hero offer components */
function Offer(){
    /* featching data from localHost */
    const [offers,setOffers] = useState([])

    uesEffect(()=>{
        fetch()
        .then(Response => Response.json())
        .then(data =>{
            console.log(data)
            setOffers(data)
        })
    },[])

    return(
        <h3>hello</h3>
    )
}
export default Offer;