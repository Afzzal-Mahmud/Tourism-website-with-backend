import React, { useEffect, useState } from 'react'
import useAuth from '../../Hooks/useAuth'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import YourCartCard from './YourCartCard';
import { useHistory } from 'react-router-dom';

function YourCart() {
    const {user,userOrder,setUserOrder} = useAuth()
    const history = useHistory()
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

    function processedShipping() {
        const process = window.confirm('are you sure to procced your shipping')
        if(process){
            history.push('/shipping')
        }
    }

    return(
        <Container>
            <div className='text-center'>
            <h3> Processed Your Shipping  </h3>
            <Button onClick={processedShipping}>Processed</Button>
            </div>
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