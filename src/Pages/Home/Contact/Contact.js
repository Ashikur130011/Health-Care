import React from 'react';
import { Col, Form, Row, Button, Card } from 'react-bootstrap';


const states = [
    {
        img: 'https://i.ibb.co/1nFH77S/alaska.png',
        name: 'Alaska Badalas',
        address: '2593 Timbercrest Road, Chisana',
	    phone_1: '0123-456-789'
    },
    {
        img: 'https://i.ibb.co/93d28yt/florida.png',
        name: 'Florida',
        address: '1203, Town Center, Florida',
	    phone_1: '0123-456-799'
    },
    {
        img: 'https://i.ibb.co/9TG3g62/newWork.png',
        name: 'NewYork City',
        address: '-2593 Timbercrest Road, Chisana',
	    phone_1: '0123-456-989'
    },
    {
        img: 'https://i.ibb.co/qFqjcTD/ohio.png',
        name: 'Ohio',
        address: '70 Bowman St. South Windsor',
	    phone_1: '0123-456-909'
    }
    
]

const Contact = () => {
    return (
        <div>
            <div className="row container">
                <div className="col-md - 3 my-4">
                    <h2>Got any</h2>
                    <h2>Questions?</h2>
                    <br />
                    <p>1203, Town Center,
                       Drive FL 33458 United States
                    </p>
                    <p>
                    0123-456-789
                    841 123 456 78
                    </p>
                </div>
                <div className="col-md - 9">
                <Form style={{ width: '80%' }} className="contact-form p-3 mx-auto">
                    <Form>
                        <Row className="mb-4">
                        <Form.Label className=" fw-bold">Name</Form.Label>
                            <Col>
                            <Form.Control placeholder="name*" />
                            </Col>
                            
                        </Row>
                    </Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fw-bold">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Label className='fw-bold'>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Add your message"  rows={3} />
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="fw-bold" type="checkbox" label="Check me out" />
                        </Form.Group>
                        
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            {/* ------ */}

            <div className="container py-5">
                <h2>Our Shop</h2>
            <Row xs={2} md={4} className="g-2">
  {states.map( state => (
    <Col>
      <Card>
        <Card.Img variant="top" src={state.img} />
        <Card.Body>
          <Card.Title>{state.name}</Card.Title>
          <p>{state.address}</p>
          <p>{state.phone_1}</p>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
            </div>
        </div>
    );
};

export default Contact;