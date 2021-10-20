import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCartPlus, 
    faGifts 
    } from '@fortawesome/free-solid-svg-icons';

const MediDetails = () => {
    const [medicines, setMedicines] = useState([]);
    const {medicineId} = useParams();
    console.log(medicines);
    useEffect( () => 
    {
        fetch('https://raw.githubusercontent.com/Ashikur130011/db.json/main/db.json')
        .then(res => res.json())
        .then(data => setMedicines(data))
    },[])

    const singleProduct=medicines.find(medicine=>medicine.id===parseInt(medicineId))
    console.log(singleProduct);
    return (
        <div className="container py-5">
            <div class="row">
                <div className="col-md-5">
                    <img src={singleProduct?.img} style={{ width: '100%' }} alt="" />
                </div>
                <div className="col-md-7">
                    <div class="card-body">
                        <h1 class="card-title text-primary">{singleProduct?.name}</h1>
                        <h3 className="text-success">Price: ${singleProduct?.price}</h3>
                        <h6 className="text-warning">75 in stock</h6>
                        <p class="card-text fw-bold">{singleProduct?.description}</p>
                        
                        <div className="d-flex justify-content-evenly">
                            <Button>Add to Cart <FontAwesomeIcon icon={faCartPlus}/></Button>
                            <Button>Buy Now <FontAwesomeIcon icon={faGifts}/></Button>
                        </div>
                        <div className="border-top border-2 border-danger m-4">
                        <h6>SKU: MEGA-SHOE-0578687</h6>
                        <h5>Category: {singleProduct?.category} & Anti-Itch</h5>
                        <h6>Tags: AspirinDoctorNurseThe scissorsVitamin</h6>
                        <h5>Brand: 3M Healthcare</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediDetails;