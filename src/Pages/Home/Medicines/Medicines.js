import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Medicine from '../Medicine/Medicine';
import product1 from '../../../images/product-1.png';
import product2 from '../../../images/product-2.png'

const Medicines = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect( () => 
    {
        fetch('./medicines.json')
        .then(res => res.json())
        .then(data => setMedicines(data))
    },[])
    return (
        <div>
            {/* -------Images-------- */}
            <Row className="container pt-5 g-4 mx-auto">
                <div className="col-md-6">
                    <img src={product1} alt="" style={{ width:'100%' }}/>
                </div>
                <div className="col-md-6">
                    <img src={product2} alt="" style={{ width:'100%' }} />
                </div>
            </Row>
            {/* --------Producr------- */}
            <div className=" container mt-5">
                <Row xs={1} md={3} className="g-4 mb-4">
                {
                    medicines.map(medicine => <Medicine
                    key={medicine.id}
                    medicine={medicine}
                    ></Medicine>)
                } 
                </Row>
            </div>
        </div>
    );
};

export default Medicines;
