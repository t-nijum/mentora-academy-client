import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course);
    const { _id, image, title, category, description, courseDetails, ratingAvg, purchases, reviews, instructor } = course;

    const { user } = useContext(AuthContext);
    console.log(user);

    const handleEnroll = () => {
        if (!user) {
            Swal.fire("Please log in first!");
            return;
        }

        const enrolledData = {
            ...course,
            userEmail: user.email,
            enrolledAt: new Date(),
        };

        // fetch("http://localhost:3000/enrolledCourses", {
        fetch("https://mentora-academy-server.vercel.app/enrolledCourses", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(enrolledData),
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire("Success!", "You have enrolled in this course!", "success");
            })
            .catch((err) => {
                console.error(err);
                Swal.fire("Already Enrolled!", "You have already been enrolled in this course.", "error");
            });
    };

    return (
        <div className='mx-5 md:max-w-[1100px] md:mx-auto card bg-base-100 shadow-lg border-gray-200 p-5 mt-3 md:mt-10'>
            <title>{title}</title>
            <div className=" flex flex-col md:flex-row bg-base-100 shadow-sm">
                <figure><img src={image} className='w-[250px] h-[250px] md:w-[350px] md:h-[350px]' alt="Apps" /></figure>

                <div className="mt-5 p-4">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <h1 className="text-lg font-semibold">Category:{category}</h1>
                    <p className='text-lg text-[#627382]'>{description}</p>
                    <h3 className='text-xl font-bold border-b border-gray-300 pb-2'>Instructor: {instructor}</h3>
                    <div className="md:mt-15 mt-5 md:gap-3 flex justify-between items-center">
                        <div className='text-center'>
                            <i class="fa-solid text-[#00d390] text-xl fa-download"></i>
                            <p className='text-lg'>Total Purchases</p>
                            <p className="text-black font-bold text-2xl md:text-4xl"> {purchases}</p>
                        </div>
                        <div className='text-center'>
                            <i class="fa-solid fa-star text-[#FF8811] text-xl"></i>
                            <p className='text-lg'>Ratings</p>
                            <p className="text-black font-bold text-2xl md:text-4xl"> {ratingAvg}</p>
                        </div>
                        <div className='text-center'>
                            <i class="fa-solid fa-thumbs-up text-[#FF8811] text-xl"></i>
                            <p className='text-lg'>Reviews</p>
                            <p className="text-black font-bold  text-2xl md:text-4xl"> {reviews}</p>
                        </div>
                    </div>
                    <div className="card-actions mt-5">
                        <button
                            onClick={handleEnroll}
                            className="btn text-2xl font-bold rounded-lg text-black bg-[#FF8811] mx-auto"
                        >
                            Enroll Now!
                        </button>
                    </div>
                </div>
            </div>
            <div className=' mt-5'>
                <h2 className='text-2xl font-semibold'>Description:</h2>
                <p className='mt-3 text-lg text-[#627382] text-justify'>{courseDetails}</p>
            </div>

        </div>
    );
};

export default CourseDetails;