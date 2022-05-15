import React, { useEffect, useState } from 'react';


const ItemDetail = () => {

    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [])
    return (
        <div>
            <h2>Inventory item details: {item._id}</h2>
        </div>
    );
};

export default ItemDetail;