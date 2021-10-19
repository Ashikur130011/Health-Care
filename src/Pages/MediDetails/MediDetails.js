import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MediDetails = () => {
    const [medicines, setMedicines] = useState([]);
    const {medicineId} = useParams();

    useEffect( () => 
    {
        fetch('./medicines.json')
        .then(res => res.json())
        .then(data => setMedicines(data))
    },[])
    return (
        <div className="container">
            <h1>product id: {medicineId}</h1>
            <div class="row">
                <div className="col-md-5">
                    <img src="" alt="" />
                </div>
                <div className="col-md-7">
                <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
                </div>
               
            </div>
        </div>
    );
};

export default MediDetails;