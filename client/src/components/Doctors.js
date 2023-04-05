import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { Link } from "react-router-dom";
function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/doctors`)
      .then((res) => setDoctors(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {doctors?.map((doctor) => (


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ doctor.image1} />
      <Card.Body>
        <Card.Title>{doctor.name}</Card.Title>
        <Card.Subtitle>{doctor.specialty}</Card.Subtitle>
        <Card.Text>
         {doctor.address}
        </Card.Text>
        <Card.Text>
         {doctor.description}
        </Card.Text>
        <Card.Text>
         {doctor.telNumber}
        </Card.Text>
        <img src={doctor.image} alt={doctor.name}/>
      </Card.Body>

    </Card>

    ))}

    </div>
  );
}

export default Doctors;
