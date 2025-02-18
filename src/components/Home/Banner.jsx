import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css/effect-fade"; // Smooth fade effect
import bannerImg1 from '../../assets/images/banner/banner-1.jpg';
import bannerImg2 from '../../assets/images/banner/banner-2.jpg';
import bannerImg3 from '../../assets/images/banner/banner-3.jpg';
import bannerImg4 from '../../assets/images/banner/banner-4.jpg';
import bannerImg5 from '../../assets/images/banner/banner-5.jpg';
import bannerImg6 from '../../assets/images/banner/banner-6.jpg';

const slides = [
    { title: "Successful Health Camp in 2023", description: "We treated over 500 patients and performed 100 life-changing surgeries.", image: bannerImg1 },
    { title: "Empowering Communities", description: "Educating over 1,000 villagers on preventive healthcare and wellness.", image: bannerImg2 },
    { title: "Women’s Health Initiative", description: "Conducted workshops on maternal health, child nutrition, and reproductive health.", image: bannerImg3 },
    { title: "Youth Engagement Program", description: "Engaging students through health and hygiene awareness sessions.", image: bannerImg4 },
    { title: "Disaster Relief and Recovery", description: "Providing emergency aid and medical checkups to affected individuals.", image: bannerImg5 },
    { title: "Advancing Medical Access", description: "Expanding healthcare services to underserved regions.", image: bannerImg6 },
];

const Banner = () => {
    return (
        <div className="w-full h-screen">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                effect="fade"
                speed={1000}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-screen">
                            {/* Fullscreen Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl max-w-2xl mb-6 opacity-90">
                                    {slide.description}
                                </p>

                                {/* Buttons */}
                                <div className="flex space-x-4">
                                    {/* Primary Button (Deep Blue) */}
                                    <button className="px-5 py-2 bg-primary hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                                        Get Started
                                    </button>

                                    {/* Secondary Button (Glassmorphism) */}
                                    <button className="px-5 py-2 bg-white bg-opacity-20 border-2 border-white text-white font-semibold text-lg rounded-lg shadow-lg   hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300">
                                        Book a Camp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
