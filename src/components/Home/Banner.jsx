import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import "swiper/css/autoplay"; // Autoplay styles
import bannerImg1 from '../../assets/images/banner/banner-1.jpg'
import bannerImg2 from '../../assets/images/banner/banner-2.jpg'
import bannerImg3 from '../../assets/images/banner/banner-3.jpg'
import bannerImg4 from '../../assets/images/banner/banner-4.jpg'
import bannerImg5 from '../../assets/images/banner/banner-5.jpg'
import bannerImg6 from '../../assets/images/banner/banner-6.jpg'
import Button from '../Shared/Button/Button';




const Banner = () => {
    const slides = [
        {
            title: "Successful Health Camp in 2023",
            description: `In our 2023 health camp, we successfully treated over 500 patients, 
                  providing essential medical care to underserved communities. 
                  Our team of dedicated doctors and volunteers performed 100 life-changing surgeries, 
                  ensuring that individuals in need received quality healthcare and support.`,
            image: bannerImg1,
        },
        {
            title: "Empowering Communities",
            description: `Through our outreach programs, we educated over 1,000 villagers 
                  on the importance of preventive healthcare. The initiative emphasized 
                  sanitation, nutrition, and early detection of illnesses, fostering healthier 
                  living environments and empowering communities to take charge of their health.`,
            image: bannerImg2,
        },
        {
            title: "Women’s Health Initiative",
            description: `We conducted specialized workshops on maternal health, child nutrition, 
                  and reproductive health for over 500 women. These sessions addressed critical 
                  issues, providing resources and support to empower women and improve family health.`,
            image: bannerImg3,
        },
        {
            title: "Youth Engagement Program",
            description: `Focusing on the next generation, we engaged over 300 students through health 
                  and hygiene workshops. These interactive sessions fostered awareness of healthy 
                  habits, aiming to cultivate lifelong practices that enhance personal and community health.`,
            image: bannerImg4,
        },
        {
            title: "Disaster Relief and Recovery",
            description: `In response to recent natural disasters, we provided emergency medical aid to 
                  over 1,500 individuals. Our team delivered essential supplies, conducted medical 
                  check-ups, and helped families rebuild their lives by addressing immediate health concerns.`,
            image: bannerImg5,
        },
        {
            title: "Empowering Communities",
            description: `Through our outreach programs, we educated over 1,000 villagers 
                  on the importance of preventive healthcare. The initiative emphasized 
                  sanitation, nutrition, and early detection of illnesses, fostering healthier 
                  living environments and empowering communities to take charge of their health.`,
            image: bannerImg6,
        },

    ];
    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                className="mySwiper"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[600px]">
                            {/* Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay with Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white p-5">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-base md:text-lg mb-6 w-1/3">{slide.description.substring(0, 150)}...</p>
                                <div className="flex w-96 gap-3">
                                    <Button label={"Get Appointment"}></Button>
                                    <Button outline={true} label={"Learn More.."}></Button>
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