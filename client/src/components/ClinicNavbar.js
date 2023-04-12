import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/logo_1.png"
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import axios from '../axiosinstance';
import { useState, useEffect } from 'react';
function ClinicNavbar({ isLoggedin, setIsLoggedin }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get('/auth/loggedin-user')
      .then(res => {
        setUser(res.data);
        setIsLoggedin(true);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }, [isLoggedin]);
  const handleLogout = () => {
    axios.post('/auth/logout', {}).then(res => {
      console.log('Logged out');
      window.location.reload();
    });
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='my-clinic-nav'>
    <Container>
      <Navbar.Brand href="/"><img src={Logo} alt="Logo" className="d-inline-block align-top" width="90" height="90" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/doctors">Doctors</Nav.Link>
          <Nav.Link href="/clinics">Clinics</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/clinics/new">Add Clinic</Nav.Link>
          <Nav.Link href="/doctors/new">Add Doctor</Nav.Link>

        </Nav>
        <Nav>
        {user ? (
            <div className="header-user">
              <h6 className='text-white'>Hello {user.username}</h6>
              <Button variant="btn btn-success" onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className="gigi-spread">
          <Link to="/login">
            <Button
                    variant="btn btn-outline-success"
                    className=""
                    id="clinav-bttn">
                    Log in
                  </Button>
                  </Link>
                  <Link to="register">
                  <Button
                    variant="btn btn-outline-success"
                    className=" "
                    id="clinav-bttn">
                    Sign up
                  </Button>
                  </Link>
            </div>
          )}

          </Nav>



      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default ClinicNavbar
