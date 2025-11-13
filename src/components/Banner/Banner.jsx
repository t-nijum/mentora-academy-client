import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const Banner = () => {
    const slides = [
        { id: 1, image: '/slide1.png', title: 'Slide-1' },
        { id: 2, image: '/slide2.png', title: 'Slide-2' },
        { id: 3, image: '/slide3.png', title: 'Slide-3' },
    ];

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center pt-5 bg-base-100 px-4 md:px-16 overflow-hidden transition-colors duration-500">


            <div className="md:w-1/2 flex flex-col items-start text-left space-y-6 z-10 relative">

                <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300 rounded-full opacity-30 blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-indigo-300 rounded-full opacity-30 blur-3xl -z-10"></div>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl mt-3 md:text-6xl font-bold text-gray-900 "
                > <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                        Mentora Academy
                    </span>
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="text-xl md:text-4xl font-extrabold "
                >
                    <span className="text-purple-600 ">
                        Your Digital Campus!
                    </span><br />
                    <p className='md:text-2xl text-[#FF8811]'>Learn, Teach, and Grow</p>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8 }}
                    className="text-gray-500 md:text-xl leading-relaxed max-w-xl text-justify">
                    Mentora Academy empowers learners and instructors to grow together. Explore top courses in Web Development, Programming, Marketing, Communication, and more, or contribute your own. Gain practical skills, expand your horizons, and create your own path to success.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Link to="/courses">
                        <button className="mt-4 mb-4 px-10 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-xl shadow-2xl hover:scale-105 transition-transform">
                            Discover Courses
                        </button>
                    </Link>
                </motion.div>
            </div>

            <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center overflow-hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={15}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 }, 
                        768: { slidesPerView: 2 },     
                    }}
                    className="w-full h-[230px] sm:h-[250px] md:h-[300px] rounded-xl"
                >
                    {slides.map((slide) => (
                        <SwiperSlide
                            key={slide.id}
                            className="rounded-xl overflow-hidden shadow-md flex-shrink-0"
                        >
                            <div
                                className="w-full h-full bg-cover bg-center rounded-xl"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
