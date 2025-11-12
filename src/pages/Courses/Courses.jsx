import React, { Suspense, use, useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const coursesPromise = fetch('http://localhost:3000/courses')
    .then(res => res.json())

const Courses = () => {
    const courses = use(coursesPromise)
    // console.log(courses);

    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);

    // Simulate initial page loading
    useEffect(() => {
        const timer = setTimeout(() => {
            if (courses && courses.length > 0) setLoading(false);
        }, 150);
        return () => clearTimeout(timer);
    }, [courses]);

    // Filtered list based on search input
    const filteredCourses = courses.filter((course1) =>
        course1.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle search with small spinner delay
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setSearchLoading(true);
        setTimeout(() => setSearchLoading(false), 600); // show spinner for 0.6s
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-primary w-20 h-20"></span>
            </div>
        );
    }

    return (
        <div className="mt-10 px-4 md:mr-6">
            <title>Mentora Academy-All Courses</title>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]">
                    Total {filteredCourses.length} Courses Found{" "}
                </h2>

                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search games by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="px-4 py-2 border rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
                    />
                    <button
                        className="px-4 py-2 bg-gradient-to-r from-[#ffcc00] to-[#ff00e4] text-white rounded-r-md hover:bg-[#ffcc00] transition"
                    >
                        Search
                    </button>
                </div>

            </div>
            <div>
                {filteredCourses.length === 0 && (
                    <div className="flex flex-col justify-center items-center h-64 text-center mt-10">
                        <img
                            src="/apperror.png"
                            alt="No installed apps"
                            className="w-80 h-80 mb-4"
                        />
                    </div>
                )}
            </div>

            {searchLoading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner text-primary w-16 h-16"></span>
                </div>
            ) : (
                <Suspense fallback={<span>Loading courses...</span>}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-5 md:max-w-[1200px] mx-auto">
                        {filteredCourses.map(course => (
                            <CourseCard key={course._id} course={course}></CourseCard>
                        ))}

                    </div>
                </Suspense>
            )}
        </div>
    );
};

export default Courses;