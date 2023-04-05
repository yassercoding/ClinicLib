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
        <Card.Title>{clinic.field} Clinic</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Dr. {clinic.first_name1 } {clinic.last_name1 }</ListGroup.Item>
        <ListGroup.Item>Dr. {clinic.first_name2 } {clinic.last_name2 }</ListGroup.Item>
        <ListGroup.Item>{clinic.adress }</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 
    
    ))} 

    </div>
  );
}

export default Clinics;