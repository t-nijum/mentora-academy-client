import React, { Suspense, useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import OurApp from "../OurApp/OurApp";

const AllApps = () => {
    const appsData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);

    // Simulate initial page loading
    useEffect(() => {
        const timer = setTimeout(() => {
            if (appsData && appsData.length > 0) setLoading(false);
        }, 150);
        return () => clearTimeout(timer);
    }, [appsData]);

    // Filtered list based on search input
    const filteredApps = appsData.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h2 className="text-3xl font-bold text-center mb-4 text-[#b413e1]">
                    Total {filteredApps.length} Games Found{" "}
                </h2>

                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search games by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="px-4 py-2 border rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-[#b413e1]"
                    />
                    <button
                        className="px-4 py-2 bg-[#b413e1] text-white rounded-r-md hover:bg-[#8a0cb0] transition"
                    >
                        Search
                    </button>
                </div>
                
            </div>
            <div>
                    {filteredApps.length === 0 && (
                        <div className="flex flex-col justify-center items-center h-64 text-center mt-10">
                            <img
                                src="/apperror.png"
                                alt="No installed apps"
                                className="w-80 h-80 mb-4"
                            />
                            {/* <p className="text-2xl font-bold text-[#b413e1]">
                                No installed games found!
                            </p> */}
                        </div>
                    )}
                </div>

            {searchLoading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner text-primary w-16 h-16"></span>
                </div>
            ) : (
                <Suspense fallback={<span>Loading games...</span>}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5 p-3 md:max-w-[2500px] mx-auto">
                        {filteredApps.map((app) => (
                            <OurApp key={app.id} singleAppData={app}></OurApp>
                        ))}
                    </div>
                </Suspense>
            )}
        </div>
    );
};

export default AllApps;
