import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RoomCard from "./RoomCard";

function Room() {
    const [rooms,setRooms] = useState([])

    useEffect(()=>{
        fetch('https://protected-gorge-97772.herokuapp.com/userorder')
        .then(Response => Response.json())
        .then(data => {
            setRooms(data)
            console.log(data)
        })
    },[])
    return (
        <Container>
            <Row>
            
                    {
                        rooms.map(room => <RoomCard
                        key={room.name}
                        roomObject = {room}
                        ></RoomCard>)
                    }
                
            </Row>
        </Container>

    )
}
export default Room;