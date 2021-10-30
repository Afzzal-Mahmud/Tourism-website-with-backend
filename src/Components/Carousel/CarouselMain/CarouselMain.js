import React from 'react';
import './CarouselMain.css'
import Carousel from 'react-bootstrap/Carousel';/* import images */
import Carousel1 from '../CarouselImage/carousel1.jpg'
import Carousel2 from '../CarouselImage/carousel2.jpg'
import Carousel3 from '../CarouselImage/carousel3.jpg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import OfferCard from '../../../Pages/Offer/OfferCard';
/* carousel banner components */
function CarouselMain() {
    return (
        <>
            <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel1}
                    alt="First slide"
                />
                <div className='carousel-caption'>
                    <h3 className='fw-bold'>Mountain Walk</h3>
                    <p className='hide-mobile'>Walking to the mountain is a new experience with wild animal</p>
                    {/* carousel btn container */}
                    <div className="caption-btn">
                        <Button className='fw-bold me-4  hide-mobile'>Pricing</Button>
                        <Button className='fw-bold 
                        primary-background 
                        btn-border ms-4'
                        >See Campain</Button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel2}
                    alt="Second slide"
                />

                <div className='carousel-caption'>
                    <h3 className='fw-bold'>Mountain View</h3>
                    <p className='hide-mobile'>If you are thinking about how the mountain look come and join</p>
                    {/* carousel btn container */}
                    <div className="caption-btn">
                        <Button className='fw-bold me-4 hide-mobile'>Pricing</Button>
                        <Button className='fw-bold 
                        primary-background 
                        btn-border'
                        >See Campain</Button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel3}
                    alt="Third slide"
                />

                <div className='carousel-caption'>
                    <h3 className='fw-bold'>Fresh Air</h3>
                    <p className='hide-mobile'>You may looking for the freesh air so hear the mountain calling you</p>
                    {/* carousel btn container */}
                    <div className="caption-btn">
                        <Button className='fw-bold me-4 hide-mobile'>Pricing</Button>

                        <Button className='fw-bold 
                        primary-background 
                        btn-border'
                        >See Campain</Button>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        <Container>
            <OfferCard></OfferCard>
        </Container>
        </>
    )
}
export default CarouselMain;