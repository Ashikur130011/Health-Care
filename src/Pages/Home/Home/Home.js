import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Medicine from '../Medicine/Medicine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faCapsules, faMedkit } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

const Home = () => {

    const [medicines, setmedicines] = useState([])
    useEffect( () => {
        fetch('./medicines.json')
        .then(res => res.json())
        .then(data => setmedicines(data.slice(0,9)))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className="home-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                        <h1 className="text-start mb-4 container">Featured Products <FontAwesomeIcon icon={faMedkit}/></h1>
                <Row xs={2} md={3} className="g-4 mb-4">
                    {
                        medicines.map(medicine => <Medicine
                        key={medicine.id}
                        medicine={medicine}
                        ></Medicine>)
                    } 
                </Row>
                        </div>
                        {/* offer */}
                        <div className="col-md-3">
                            
                <div className="me-2" >
                <Card>
                    <h1>Today's Offer</h1>
            <Card.Title>
                <span className="text-danger"><FontAwesomeIcon icon={faCapsules}/></span>
                <span className="text-success fw-bold fs-4"> Potassium</span>
            </Card.Title>
    
            <div className='mx-auto' style={{ width: '60%' }}>
            <Card.Img variant="top" src="https://i.ibb.co/d0TSSBS/Lungsupport.jpg" />
            </div>
            <Card.Body>
            <Card.Text>
            <span className="text-primary"><FontAwesomeIcon icon={faBookMedical}/></span> Cefixime is a third generation semisynthetic cephalosporin antibiotic for oral administration. It is bactericidal against a broad spectrum of gram positive and gram negative bacteria at easily achievable plasma concentrations. It kills bacteria by interfering in the synthesis of bacterial cell wall. It is highly stable in the presence of Beta-lactamase enzyme.
            </Card.Text>
            </Card.Body>
            <h2>Price: $200</h2>
            <div className="pb-4">
            <Link to ={`/medidetails/`}>
                <Button variant="success">Add to cart</Button>
            </Link>
            </div>
            </Card>
                </div>
                        </div>
                    </div>
                </div>
                {/* --------------- */}
                
                <div className="container">
                <h2 className="text-start">Last chance to buy</h2>
                    <div className="row">
                        <div className="col-md-9 p-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/ZK72vsm/Macdin-600.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                        <h6>Card title</h6>
                                        <h5>price</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/ZK72vsm/Macdin-600.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                        <h6>Card title</h6>
                                        <h5>price</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/ZK72vsm/Macdin-600.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                        <h6>Card title</h6>
                                        <h5>price</h5>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 p-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/ZK72vsm/Macdin-600.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                        <h6>Card title</h6>
                                        <h5>price</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/ZK72vsm/Macdin-600.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                        <h6>Card title</h6>
                                        <h5>price</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/ZK72vsm/Macdin-600.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                        <h6>Card title</h6>
                                        <h5>price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 extra-card">
                            <h4>Nutritional Supplements discount</h4>
                            <h3>25% Off</h3>
                        </div>
                </div>
                

            </div>
            
            <Link  to="/medicines">
                <Button>See More Medicines</Button>
            </Link>

            
        </div>
    );
};

export default Home;