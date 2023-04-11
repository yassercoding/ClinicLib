import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";

function Clinics() {
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/clinics`)
      .then((res) => setClinics(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    
    
    <div className='container'>
        <h1 className='text-center my-3'> Clinics</h1>
        
      {clinics.map((clinic) => (

<>
<Card>
      <Card.Header><h3>{clinic.name}</h3></Card.Header>
      
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
      <Card.Img variant="bottom" src={ clinic.image} />
    </Card>
<br/>

</>
    ))}

    </div>
  );
}

export default Clinics;
