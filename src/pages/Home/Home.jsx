import React from 'react';
import Banner from '../../components/Home/Banner';
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks';
import KeyFeatures from '../../components/Home/KeyFeatures/KeyFeatures';
import LatestMedicalNews from '../../components/Home/LatestMedicalNews/LatestMedicalNews';
import HealthResourceHub from '../../components/CampDetails/HealthResourceHub';
import CampShowcase from '../../components/Home/CampShowcase';
import Feedbacks from '../../components/Home/Feedbacks/Feedbacks';
import SponsorsAndPartners from '../../components/Home/SponsorsAndPartners/SponsorsAndPartners';
import AboutUs from '../../components/Home/aboutUs/AboutUs';
import NewsletterSubscription from '../../components/Home/NewsletterSubscription/NewsletterSubscription';
import ContactSection from '../../components/Home/ContactSection/ContactSection';
import { Helmet } from 'react-helmet-async';
import MarqueeSlider from '../../components/Marquee/MarqueeSlider';
import MedicalCampPromotion from '../../components/Home/MedicalCampPromotion/MedicalCampPromotion';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Medical Camp Management System</title>
            </Helmet>

            {/* Banner / slider */}
            <Banner />

            {/* Camp Showcase */}
            <CampShowcase />

            {/* How It Works */}
            <HowItWorks />

            {/* MarqueeSlider */}
            <MarqueeSlider />
            {/* Latest Medical News */}
            <LatestMedicalNews />

            {/* Key Features */}
            <KeyFeatures />

            {/* Health Resource Hub */}
            <HealthResourceHub />

            {/* Participant Feedbacks */}
            <Feedbacks />

            {/* Sponsors and Partners */}
            <SponsorsAndPartners />

            {/* MedicalCampPromotion */}
            <MedicalCampPromotion />
            {/* About Us */}
            <AboutUs />

            {/* Newsletter Subscription */}
            <NewsletterSubscription />

            {/* Contact Section */}
            <ContactSection />
        </>
    );
};

export default Home;
