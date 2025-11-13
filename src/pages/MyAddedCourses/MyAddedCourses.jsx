import React, { Suspense, use, useEffect, useState } from 'react';
// import CourseCard from '../CourseCard/CourseCard';
import { Link } from 'react-router';
import MyAddedCourseCard from '../MyAddedCourseCard/MyAddedCourseCard';
import { AuthContext } from '../../provider/AuthProvider';

// const myAddedCoursesPromise = fetch('http://localhost:3000/add_new_courses')
//     .then(res => res.json())

const MyAddedCourses = () => {
    const { user } = use(AuthContext);
    const [myFilteredCourses, setMyFilteredCourses] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/add_new_courses?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyFilteredCourses(data)

                })
        }
    }, [user?.email])

    // const myAddedCourses = use(myAddedCoursesPromise)
    // console.log(myAddedCourses);



    return (
        <div>
            <h1 className='text-2xl md:text-3xl text-[#fcb500fa] ] font-bold text-center mt-5'>
                Total Number of My Courses: {myFilteredCourses.length}
            </h1>
            <p className=' text-base-400 font-semibold text-center mt-1'>
                Explore my Courses on the Mentora Academy.
            </p>

            <Suspense fallback={<span>Loading...</span>}>
                {myFilteredCourses.length === 0 ? (
                    // Empty state outside the grid
                    <div className="flex flex-col justify-center items-center h-96 px-5">
                        <img
                            src="/apperror.png"
                            alt="No added courses found!"
                            className="w-60 h-60"
                        />
                        <p className="text-center text-gray-600 mb-5">
                            You haven't added any courses yet.
                        </p>
                    </div>
                ) : (
                    // Grid of courses
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-5 md:max-w-[1200px] mx-auto'>
                        {myFilteredCourses.map(myAddedCourse => (
                            <MyAddedCourseCard
                                key={myAddedCourse._id}
                                myAddedCourse={myAddedCourse}
                                myFilteredCourses={myFilteredCourses}
                                setMyFilteredCourses={setMyFilteredCourses}
                            />
                        ))}
                    </div>
                )}
            </Suspense>

            <div className='text-center md:mt-2'>
                <Link to='/enrolled-courses'>
                    <button className="btn my-5 text-white bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                        My Enrolled Courses
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default MyAddedCourses;