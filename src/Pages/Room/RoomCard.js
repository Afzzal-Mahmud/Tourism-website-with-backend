import React from "react";
import './RoomCard.css'
import Card from "react-bootstrap/Card";
import  Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// import { Facebook, Google, Twitter } from "bootstrap-icons";

function RoomCard({roomObject}) {
    // const {name, image, description} = roomObject;

    return (
        <Col xs={12} md={4}>
        <Card style={{margin:"1.5em"}}>
            <Card.Img variant="top" src="https://i.ibb.co/1JfRTRV/images-4.jpg" />
            <Card.Body>
                <Card.Title>Amaizing title</Card.Title>
                <p>this is the Amaizing description</p>
                <div className="grid-icon">
                    <p><i class="bi bi-facebook"></i> facebook</p>
                    <p><i class="bi bi-wifi"></i> free wifi</p>
                    <p><i class="bi bi-basket-fill"></i> fresh fruit</p>
                    <p><i class="bi bi-diagram-3-fill"></i> drone view</p>
                    <p><i class="bi bi-music-note-beamed"></i> speacker</p>
                    <p><i class="bi bi-globe2"></i> global</p>
                </div>
                <button className='offer-btn'>Book Now</button>
                {/* <Link to='/login'><button className='offer-btn'>Book Now</button></Link> */}
            </Card.Body>
        </Card>
        </Col>
    )
}
export default RoomCard;