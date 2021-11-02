import React from 'react';
import './CarouselMain.css'
import Carousel from 'react-bootstrap/Carousel';/* import images */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Offer from '../../../Pages/Offer/Offer';
import { Link } from 'react-router-dom';
/* carousel banner components */
function CarouselMain() {
    return (
        <>
            <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/3F5tvmt/carousel1.jpg"
                    alt="First slide"
                />
                <div className='carousel-caption'>
                    <h3 className='fw-bold'>Mountain Walk</h3>
                    <p className='hide-mobile'>Walking to the mountain is a new experience with wild animal</p>
                    {/* carousel btn container */}
                    <div className="caption-btn">
                    <Link to='/membership'><Button className='fw-bold me-4 hide-mobile'>Pricing</Button></Link>

                    <Link to='/yourcart'><Button className='fw-bold 
                    primary-background 
                    btn-border'
                    >Your Collection</Button></Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Q6LbZz1/carousel3.jpg"
                    alt="Second slide"
                />

                <div className='carousel-caption'>
                    <h3 className='fw-bold'>Mountain View</h3>
                    <p className='hide-mobile'>If you are thinking about how the mountain look come and join</p>
                    {/* carousel btn container */}
                    <div className="caption-btn">
                    <Link to='/membership'><Button className='fw-bold me-4 hide-mobile'>Pricing</Button></Link>

                    <Link to='/yourcart'><Button className='fw-bold 
                    primary-background 
                    btn-border'
                    >Your Collection</Button></Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/4JqTnp5/carousel2.jpg" 
                    alt="Third slide"
                />

                <div className='carousel-caption'>
                    <h3 className='fw-bold'>Fresh Air</h3>
                    <p className='hide-mobile'>You may looking for the freesh air so hear the mountain calling you</p>
                    {/* carousel btn container */}
                    <div className="caption-btn">
                        <Link to='/membership'><Button className='fw-bold me-4 hide-mobile'>Pricing</Button></Link>

                        <Link to='/yourcart'><Button className='fw-bold 
                        primary-background 
                        btn-border'
                        >Your Collection</Button></Link>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        <Container>
            <Offer></Offer>
        </Container>
        </>
    )
}
export default CarouselMain;