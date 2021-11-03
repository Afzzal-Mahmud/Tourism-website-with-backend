import React, { useEffect, useState } from 'react'
import useAuth from '../../Hooks/useAuth'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import YourCartCard from './YourCartCard';

function YourCart() {
    const {user,userOrder,setUserOrder} = useAuth()

    const userEmail = user.email
    /* getting user added data from server */
     
    useEffect( ()=>{
        fetch(`http://localhost:5000/useroffer/${userEmail}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUserOrder(data)
        })
        /* by userEmail changes the data must change */
    },[userEmail])

    return(
        <Container>
            <h3>hello from cart length  </h3>
        <Row>
        
                {
                    userOrder.map(order => <YourCartCard
                    key={order._id}
                    orderObject = {order}
                    ></YourCartCard>)
                }
            
        </Row>
    </Container>
    )
}
export default YourCart