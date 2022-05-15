import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../hooks/useInventories';
import './ManageInventory.css';


const ManageInventory = () => {
    const [items, setItem] = useInventories();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItem(remaining);
                })
        }
    }

    return (
        <div>
            <h2 className='text-center text-secondary'>Manage Inventories</h2>
            <div className="manage-container">
                {
                    items.map(item => <Card key={item._id} className='my-2' style={{ width: '18rem', background: 'light' }}>

                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Price:${item.price}</Card.Text>
                            <Card.Text>
                                Quantity:{item.quantity}
                            </Card.Text>
                            <Card.Text>
                                Supplier Name:{item.supplier}
                            </Card.Text>

                            <Button onClick={() => handleDelete(item._id)} variant="secondary">Delete</Button>

                        </Card.Body>
                    </Card>)
                }
            </div>
            <div className='d-flex justify-content-center mb-2'>
                <Link to='/additem'>
                    <Button variant="primary">Add New Item</Button>
                </Link>
            </div>

        </div>

    );
};

export default ManageInventory;