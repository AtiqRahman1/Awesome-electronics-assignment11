import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='text-center'>Copyright © {year}... All rights reserved</p>
        </footer>
    );
};

export default Footer;