import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <CardGroup>
                <Card border="gray" style={{ width: '18rem', backgroundColor: 'lightgray' }}>
                    <Card.Body>
                        <Card.Title>OUR BRANDS</Card.Title>
                        <Card.Text>
                            <li>Samsung</li>
                            <li>Singer</li>
                            <li>Butterfly</li>
                            <li>Walton</li>
                            <li>Panasonic</li>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="gray" style={{ width: '18rem', backgroundColor: 'lightgray' }}>
                    <Card.Body>
                        <Card.Title>OUR PRODUCTS</Card.Title>
                        <Card.Text>
                            <li>SmartPhone</li>
                            <li>Refrigerator</li>
                            <li>Air solutions</li>
                            <li>Laptop</li>
                            <li>Smart television</li>
                            <li>Home appliances</li>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="gray" style={{ width: '18rem', backgroundColor: 'lightgray' }}>
                    <Card.Body>
                        <Card.Title>ABOUT US</Card.Title>
                        <Card.Text>
                            <li>Who We Are ?</li>
                            <li>Corporate Responsibility</li>
                            <li>Company Info</li>
                            <li>Business Area</li>
                            <li>Investor Relations</li>
                            <li>Ethics</li>
                            <li>Careers</li>
                            <li>Privacy Policy</li>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="gray" style={{ width: '18rem', backgroundColor: 'lightgray' }}>
                    <Card.Body>
                        <Card.Title>CONTACT US</Card.Title>
                        <Card.Text>
                            <li>Phone :+8801681391593</li>
                            <li>Email : atiq94.ar@gmail.com</li>
                            <li>Address : 84/ka,Panthapath,Dhaka</li>
                            <li>Opening hours: 8.00AM - 10.00PM</li>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default AboutUs;