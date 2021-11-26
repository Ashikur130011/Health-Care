 import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css'
 
 const NotFound = () => {
     return (
       <div>
         <Link to="/">
           <Button className="fw-bold m-3 fs-3 bg-danger">
             <FontAwesomeIcon icon={faArrowCircleLeft} /> Go Back
           </Button>
         </Link>

         <div className="notfound">
           <img src="/notFound.png" alt="notFound img" />
         </div>
       </div>
     );
 };
 
 export default NotFound;