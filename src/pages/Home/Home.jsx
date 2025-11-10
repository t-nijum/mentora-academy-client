import React from 'react';
import Banner from '../../components/Banner/Banner';
import OurApps from '../OurApps/OurApps';
import { useLoaderData } from 'react-router';
import TopCourses from '../TopCourses/TopCourses';

const topCoursesPromise = fetch('http://localhost:3000/top-courses')
    .then(res => res.json())

const Home = () => {
    // Received data from routes loader
    const appsData = useLoaderData();
    // const coursesData = useLoaderData();
    // console.log(appsData);
    return (
        <div>
            <title>Mentora Academy-Home</title>
            {import.meta.env.VITE_name}
            <Banner></Banner>
            {/* <OurApps appsData={appsData}></OurApps> */}
            <TopCourses topCoursesPromise={topCoursesPromise}></TopCourses>
        </div>
    );
};

export default Home;