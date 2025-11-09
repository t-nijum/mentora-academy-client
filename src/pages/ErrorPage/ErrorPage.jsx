import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img className='inline h-[500px]' src="/error-404.png" alt="" />
            <h1 className='text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#8159e0] to-[#874dd7]'>Oops, page not found!</h1>
            <p className=' text-lg text-gray-500'>The page you are looking for is not available.</p>
            <Link to='/'><button className='btn mt-5 text-white bg-gradient-to-r from-[#8159e0] to-[#894ddd]'>Go Back !</button></Link>
        </div>
    );
};

export default ErrorPage;