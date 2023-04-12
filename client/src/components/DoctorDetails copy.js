import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { useParams } from 'react-router-dom';
import Calendar from './Calendar';

function DoctorsDetails() {
  const [doctor, setDoctor] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`/api/doctors/${id}`)
      .then((res) => setDoctor(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    
    
    <div className='container'>
        <br/>
        <div className="col-sm-12 green-top"><h1 className='text-center my-3'>Get to know your doctor</h1></div>
        
      

<>
<Card id='gigidoctors'>
      <Card.Header><h2 className=' my-3'>{doctor.name}</h2></Card.Header>
      
      <Card.Body>
        <Card.Title>Specialty - {doctor.specialty}</Card.Title>
        <Card.Text>
        {doctor.description}
        </Card.Text>
        <Card.Title>Adress</Card.Title>
        <Card.Text>
        {doctor.address}
        </Card.Text>
        <Card.Title>Phone</Card.Title>
        <Card.Text>
        {doctor.telNumber}
        
        </Card.Text>
        <Card.Title>Availability</Card.Title>
        <Calendar />
        <br/>
        < Button variant="success" onClick={()=> alert('Your appointment is confirmed')} >Book an appointment</Button>
        
      </Card.Body>
      <Card.Img className="img-thumbnail" src={ doctor.image} />
      <div className="col-sm-12 green-top"><h1 className='text-center my-1'>ClinicLib</h1></div>
    </Card>
<br/>

</>
   

    </div>
  );
}

export default DoctorsDetails;
