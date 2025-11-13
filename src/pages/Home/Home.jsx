import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import TopCourses from "../TopCourses/TopCourses";
import Expertise from "../Expertise/Expertise";

const Home = () => {
  const topCourses = useLoaderData();

  return (
    <div>
      <title>Mentora Academy - Home</title>
      {import.meta.env.VITE_name}
      <Banner></Banner>
      <Expertise></Expertise>
      <TopCourses topCourses={topCourses}></TopCourses>
    </div>
  );
};

export default Home;