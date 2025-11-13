import React, { Suspense, use, useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

// const coursesPromise = fetch('http://localhost:3000/courses')
const coursesPromise = fetch('https://mentora-academy-server.vercel.app/courses')
    .then(res => res.json());

const Courses = () => {
    const courses = use(coursesPromise);

    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);

    // Simulate initial page loading
    useEffect(() => {
        const timer = setTimeout(() => {
            if (courses && courses.length > 0) setLoading(false);
        }, 150);
        return () => clearTimeout(timer);
    }, [courses]);

    // Get unique categories from courses
    const categories = ["All", ...new Set(courses.map(course => course.category))];

    // Filtered list based on search input and selected category
    const filteredCourses = courses.filter((course1) =>
        course1.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "All" || course1.category === category)
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
                    Total {filteredCourses.length} Courses Found
                </h2>

                <div className="flex flex-col md:flex-row justify-center mb-6 items-center">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search courses by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="px-4 py-2 border-2 border-orange-500 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-600 placeholder-orange-400"
                    />

                    {/* Category Dropdown */}
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-4 py-2 border-2 border-orange-500 rounded-r-md ml-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-orange-600 bg-white"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>


            </div>

            {/* No courses found */}
            {filteredCourses.length === 0 && (
                <div className="flex flex-col justify-center items-center h-64 text-center mt-10">
                    <img
                        src="/apperror.png"
                        alt="No courses found"
                        className="w-80 h-80 mb-4"
                    />
                    <p className="text-gray-500 text-lg">No courses match your search or category.</p>
                </div>
            )}

            {/* Courses Grid */}
            {searchLoading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner text-primary w-16 h-16"></span>
                </div>
            ) : (
                <Suspense fallback={<span>Loading courses...</span>}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-5 max-w-full mx-auto">
                        {filteredCourses.map(course => (
                            <CourseCard key={course._id} course={course} />
                        ))}
                    </div>
                </Suspense>
            )}
        </div>
    );
};

export default Courses;
