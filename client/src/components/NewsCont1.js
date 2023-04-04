import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import INews1 from "../images/news_1.jpg"

function NewsCont1() {
  return (
    <div className="container my-5" id="giginews">
    <Card>
    <Card.Header>News of the day</Card.Header>

    <div class="row align-items-center">
    <div class="col">
    <Card.Body>
      <Card.Title className='mb-3'>Lithium in Water Supply Linked to Uptick in Autism Risk</Card.Title>
      <Card.Text className='pb-3'>
      Women who drink tap water containing higher levels of lithium are at higher risk of their children being diagnosed with autism later in life. Researchers found as lithium concentrations increased in drinking water, so too did the risk of ASD diagnosis.
      </Card.Text>
      <Button variant="btn btn-outline-success" className="gigibtn">Read more</Button>
    </Card.Body>
    </div>
    <div class="col">
    <img src={INews1} className="img-fluid" alt="..." />
    </div>   

    </div>

  </Card>
  </div>
  )
}

export default NewsCont1