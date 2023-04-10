import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function ClinicsCards() {
    const [clinics, setClinics] = useState([]);
    useEffect(() => {
      axios
        .get(`/api/clinics`)
        .then((res) => setClinics(res.data))
        .catch((e) => console.log(e));
    }, []);
  
    return (
      
        <><>
            <Container fluid className="mt-2  p-4 y">
            <div className="col-sm-12 green-top"><h1 className='text-center mb-2 '> Latest registered clinics</h1></div>
            
                <Row className="justify-content-center" id='gigicards'>
                <br/>
                    {clinics.map((clinic) => (
                        <Card
                            style={{ width: "18rem", backgroundColor: "transparent" }}
                            className="m-2 border-0 "
                            key={clinic.id}>
                                <Link
                                        to={`/clinics/`}
                                        style={{ textDecoration: "none" }}
                                        className="text-dark"
                                        >
                            <Card.Img variant="top" src={clinic.image} />
                            </Link>
                            <Card.Body  className='text-bg-light'>
                                <Card.Title>
                                    <Link
                                        to={`/clinics/`}
                                        style={{ textDecoration: "none" }}
                                        className="text-dark"
                                        >
                                        {clinic.name}
                                    </Link>
                                </Card.Title>
                                
                            </Card.Body>
                            <ListGroup>
      <ListGroup.Item className='text-bg-success'><strong>Specialty </strong>{clinic.specialty}</ListGroup.Item>
      <ListGroup.Item className='text-bg-light'><strong>Address </strong>{clinic.address}</ListGroup.Item>
      <ListGroup.Item className='text-bg-success'><strong>Phone </strong>{clinic.telNumber}</ListGroup.Item>
      < Button variant="outline-secondary" href={clinic.url} target='_blank'>Visit clinic's website</Button>
    </ListGroup> 
    
                        </Card>
                    ))}
                </Row>
            </Container>
        </></>
    );
  }

export default ClinicsCards