import React from 'react';

const Footer = () => {
    return (
        <div>
            <section className="bg-[#1e003e] text-white  py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                        Stay Ahead in Courses
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Join our newsletter for exclusive course launches, tips &amp; insider updates.
                    </p>
                    <form className="sm:flex sm:justify-center">
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email address"
                            className="w-full sm:w-2/3 md:w-1/2 px-5 py-3 rounded-lg text-white border-1 focus:ring-[#ffcc00]  "
                        />
                        <button
                            type="submit"
                            className="mt-4 sm:mt-0 sm:ml-4 px-6 py-3 text-center bg-gradient-to-r from-[#ffcc00] to-[#ff00e4] font-semibold rounded-lg hover:bg-[#e6b800] transition"
                        >
                            Subscribe Now
                        </button>
                    </form>
                    <p className="text-sm text-gray-400 mt-4">
                        We respect your inbox. Unsubscribe anytime.
                    </p>
                </div>
            </section>

            <div className='text-white bg-[#000000] md:max-w-[2500px] md:h-[300px] mx-auto'>
                <div className=' flex justify-between md:ml-10 items-center'>
                    <div className='flex justify-between items-center ml-2 md:ml-10'>
                        <img className='h-[40px] w-[40px] rounded-full' src="/logo.png" alt="" />
                        <p className=" ml-3 font-bold text-xl text-white">Mentora Academy</p>
                    </div>

                    <div className='footer-card items-center md:w-[170px] mr-2 mt-3 md:mt-10'>
                        <h2 className='font-bold'>Social Links</h2>
                        <div className='flex items-center ml-4 mt-2'>
                            <i className="mr-2 fa-brands fa-x-twitter"></i>
                            <i className="mr-2 fa-brands fa-linkedin"></i>
                            <i className="mr-2 fa-brands fa-facebook"></i>
                        </div>
                    </div>
                </div>
                <div className='mt-3 md:mt-20 h-[100px]'>
                    <div className="border-t border-gray-700 max-w-[1600px] mx-auto"></div>
                    <p className='text-[#fafafa] font-light text-center mt-2 md:mt-10 py-3'>Copyright © Mentora Academy 2025 - All right reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;