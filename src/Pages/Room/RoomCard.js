import React from "react";
import './RoomCard.css'
import Card from "react-bootstrap/Card";
import  Col from "react-bootstrap/Col";
import axios from 'axios'
import useAuth from "../../Hooks/useAuth";

function RoomCard({roomObject}) {
    const {user} = useAuth()
    const {_id,name, image, description} = roomObject;

    function addRoom(id) {
        const roomItem = roomObject;
        roomItem.email = user.email;
        roomItem.type = "Hotel room"
        axios.post('http://localhost:5000/order',roomItem)
        .then(res =>{
            console.log(res)
            if(res.data.insertedId){
                alert('room added successfully')
            }
        })
    }

    return (
        <Col xs={12} md={4}>
        <Card className='h-100' style={{margin:"1.5em"}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>{description}</p>
                <div className="grid-icon">
                    <p><i class="bi bi-facebook"></i> facebook</p>
                    <p><i class="bi bi-wifi"></i> free wifi</p>
                    <p><i class="bi bi-basket-fill"></i> fresh fruit</p>
                    <p><i class="bi bi-diagram-3-fill"></i> drone view</p>
                    <p><i class="bi bi-music-note-beamed"></i> speacker</p>
                    <p><i class="bi bi-globe2"></i> global</p>
                </div>
                <button onClick={() =>addRoom(_id)} className='offer-btn'>Book Now</button>
            </Card.Body>
        </Card>
        </Col>
    )
}
export default RoomCard;