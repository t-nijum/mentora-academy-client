import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopCourses from '../TopCourses/TopCourses';
import Expertise from '../Expertise/Expertise';

const topCoursesPromise = fetch('http://localhost:3000/top-courses')
    .then(res => res.json())

const Home = () => {
    return (
        <div>
            <title>Mentora Academy-Home</title>
            {import.meta.env.VITE_name}
            <Banner></Banner>
            <Expertise></Expertise>
            <TopCourses topCoursesPromise={topCoursesPromise}></TopCourses>
        </div>
    );
};

export default Home;