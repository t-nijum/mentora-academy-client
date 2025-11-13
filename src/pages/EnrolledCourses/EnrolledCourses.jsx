import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { div } from 'framer-motion/client';

const EnrolledCourses = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/enrolledCourses/user/${user.email}`)
                .then(res => res.json())
                .then(data => setEnrolledCourses(data))
                .catch(err => console.error(err));
        }
    }, [user]);

    // Remove course function
    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This will remove the course from your enrolled list!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, remove it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/enrolledCourses/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(() => {
                        setEnrolledCourses(prev => prev.filter(course => course._id !== id));
                        Swal.fire('Removed!', 'The course has been removed.', 'success');
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire('Error', 'Failed to remove the course.', 'error');
                    });
            }
        });
    };

    if (!user) {
        return <p className="text-center mt-10">Please log in to see your enrolled courses.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-5 mb-5">
            <h2 className="text-2xl md:text-3xl text-[#fcb500fa] font-bold text-center mt-5 ">My Enrolled Courses: {enrolledCourses.length}</h2>

            {enrolledCourses.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-64 text-center mt-10">
                    <img
                            src="/apperror.png"
                            alt="No installed apps"
                            className="w-60 h-60 mb-4"
                        />
                        <p className=" mb-5 text-center">You haven't enrolled in any courses yet.</p>
                </div>

            ) : (
                enrolledCourses.map((course) => (
                    <div
                        key={course._id}
                        className="border border-gray-300 rounded-xl flex flex-col md:flex-row justify-between items-center md:mt-5 md:mx-5 md:px-4 mx-auto p-3 shadow-sm"
                    >
                        <div className="flex justify-between items-center gap-7 w-full">
                            <figure className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mx-auto mt-2">
                                <img
                                    className="md:h-[150px] w-full object-cover rounded"
                                    src={course.image}
                                    alt={course.title}
                                />
                            </figure>

                            <div className="md:m-5 flex-1">
                                <h2 className="text-xl font-semibold">
                                    {course.title}{' '}
                                    <span className="text-sm hidden md:inline text-gray-600">
                                        : {course.description}
                                    </span>
                                </h2>

                                <div className="md:card-actions gap-3 flex items-center mt-2">
                                    <button className="md:btn md:bg-[#F1F5E8] md:text-[#00D390] text-[#00D390]">
                                        <i className="fa-solid fa-download"></i> {course.purchases || 0}
                                    </button>
                                    <button className="md:btn md:bg-[#FFF0E1] md:text-[#FF8811] text-[#FF8811]">
                                        <i className="fa-solid fa-star"></i> {course.ratingAvg || 0}
                                    </button>
                                    <button className="md:btn md:bg-[#FFF0E1] md:text-[#FF8811] text-[#FF8811]">
                                        <i className="fa-solid fa-cloud-arrow-down"></i> {course.size || 0} MB
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            className="mb-5 md:mb-1 btn rounded-lg text-white bg-red-500"
                            onClick={() => handleRemove(course._id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default EnrolledCourses;
