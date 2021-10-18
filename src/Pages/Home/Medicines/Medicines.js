import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Medicine from '../Medicine/Medicine';

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
            <h1 className="text-start mb-4 container">Featured Products</h1>
            <div className=" container">
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
