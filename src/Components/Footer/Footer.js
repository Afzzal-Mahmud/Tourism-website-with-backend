import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return(
        <div className='footer'>
            <Container className='footer-main text-white'>
                <div className="footer-contact">
                    {/* the left side of the footer */}
                    <div className="contact-info">
                    <h3 className='fw-bold'>Haikei <span className='primary-color'>!</span> </h3>
                    <p>1901 Street Road Jaintapur Sylhet</p>
                    <p>Call : 017-123456789</p>
                    </div>
                    {/* item-image utility class comes from WhyChooseUs.css file */}
                    <div className="d-flex">
                    <i class="bi bi-facebook item-image me-4"></i>
                    <i class="bi bi-whatsapp item-image me-4"></i>
                    <i class="bi bi-youtube item-image me-4"></i>
                    <i class="bi bi-twitter item-image me-4"></i>
                    </div>
                </div>
                <div className="footer-link">
                    <h4>Explore</h4>
                    <div className="link-container">
                        <p><Link className='text-white' to='/home'>Home</Link></p>
                        <p><Link className='text-white' to='/recommended'>Recommended</Link></p>
                        <p><Link className='text-white' to='/bestplan'>Your Plan</Link></p>
                        <p><Link className='text-white' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Footer;