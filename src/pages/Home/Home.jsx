import React from 'react';
import Banner from '../../components/Banner/Banner';
import OurApps from '../OurApps/OurApps';
import { useLoaderData } from 'react-router';
import TopCourses from '../../components/TopCourses/TopCourses';

const Home = () => {
    // Received data from routes loader
    const appsData = useLoaderData();
    // const coursesData = useLoaderData();
    // console.log(appsData);
    return (
        <div>
            <title>Gaming Infinity-Home</title>
            {import.meta.env.VITE_name}
            <Banner></Banner>
            <OurApps appsData={appsData}></OurApps>
            {/* <TopCourses appsData={appsData}></TopCourses> */}
        </div>
    );
};

export default Home;