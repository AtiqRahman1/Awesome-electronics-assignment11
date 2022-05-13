import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);

    return (
        <div>
            <h1>Our Inventories</h1>
            <div className="inventories-container">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default Inventories;