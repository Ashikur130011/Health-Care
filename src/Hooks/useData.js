import {useState, useEffect} from 'react';

const useData = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect( () => {
        fetch('./medicines.json')
        .then(res => res.json)
        .then(data => setMedicines(data))
    },[])

    return {
        medicines,
        setMedicines
    }
};

export default useData;