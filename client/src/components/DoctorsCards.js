import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";


function DoctorsCards() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
      axios
        .get(`/api/doctors`)
        .then((res) => setDoctors(res.data))
        .catch((e) => console.log(e));
    }, []);
  
    return (
      
        <><>
            <Container fluid className="mt-2  p-4 y">
            <div className="col-sm-12 green-top"><h1 className='text-center mb-2 '> Latest registered doctors</h1></div>
            
                <Row className="justify-content-center" id='gigicards'>
                <br/>
                    {doctors.map((doctor) => (
                        <Card
                            style={{ width: "18rem", backgroundColor: "transparent" }}
                            className="m-2 border-0 "
                            key={doctor.id}>
                                <Link
                                        to={`/doctors/`}
                                        style={{ textDecoration: "none" }}
                                        className="text-dark"
                                        >
                            <Card.Img variant="top" src={doctor.image} />
                            </Link>
                            <Card.Body  className='text-bg-light'>
                                <Card.Title>
                                    <Link
                                        to={`/doctors/`}
                                        style={{ textDecoration: "none" }}
                                        className="text-dark"
                                        >
                                        {doctor.name}
                                    </Link>
                                </Card.Title>
                                
                            </Card.Body>
                            <ListGroup>
      <ListGroup.Item className='text-bg-success'><strong>Specialty </strong>{doctor.specialty}</ListGroup.Item>
      <ListGroup.Item className='text-bg-light'><strong>Address </strong>{doctor.address}</ListGroup.Item>
      <ListGroup.Item className='text-bg-success'><strong>Phone </strong>{doctor.telNumber}</ListGroup.Item>
    </ListGroup> 
                        </Card>
                    ))}
                </Row>
            </Container>
        </></>
    );
  }

export default DoctorsCards