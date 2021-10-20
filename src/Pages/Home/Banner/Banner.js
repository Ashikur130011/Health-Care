import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
 

const Banner = () => {
    return (
        <div>
            <div className="banner-body pb-5">
                <div className="container">
                    <h1 className="banner-h1 pt-5">Your medication, delivered</h1>
                    <h6>Say goodbye to all your healthcare worries with us</h6>
                    <br />
                    {/* -------Input------ */}
            <InputGroup className=" banner-input mb-3 w-50 mx-auto">
              <FormControl className="p-2"
              placeholder="Search for product..."
              aria-label="Search for product"
              aria-describedby="basic-addon2"
              />
              <Button className="w-25 input-btn text-white ">
              <span><FontAwesomeIcon icon={faSearch}/> Search</span>
              </Button>
            </InputGroup>
           </div>
            </div>
            {/* -------extra Feture------- */}
            <Container className="my-5">
                <Row>
                    <Col className="bg-success text-light p-3" xs={6} md={4}>
                        <div>
                            <h4>DON'T MISS</h4>
                            <h2>Huge Sale 70%</h2>
                            <h6>SHOP NOW</h6>
                        </div>
                    </Col>
                    <Col className="bg-warning p-3" xs={6} md={4}>
                        <div>
                            <h4>COMMITMENT</h4>
                            <h2>100% Sequre delivery</h2>
                            <h6>READ MORE</h6>
                        </div>
                    </Col>
                    <Col className="bg-primary text-light p-3" xs={6} md={4}>
                        <div>
                            <h4>FREE SHIPPING</h4>
                            <h2>35% OFF</h2>
                            <h6>SHOP NOW</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
