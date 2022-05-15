import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Inventory = ({ inventory }) => {
    const { name, img, price, description, quantity, supplier } = inventory;

    return (
        <Card className='my-2' style={{ width: '18rem', background: 'light' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price:${price}</Card.Text>
                <Card.Text>
                    Quantity:{quantity}
                </Card.Text>
                <Card.Text>
                    Supplier Name:{supplier}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to='/inventory/:id'>
                    <Button variant="dark">Update</Button>
                </Link>

            </Card.Body>
        </Card>
    );
};

export default Inventory;