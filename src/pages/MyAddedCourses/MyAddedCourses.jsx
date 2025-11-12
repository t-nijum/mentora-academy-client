import React, { Suspense, use, useEffect, useState } from 'react';
// import CourseCard from '../CourseCard/CourseCard';
import { Link } from 'react-router';
import MyAddedCourseCard from '../MyAddedCourseCard/MyAddedCourseCard';
import { AuthContext } from '../../provider/AuthProvider';
import { div } from 'framer-motion/client';

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
                <h1 className='text-5xl text-[#b413e1] font-bold text-center mt-5 md:mt-15'>Total Number of My Courses: {myFilteredCourses.length}</h1>
                <p className='text-lg text-gray-600 font-semibold text-center mt-1'>Explore my Courses on the in Mentora Acamemy offered by us.</p>
                <Suspense fallback={<span>Loading...</span>}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-10 p-3  md:max-w-[2500px] mx-auto'>
                        {
                            // courses.map(singleAppData => <OurApp singleAppData={singleAppData} key={singleAppData.id}></OurApp>)
                            myFilteredCourses.map(myAddedCourse => <MyAddedCourseCard myAddedCourse={myAddedCourse} 
                            key={myAddedCourse._id}
                            myFilteredCourses= {myFilteredCourses}
                            setMyFilteredCourses={setMyFilteredCourses}
                            ></MyAddedCourseCard>)
                        }
                    </div>
                </Suspense>
                <div className='text-center md:mt-10'>
                    <Link to='/games'><button className=" btn my-5 text-xl text-white bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]"> Show All Games</button></Link>
                </div>
            </div>
    );
};

export default MyAddedCourses;