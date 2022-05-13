import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faShippingFast, faWallet } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
    return (
        <div className='mt-10'>
            <CardGroup>
                <Card border="gray" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faGlobe} />
                            WORLDWIDE DELIVERY</Card.Title>
                        <Card.Text>
                            We work with the biggest delivery networks. It doesn't matter where in the world you are.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="gray" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faShippingFast} />
                            FREE SHIPPING</Card.Title>
                        <Card.Text>
                            Stop wondering about shipping costs, what you see is what you pay.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="gray" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faWallet} />
                            MONEY BACK GUARANTEE</Card.Title>
                        <Card.Text>
                            Got a problem with the product? Don't worry, we have a 30 day money back guarantee.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Service;