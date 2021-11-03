import React from "react";
import Card from "react-bootstrap/Card";
import  Col from "react-bootstrap/Col";


function YourCartCard({orderObject}) {
    const {key,name, image, type} = orderObject;

    function hendleDelete(itemKey) {
        fetch(`https://protected-gorge-97772.herokuapp.com/deleteorder/${itemKey}`,{
            method : "delete"
        })
        .then(res => {
            res.json()
            if(res.status == 200){
                const process = window.confirm('are you sure to delete')
                if(process){
                    alert('delete successfully')
                    window.location.reload()
                }
            }
            console.log(res.status)
        })
        .then(data => {
            console.log(data,'delete item from client side')
        })
    }

    return (
        <Col xs={12} md={4}>
        <Card className='h-100' style={{margin:"1.5em"}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p> Type of Services : {type}</p>
                <button onClick={() =>hendleDelete(key)} className='offer-btn'>Delete</button>
            </Card.Body>
        </Card>
        </Col>
    )
}
export default YourCartCard;