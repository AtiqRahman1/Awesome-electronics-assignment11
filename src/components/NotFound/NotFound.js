import React from 'react';
import notfound from '../../images/notfound.png';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;