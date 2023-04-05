import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { Link } from "react-router-dom";
function Clinics() {
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/clinics`)
      .then((res) => setClinics(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {clinics?.map((clinic) => (


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ clinic.image1} />
      <Card.Body>
        <Card.Title>{clinic.name}</Card.Title>
        <Card.Subtitle>{clinic.specialty}</Card.Subtitle>
        <Card.Text>
         {clinic.address}
        </Card.Text>
        <Card.Text>
         {clinic.description}
        </Card.Text>
        <Card.Text>
         {clinic.telNumber}
        </Card.Text>
        <img src={clinic.image} alt={clinic.name}/>
      </Card.Body>

    </Card>

    ))}

    </div>
  );
}

export default Clinics;
