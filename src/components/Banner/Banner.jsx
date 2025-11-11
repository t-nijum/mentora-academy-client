import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { motion } from "framer-motion";

const Banner = () => {

    const slides = [
        { id: 1, image: '/slide1.png', title: 'Slide-1' },
        { id: 2, image: '/slide2.png', title: 'Slide-2' },
        { id: 3, image: '/slide3.png', title: 'Slide-3' },
    ];
    return (
        <div>
            <div>
                <section class="text-center py-16 bg-gradient-to-r from-[#1e003e] via-[#4a0b74] to-[#b413e1] text-white">

                    <h1 class="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 hidden md:block">
                        <span class="text-[#ffcc00]">MENTORA ACADEMY</span> — Your Digital Campus
                    </h1>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                           
                        className="text-5xl md:text-7xl font-bold md:mt-5">
                        Self-Paced{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                            Online Learning
                        </span>{" "}
                        Courses
                    </motion.h2>
                    <p class=" mt-5 max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed">
                        At Mentora Academy, we blend technology and mentorship to shape the innovators of tomorrow.
Smarter learning. Sharper skills. Stronger futures.
                    </p>
                    <Link to='/courses'>
                        <button class="mt-6 px-6 py-3 bg-[#ffcc00] text-[#1e003e] font-semibold rounded-full shadow-lg hover:scale-105 transition">
                            Explore Our Courses</button>
                    </Link>
                </section>

            </div>
            <div className="w-full max-w-6xl mx-auto mt-8 rounded-2xl overflow-hidden shadow-lg">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="h-[250px] sm:h-[400px] md:h-[500px]"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="relative w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                                        {slide.title}
                                    </h2>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default Banner;