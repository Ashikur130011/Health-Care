import React from 'react';
import { Row } from 'react-bootstrap';
import about1 from '../../../images/img-about-us-01.png';
import about2 from '../../../images/img-about-us-02.png';
import about3 from '../../../images/about-3.png'

const AboutUs = () => {
    return (
        <div>
            <div className="container mt-5">
                {/* -------About Better Life---- */}
                <h2 className=" border-bottom pb-2 border-2 border-warning">About <span className="text-primary">Better Life</span></h2>
                <h6>Welcome to better Life.medical.com, a convenient way for you to order commoneveryday medical and personal care items. Our team is made up of clinicians, researchers, engineers, financial experts and 1,200 direct sales representatives with outstanding expertise. They know the healthcare business from the bottom up and top down.</h6>
                <p>We’re happy to help. If you have any questions regarding a product or an order, please feel free to reach out to us at info@domain.com.</p>
            {/* --------Feature-img------- */}
                <div>
                    <Row className=" g-4 my-5">
                        <div className="col-lg-4 "><img src={about1} alt=""  /></div>
                        <div className="col-lg-4 "><img src={about3} style={{ width:'100%' }} alt="" /></div>
                        <div className="col-lg-4"><img src={about2} alt="" /></div>
                    </Row>
                </div>
            {/* ---------Why Choose------- */}
                <div className="row">
                    <h1 className="text-start fw-bold mb-5">Why Choose Us?</h1>
                    <div className="col-md-4">
                        <h6 className="fw-bold  border-bottom pb-2 border-2 border-primary">24/7 Support</h6>
                        <p>Delivering 24-hour customer service is an exciting challenge to solve. It typically means your business is expanding or you are taking on larger customers..</p>              
                    </div>
                    <div className="col-md-4">
                        <h6 className="fw-bold border-bottom pb-2 border-2 border-warning">Free Shipping</h6>
                        <p>By providing numerous shipping options, an online retailer can capitalize on the booming ecommerce experience to generate revenue streams through increased sales.</p>              
                    </div>
                    <div className="col-md-4">
                        <h6 className="fw-bold border-bottom pb-2 border-2 border-success">Refund Anytime</h6>
                        <p>Don’t worry, you can return items in store, by post or via our online portal. The refund will be issued on the method of payment you used.</p>              
                    </div>
                </div>
                {/* -------Extra Text------- */}
                <div className="p-5">
                    <h1 className="border-bottom border-2 border-danger">We Are Available. Interested in Collaboration?</h1>
                    <h2 className="text-success ">Get In Touch</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;