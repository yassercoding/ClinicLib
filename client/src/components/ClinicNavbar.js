import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/logo_1.png"
import Button from 'react-bootstrap/esm/Button';


function ClinicNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='my-clinic-nav'>
    <Container>
      <Navbar.Brand href="/home"><img src={Logo} alt="Logo" className="d-inline-block align-top" width="90" height="90" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#link">Doctors</Nav.Link>
          <Nav.Link href="#link">Clinics</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
         
        </Nav>

        <Nav>
            
            <Button
                    variant="btn btn-outline-success"
                    className="mx-4 "
                    id="clinav-bttn">
                    Log in
                  </Button>

                  <Button
                    variant="btn btn-outline-success"
                    className="mx-4 "
                    id="clinav-bttn">
                    Sign up
                  </Button>
          </Nav>



      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default ClinicNavbar