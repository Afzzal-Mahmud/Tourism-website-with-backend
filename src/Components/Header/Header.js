import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
/* import RootCss from RootCss */
import './RootCss.css';
/* padding-y utility came from App.css */
function Header() {
  return (
    <Navbar className='padding-y' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className='fw-bold'>Hikei <span className='primary-color'>!</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Recommended</Nav.Link>
            <Nav.Link >Best Plan</Nav.Link>
            <Nav.Link >Membership</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >
              <Button className='primary-background fw-bold btn-border'>Log In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;