import React from 'react';
import Banner from '../../components/Home/Banner';
import CampShowcase from '../../components/Home/CampShowcase';


const Home = () => {
    return (
        <div className='my-2'>
            <Banner />
            <CampShowcase />
        </div>
    );
};

export default Home;