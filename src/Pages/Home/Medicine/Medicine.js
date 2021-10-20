import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Medicine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faCapsules} from '@fortawesome/free-solid-svg-icons'

const Medicine = ({medicine}) => {
    const{id, name, price, description, img } = medicine;
    return (
        <div>
            {/* --------Single Medicine------ */}
            <Card>
            <Card.Title>
                <span className="text-danger"><FontAwesomeIcon icon={faCapsules}/></span>
                <span className="text-success fw-bold fs-4"> {name}</span>
            </Card.Title>
    
            <div className='mx-auto border-bottom border-2 border-danger' style={{ width: '60%' }}>
            <Card.Img variant="top" src={img} />
            </div>
            <Card.Body>
            <Card.Text>
            <span className="text-primary"><FontAwesomeIcon icon={faBookMedical}/></span> {description.slice(0,150)}
            </Card.Text>
            </Card.Body>
            <h2>Price: ${price}</h2>
            <div className="pb-4">
            <Link to ={`/medidetails/${id}`}>
                <Button variant="primary">Details about {name}</Button>
            </Link>
            </div>
            </Card>
        </div>
    );
};

export default Medicine;