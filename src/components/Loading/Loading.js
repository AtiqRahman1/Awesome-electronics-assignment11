import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '350px' }}>
            <Spinner animation="border" variant="dark" />
        </div>
    );
};

export default Loading;