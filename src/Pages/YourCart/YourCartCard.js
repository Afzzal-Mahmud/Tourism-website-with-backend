import React from "react";
import Card from "react-bootstrap/Card";
import  Col from "react-bootstrap/Col";


function YourCartCard({orderObject}) {
    const {name, image, type} = orderObject;

    return (
        <Col xs={12} md={4}>
        <Card className='h-100' style={{margin:"1.5em"}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p> Type of Services : {type}</p>
                <button className='offer-btn'>Delete</button>
            </Card.Body>
        </Card>
        </Col>
    )
}
export default YourCartCard;