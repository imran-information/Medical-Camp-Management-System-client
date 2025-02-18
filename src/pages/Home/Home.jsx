import React from 'react';
import Banner from '../../components/Home/Banner';
import CampShowcase from '../../components/Home/CampShowcase';
import HealthResourceHub from '../../components/CampDetails/HealthResourceHub';
import MarqueeSlider from '../../components/Marquee/MarqueeSlider';
import { Helmet } from 'react-helmet-async';
import Feedbacks from '../../components/Home/Feedbacks/Feedbacks';
import AboutUs from '../../components/Home/aboutUs/AboutUs';
import KeyFeatures from '../../components/Home/KeyFeatures/KeyFeatures';
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks';
import LatestMedicalNews from '../../components/Home/LatestMedicalNews/LatestMedicalNews';



const Home = () => {


    return (
        <>
            <Helmet>
                <title>Medical Camp Management System</title>
            </Helmet>

            {/* Banner / slider */}
            <Banner />

            {/*all camp feedbacks  */}
            <CampShowcase />

            {/* Marque  */}
            <MarqueeSlider />

            {/* Health Resource Hub */}
            <HealthResourceHub />
            {/* participant feedbacks  */}
            <Feedbacks />
            {/* about us  */}
            <AboutUs />

            {/* KeyFeatures */}
            <KeyFeatures />
            {/* HowItWorks */}
            <HowItWorks />
            {/* LatestMedicalNews */}
            <LatestMedicalNews />

        </ >
    );
};

export default Home;