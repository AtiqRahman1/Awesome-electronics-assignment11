import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Inventories></Inventories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;