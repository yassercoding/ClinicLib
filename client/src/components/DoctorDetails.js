import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { useParams } from 'react-router-dom';
import Calendar from './Calendar';
import Modal from 'react-bootstrap/Modal';
import { Telephone,GeoAlt, ClipboardPlus,Bookmark,CalendarRange } from 'react-bootstrap-icons';


function DoctorsDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Card.Title><ClipboardPlus color="green" /> Specialty - {doctor.specialty}</Card.Title>
        <Card.Text>
        {doctor.description}
        </Card.Text>
        <Card.Title><GeoAlt color="green" /> Adress</Card.Title>
        <Card.Text>
        {doctor.address}
        </Card.Text>
        <Card.Title><Telephone color="green" /> Phone number</Card.Title>
        <Card.Text>
        {doctor.telNumber}
        
        </Card.Text>
        <Card.Title> <CalendarRange color="green" /> Availability</Card.Title>
        <Calendar />
        <br/>
        < Button variant="success" onClick={handleShow} ><Bookmark /> Book an appointment</Button>
        
      </Card.Body>
      <Card.Img className="img-thumbnail" src={ doctor.image} />
      <div className="col-sm-12 green-top"><h1 className='text-center my-1'>ClinicLib</h1></div>
    </Card>
<br/>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'><h3>Appointment confirmation</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body><h6><strong>Whaattt, your appointment is confirmed!</strong></h6></Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

</>
   

    </div>
  );
}

export default DoctorsDetails;
