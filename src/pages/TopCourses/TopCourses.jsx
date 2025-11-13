import React, { Suspense, use } from 'react';
import { Link } from 'react-router';
// import OurApp from '../OurApp/OurApp';
import CourseCard from '../CourseCard/CourseCard';


const TopCourses = ({ topCoursesPromise }) => {

    const courses = use(topCoursesPromise)
    console.log(courses);


    return (
        <div>
            <h1 className='text-5xl text-[#9d00ff] font-bold text-center mt-5 md:mt-15'>Top Rated Courses</h1>
            <p className='text-lg text-[#2f00ff] font-semibold text-center mt-1'>Explore All Trending Popular Courses on the Mentora offered by us.</p>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-5 md:max-w-[1200px] mx-auto'>
                    {
                        courses.map(course => <CourseCard course={course} key={course._id}></CourseCard>)
                    }
                </div>
            </Suspense>
            <div className='text-center md:mt-10'>
                <Link to="/courses"><button className=" btn my-3 mb-5 text-xl text-black rounded-lg bg-gradient-to-r from-[#ff9100] to-[#ffd000]"> Show All Courses</button></Link>
            </div>
        </div>
    );
};

export default TopCourses;