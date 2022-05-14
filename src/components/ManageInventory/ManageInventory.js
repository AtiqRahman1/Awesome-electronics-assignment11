import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import './ManageInventory.css';


const ManageInventory = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    return (
        <div>
            <h2 className='text-center text-secondary'>Manage Inventories</h2>
            <div className="manage-container">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default ManageInventory;