import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Medicine from '../Medicine/Medicine';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBookMedical, 
    faCalendarTimes, 
    faCapsules, 
    faGifts, 
    faMedkit ,
    faMoneyBill,
    faPlus,
    faRecycle,
    faStarHalfAlt,
    faTruck,
    faStar, 
    faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

// import { fsStar } from '@fortawesome/free-regular-svg-icons';


const Home = () => {

    const [medicines, setmedicines] = useState([])
    useEffect( () => {
        fetch('./medicines.json')
        .then(res => res.json())
        .then(data => setmedicines(data.slice(0,9)))
    },[])
    return (
        <div className="mb-lg-5">

            <Banner></Banner>

            <div className="home-container">
                <div className="container mb-5">
                    <div className="row">
                        {/* ------Feature Products----- */}
                        <div className="col-md-9">
                        <h1 className="text-start text-primary mb-4 container">Featured Products <FontAwesomeIcon icon={faMedkit}/></h1>
                            <Row xs={2} md={3} className="g-4 mb-4">
                                {
                                    medicines.map(medicine => <Medicine
                                    key={medicine.id}
                                    medicine={medicine}
                                    ></Medicine>)
                                } 
                            </Row>
                            <Link  to="/medicines">
                                <Button>See More Medicines <FontAwesomeIcon icon={faArrowCircleRight}/></Button>
                            </Link>
                        </div>

                 {/* -------offer part------- */}
    <div className="col-md-3">               
        <div className="me-2" >
            <h1 className="text-danger py-2">Today's Offer</h1>
                <Card>
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
                <div className="me-2 mt-5 pt-5" >
            <Card>
                <Card.Title>
                    <span className="text-danger"><FontAwesomeIcon icon={faCapsules}/></span>
                    <span className="text-success fw-bold fs-4"> Deodorizing</span>
                </Card.Title>
        
                <div className='mx-auto' style={{ width: '60%' }}>
                <Card.Img variant="top" src="https://i.ibb.co/kDmsvGw/Teqler-Theatre.jpg" />
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
            <div className="col-md-12 extra-card">
                            <h4 className="fw-bold fs-3 p-4 mt-5 text-success">Nutritional Supplements discount</h4>
                            <h1 className="text-danger">25% Off</h1>
                            
                        </div>
                </div>
                        </div>
                    </div>
                </div>
                {/* -------Offer-end-------- */}
                
                {/* -------Last Chance------- */}
                <div className="container bg-light ps-5">
                <h2 className="text-start text-danger py-3">Last chance to buy <FontAwesomeIcon icon={faPlus}/></h2>
                    <div className="row ">
                        <div className="col-md-12 p-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/ZK72vsm/Macdin-600.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                        <h5 className="text-success">Radiogardase</h5>
                                        <h5><span className="text-warning"><FontAwesomeIcon icon={faMoneyBill}/></span> $120</h5>
                                        <span className="text-warning">
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                        </span>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/qxz20fZ/Adant-Meiji.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                        <h5 className="text-success">Atenolol Tab</h5>
                                        <h5><span className="text-warning"><FontAwesomeIcon icon={faMoneyBill}/></span> $220</h5>
                                        <span className="text-warning">
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStarHalfAlt}/>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/fDbKcCL/Carbo-TS.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                        <h5 className="text-success">Merfeormin</h5>
                                        <h5><span className="text-warning"><FontAwesomeIcon icon={faMoneyBill}/></span> $240</h5>
                                        <span className="text-warning">
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    {/* ------------------ */}
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12 p-3">
                            <div className="row ">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/qNwfSWy/Livbilinic.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                        <h5 className="text-success">Cortef</h5>
                                        <h5><span className="text-warning"><FontAwesomeIcon icon={faMoneyBill}/></span> $200</h5>
                                        <span className="text-warning">
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStarHalfAlt}/>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/bXyrpk3/Ringerfundin.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="text-success">Clindamycin</h5>
                                            <h5><span className="text-warning"><FontAwesomeIcon icon={faMoneyBill}/></span> $140</h5>
                                            <span className="text-warning">
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStarHalfAlt}/>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://i.ibb.co/kDmsvGw/Teqler-Theatre.jpg" style={{ width: '100%' }} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                        <h5 className="text-success">Tremeterence</h5>
                                        <h5><span className="text-warning"><FontAwesomeIcon icon={faMoneyBill}/></span> $200</h5>
                                        <span className="text-warning">
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStar}/>
                                           <FontAwesomeIcon icon={faStarHalfAlt}/>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* -------last Chance------- end */}
                        
                    </div>
                    {/* ---------Extra Feature--------- */}
                    <div className="row container mx-auto btn-light py-3 mt-5">
            <div className="col-md-3 border-end border-2 border-warning">
                <div className="row">
                <div className="col-3 align-items-center">
                <h1 className="text-warning"><FontAwesomeIcon icon={faTruck}/></h1>
                </div>
                <div>
                <h4>SHIPPING WORLDWIDE</h4>
                <p>Ut enim ad minim veniam</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 border-end border-2 border-warning">
            <div className="row">
                <div className="col-3 align-items-center ">
                <h1 className="text-warning"><FontAwesomeIcon icon={faGifts}/></h1>
                </div>
                <div>
                <h4>ORDER TRACKING</h4>
                <p>Ut enim ad minim veniam</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 border-end border-2 border-warning">
            <div className="row">
                <div className="col-3 align-items-center">
                <h1 className="text-warning"><FontAwesomeIcon icon={faCalendarTimes}/></h1>
                </div>
                <div>
                <h4>FREE RETURNS</h4>
                <p>Ut enim ad minim veniam</p>
                </div>
                </div>
            </div>
            <div className="col-md-3">
            <div className="row">
                <div className="col-3 align-items-center">
                <h1 className="text-warning"><FontAwesomeIcon icon={faRecycle}/></h1>
                </div>
                <div>
                <h4>ORDER TRACKING</h4>
                <p>Ut enim ad minim veniam</p>
                </div>
                </div>
            </div>
        </div>       
        </div>
    </div>
    </div>
    );
};

export default Home;