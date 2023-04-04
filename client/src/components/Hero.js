import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from 'react-router-dom';


export default function Hero() {
    return (
      <div id="gigihero">
        <Container fluid>
          &nbsp;
          <Container id="gigihero2">
            <div className="hero-main-container">
              <Row className="py-5">
                <div>
                 <h3 className='my-5'>With Cliniclib, you can easily book appointments and live consultations with your preferred doctors and clinics. Whether you need a routine checkup, a specialist consultation, or urgent medical attention, Cliniclib's makes it easy to find and book the care you need, when you need it.</h3>
                </div>
                <div className="d-flex justify-content-center">
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="movie-search-bar"
                      placeholder="Doctor/Clinic search"
                      aria-label="Movie search"
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      variant="info"
                      className="movie-search-bttn"
                      id="button-addon2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </Button>
                  </InputGroup>
                </div>
  
                <h2 className="mb-5">
                  Search for a doctor or a clinic
                </h2>
                <div class="mx-auto col-10 col-md-8 col-lg-6">
                <Link to="/news1">
                  <Button variant="btn btn-outline-success" className="gigibtn my-5">
                    Read the latest healthcare news
                  </Button>{" "}
                  </Link>
                </div>
              </Row>
            </div>
          </Container>
          &nbsp;
        </Container>
      </div>
    );
  }