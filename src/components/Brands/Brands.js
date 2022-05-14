import React from 'react';
import { Card, CardGroup, ListGroup } from 'react-bootstrap';

const Brands = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center'>All Brands</h2>
            <CardGroup>
                <Card className='text-center' style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Apple</ListGroup.Item>
                        <ListGroup.Item>Samsung</ListGroup.Item>
                        <ListGroup.Item>Sony</ListGroup.Item>
                        <ListGroup.Item>LG</ListGroup.Item>
                        <ListGroup.Item>Konka</ListGroup.Item>
                        <ListGroup.Item>Walton</ListGroup.Item>
                        <ListGroup.Item>Transcom</ListGroup.Item>
                        <ListGroup.Item>Singer</ListGroup.Item>
                        <ListGroup.Item>Vision</ListGroup.Item>
                        <ListGroup.Item>Panasonic</ListGroup.Item>
                    </ListGroup>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Brands;