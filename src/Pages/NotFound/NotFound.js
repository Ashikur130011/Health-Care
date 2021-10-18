 import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
 const NotFound = () => {
     return (
         <div>
             
             <Link to="/">
                <Button className="fw-bold m-3 fs-3 bg-danger">
                <FontAwesomeIcon icon={faArrowCircleLeft} /> Go Back
                </Button>
             </Link>
             
             <img src="/notFound.png" alt="notFound img" />
         </div>
     );
 };
 
 export default NotFound;