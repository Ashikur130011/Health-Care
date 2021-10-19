import React from 'react';
import { Col, Form, Row, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAddressCard, 
    faBuilding, 
    faComment, 
    faPhone, 
    faTasks 
    } from '@fortawesome/free-solid-svg-icons';

    /* -------Fake Data------- */
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
        address: '70 Bowman St. South Windsor',
	    phone_1: '0123-456-989'
    },
    {
        img: 'https://i.ibb.co/qFqjcTD/ohio.png',
        name: 'Ohio',
        address: '2593 Timbercrest Road, Chisana',
	    phone_1: '0123-456-909'
    }
    
]

const Contact = () => {
    return (
        <div>
            <div className="row container pt-5">
                <div className="col-md-4 my-4">
                    <h2>Got any</h2>
                    <h2 className="border-bottom border-2 border-danger">Questions?</h2>
                    <br />
                    <p><FontAwesomeIcon icon={faAddressCard}/>1203, Town Center,
                       Drive FL 33458 United States
                    </p>
                    <p><FontAwesomeIcon icon={faPhone}/>
                    0123-456-789,
                    841 123 456 78
                    </p>
                </div>
                <div className="col-md-8">
                    <h1>Contact Us <FontAwesomeIcon icon={faTasks}/></h1>
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

                        <Form.Label className='fw-bold mb-3'>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Add your message"  rows={3} />
                        
                            <Button className="mt-3" variant="success" type="submit">
                                Message <FontAwesomeIcon icon={faComment}/>
                            </Button>
                        </Form>
                </div>
            </div>
            {/* --------Shop------- */}

            <div className="container py-5">
                <h2>Our Shop <FontAwesomeIcon icon={faBuilding}/></h2>
            <Row xs={2} md={4} className="g-2">
                {states.map( state => (
      
                <Col key={state.name}>
                    <Card>
                        <Card.Img variant="top" src={state.img} />
                        <Card.Body>
                        <Card.Title>{state.name}</Card.Title>
                        <p><FontAwesomeIcon icon={faAddressCard}/> {state.address}</p>
                        <p><FontAwesomeIcon icon={faPhone}/> {state.phone_1}</p>
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