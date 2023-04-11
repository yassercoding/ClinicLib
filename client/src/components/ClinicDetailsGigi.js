import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { useParams } from 'react-router-dom';



function ClinicDetailsGigi() {
    const [clinic, setClinic] = useState([]);
    const {id} = useParams();
    useEffect(() => {
      axios
        .get(`/api/clinics/${id}`)
        .then((res) => setClinic(res.data))
        .catch((e) => console.log(e));
    }, []);


  return (

    
    <div className='container'>
        <br/>
        <div className="col-sm-12 green-top"><h1 className='text-center my-3'>Get to know the clinic</h1></div>
        
      

<>
<Card id='gigidoctors'>
      <Card.Header><h2 className=' my-3'>{clinic.name}</h2></Card.Header>
      
      <Card.Body>
        <Card.Title>Specialty - {clinic.specialty}</Card.Title>
        <Card.Text>
        {clinic.description}
        </Card.Text>
        <Card.Title>Adress</Card.Title>
        <Card.Text>
        {clinic.address}
        </Card.Text>
        <Card.Title>Phone</Card.Title>
        <Card.Text>
        {clinic.telNumber}
        
        </Card.Text>
        < Button variant="success" href={clinic.url} target='_blank'>Visit clinic's website</Button>
        
      </Card.Body>
      <Card.Img className="img-thumbnail" src={ clinic.image} />
      <div className="col-sm-12 green-top"><h1 className='text-center my-1'>ClinicLib</h1></div>
    </Card>
<br/>

</>
   

    </div>
  );
}

export default ClinicDetailsGigi;