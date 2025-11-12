import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineReadMore } from 'react-icons/md';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {
    const { _id, image, title, description, price, ratingAvg } = course
    return (
        <div className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex flex-col h-[470px]">
                {/* Image */}
                <figure className="bg-gray-50 rounded-t-2xl h-[180px] flex justify-center items-center overflow-hidden">
                    <img
                        className="h-full object-contain hover:scale-105 transition-transform duration-300"
                        src={image}
                        alt={title}
                    />
                </figure>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-5">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-2 min-h-[50px]">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-3 min-h-[60px] text-center">
                            {description}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center mt-5">
                        <button className="btn bg-[#F1F5E8] text-[#00D390] border-none w-[48%] text-sm">
                            <FaShoppingCart className="mr-2" /> ${price}
                        </button>
                        <button className="btn bg-[#FFF0E1] text-[#FF8811] border-none w-[48%] text-sm">
                            <i className="fa-solid fa-star"></i> {ratingAvg}
                        </button>
                    </div>

                    {/* Details Button */}
                    <Link to={`/courseDetails/${_id}`} className="mt-4">
                        <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#FF8811] via-[#ff9e42] to-[#FF8811] 
                       text-white font-semibold tracking-wide shadow-md hover:shadow-lg
                       transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;