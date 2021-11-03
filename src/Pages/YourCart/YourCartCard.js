import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import  Col from "react-bootstrap/Col";


function YourCartCard({orderObject}) {
    const {key,name, image, type} = orderObject;

    function hendleDelete(key) {
        fetch(`http://localhost:5000/deleteorder/${key}`,{
            method : "DELETE",
            headers : { "content-type" : "application/json" },
        })
        .then(res => {
            res.json()
            window.location.reload()
        })
        .then(data => {
            console.log(data)
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