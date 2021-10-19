import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-part">
            <div className="row container mx-auto ">
            <div className="col-md-3">
                <h1 className="text-primary">Better Life</h1>
                <p>Better Life is a good choice for all medical facilities, online pharmacy, raise awareness of (2019-nCoV).</p>
                <h5>Opentime : Monday - Friday: 9:00-20.00</h5>
            </div>
            <div className="col-md-3">
                <h2 className="text-warning">CUSTOMER CARE</h2>
                <h6>Terms</h6>
                <h6>Privacy</h6>
                <h6>Shipping Options</h6>
                <h6>My Account</h6>
                <h6>Return Policy</h6>
            </div>
            <div className="col-md-3">
                <h2 className="text-warning">QUICK SHOP</h2>
                <h6>Disposable Gloves</h6>
                <h6>Cleaning Scissor</h6>
                <h6>Scissors</h6>
                <h6>Pedometer</h6>
                <h6>Our Shop</h6>
            </div>
            <div className="col-md-3">
                <h2 className="text-primary">CONTACT US</h2>
                <h6>Address: 58 A, East Madison Street, Baltimore, Call us: (01) +911 45658687</h6>
                <h5>MD, USA 4508</h5>
                <p>betterlife@gmail.com</p>
            </div>
        </div>
        </div>
        
    );
};

export default Footer;