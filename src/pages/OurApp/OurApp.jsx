import React, {} from 'react';

import { Link } from "react-router";

const OurApp = ({ singleAppData }) => {
    const { id, image, title, description,price, downloads, ratingAvg } = singleAppData

    return (
        <Link to={`/appDetails/${id}`}>
            <div className='rounded-xl'>
                <div className="card md:w-[350px] bg-base-100 w-[370px] mx-auto shadow-xl p-5">
                    <figure className="p-4 bg-gray-100 w-2/3 mx-auto mt-2">
                        <img className="h-[150px]" src={image} alt="Course Photo" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-center">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions flex justify-between items-center">
                            <button className="btn bg-[#F1F5E8] text-[#00D390]"><i class="fa-solid fa-download"></i> {price} $</button>
                            <button className="btn bg-[#FFF0E1] text-[#FF8811]"><i class="fa-solid fa-star"></i> {ratingAvg}</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OurApp;