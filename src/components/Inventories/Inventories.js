import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://lit-sierra-31035.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);

    return (
        <div id='inventories'>
            <h1 className='text-center'>Our Inventories</h1>
            <div className="inventories-container">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>).slice(0, 6)
                }
            </div>
            <div className='d-flex justify-content-center mb-2'>
                <Link to='/manageInventory'>
                    <Button variant="primary">Manage Inventories</Button>
                </Link>
            </div>
        </div>
    );
};

export default Inventories;