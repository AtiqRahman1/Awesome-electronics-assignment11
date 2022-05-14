import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = ({ item }) => {
    const { name, price, quantity, supplier } = item;
    return (
        <Card className='my-2' style={{ width: '18rem', background: 'light' }}>

            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price:${price}</Card.Text>
                <Card.Text>
                    Quantity:{quantity}
                </Card.Text>
                <Card.Text>
                    Supplier Name:{supplier}
                </Card.Text>

                <Button variant="secondary">Delete</Button>

            </Card.Body>
        </Card>

    );
};

export default Item;