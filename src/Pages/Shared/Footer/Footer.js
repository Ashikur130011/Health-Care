import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faUserClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-part">
            <div className="row container mx-auto py-3">
            <div className="col-md-3">
                <h1 className="footer-head">Better Life</h1>
                <p>Better Life is a good choice for all medical facilities, online pharmacy, raise awareness of (2019-nCoV).</p>
                <h6><FontAwesomeIcon icon={faUserClock
                }/> Opentime : Monday - Friday: 9:00-20.00</h6>
            </div>
            <div className="col-md-3">
                <h2 className="footer-head">CUSTOMER CARE</h2>
                <h6>Terms</h6>
                <h6>Privacy</h6>
                <h6>Shipping Options</h6>
                <h6>My Account</h6>
                <h6>Return Policy</h6>
            </div>
            <div className="col-md-3">
                <h2 className="footer-head">QUICK SHOP</h2>
                <h6>Disposable Gloves</h6>
                <h6>Cleaning Scissor</h6>
                <h6>Scissors</h6>
                <h6>Pedometer</h6>
                <h6>Our Shop</h6>
            </div>
            <div className="col-md-3">
                <h2 className="footer-head">CONTACT US</h2>
                <h6><FontAwesomeIcon icon={faAddressCard}/> Address: 58 A, East Madison Street, Baltimore, Call us: (01) +911 45658687</h6>
                <h5>MD, USA 4508</h5>
                <p><FontAwesomeIcon icon={faEnvelope}/> betterlife@gmail.com</p>
            </div>
        </div>
    </div>
        
    );
};

export default Footer;