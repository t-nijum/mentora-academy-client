import React, { useState } from 'react';
import { BiDollar } from 'react-icons/bi';
import { FaClock } from 'react-icons/fa';
import { IoPricetagsOutline } from 'react-icons/io5';
import { MdPriceCheck } from 'react-icons/md';
import { RiExchangeDollarLine, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { TbCalendarDollar } from 'react-icons/tb';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyAddedCourseCard = ({ myAddedCourse, myFilteredCourses, setMyFilteredCourses }) => {
    const { _id, image, title, description, price, purchases, instructor_name, instructor_email, photo, ratingAvg, duration, catagory } = myAddedCourse;

    const handleDeleteCourse = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log('Delete Clicked', result);
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/add_new_courses/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
                                icon: "success"
                            });
                            setMyFilteredCourses(myFilteredCourses.filter(myFilteredCourse => myFilteredCourse._id !== _id));
                        }
                    })
            }
        });
    }

    return (
        <div className='rounded-xl'>
            <div className="card md:w-[350px] bg-base-100 w-[370px] mx-auto shadow-xl p-5">
                <figure className="p-4 bg-gray-100 w-2/3 mx-auto mt-2">
                    <img className="h-[150px]" src={image} alt="Course Photo" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-center">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions flex justify-between items-center">
                        <button className="btn rounded-lg bg-[#F1F5E8] text-[#00D390]"><IoPricetagsOutline />{price}</button>
                        <button className="btn rounded-lg bg-[#FFF0E1] text-[#FF8811]"><FaClock />{duration}</button>
                    </div>
                </div>
                <div className='flex justify-between w-full'>

                    <Link to={`/myAddedCourseDetails/${_id}`}><button className="btn text-lg font-bold rounded-lg mx-auto bg-[#FFF0E1]  text-[#FF8811]">Details</button> </Link>

                    <Link to={`/updateCourse/${_id}`}><button className="btn text-lg font-bold rounded-lg bg-[#E0FFF7]  text-[#00d390] mx-auto">Update</button></Link>

                    <button onClick={() => handleDeleteCourse(myAddedCourse._id)} className="btn text-lg  font-bold rounded-lg bg-[#FFEAEA] text-[#be1f1f] mx-auto">Remove</button>
                </div>
            </div>

        </div>
    );
};

export default MyAddedCourseCard;