import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { Link } from 'react-router-dom';
import Calendar from './Calendar';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/doctors`)
      .then((res) => setDoctors(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    
    
    <div className='container'>
        <h1 className='text-center my-3'>Doctors</h1>
        
      {doctors.map((doctor) => (

<>
<Card id='gigidoctors'>
<Link
      to={`/doctors/${doctor._id}`}
      style={{ textDecoration: "none" }}
       className="text-dark"
        >
      <Card.Header><h3>{doctor.name}</h3></Card.Header>
      </Link>
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

       

        < Button variant="success" href={`/doctors/${doctor._id}`} >See doctor's profile</Button>
        
      </Card.Body>

      <Link
           to={`/doctors/${doctor._id}`}
                                        style={{ textDecoration: "none" }}
                                        className="text-dark"
                                        >

      <Card.Img className="img-thumbnail" src={ doctor.image} />
      </Link>
    </Card>
<br/>

</>
    ))}

    </div>
  );
}

export default Doctors;
