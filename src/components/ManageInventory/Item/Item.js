import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useInventories from '../../hooks/useInventories';

const Item = () => {
    const [item, setItem] = useInventories();

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
                    const remaining = item.filter(items => items._id !== id);
                    setItem(remaining);
                })
        }
    }
    return (
        <Card className='my-2' style={{ width: '18rem', background: 'light' }}>

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
        </Card>

    );
};

export default Item;