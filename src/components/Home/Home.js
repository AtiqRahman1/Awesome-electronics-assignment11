import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventory/Inventories/Inventories';

import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Inventories></Inventories>
        </div>
    );
};

export default Home;