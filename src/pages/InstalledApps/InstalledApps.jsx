import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp, removeFromStoreDb } from '../../Utility/addToDb';
import InstalledAppCard from '../InstalledAppCard/InstalledAppCard';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const InstalledApps = () => {
    //will set in a state use state for 
    const [installedList, setInstalledList] = useState([])
    // 2....
    const [sort, setSort] = useState("");

    const handleUninstall = (id) => {
        removeFromStoreDb(id); // remove from localStorage
        setInstalledList(prev => prev.filter(app => app.id !== id)); // remove from UI
        Swal.fire({
            title: "Uninstallation Completed!",
            icon: "success",
            draggable: true
        });
    };

    // using this we called data from routes loader
    const data = useLoaderData();
    // console.log(data);
    // To get something from outside like local server 
    useEffect(() => {
        const installedAppData = getInstalledApp();
        // console.log(installedAppData);
        // converted 
        const convertedInstalledApps = installedAppData.map(id => parseInt(id))
        // console.log(convertedInstalledApps); 
        // did filter for all data and got single installedApp and filter will give one array
        const myInstalledApp = data.filter(installedApp => convertedInstalledApps.includes(installedApp.id));
        // console.log(myInstalledApp);
        setInstalledList(myInstalledApp);


    }, [])

    const handleSort = (type) => {
        setSort(type)
    };
    return (
        <div>
            <title>Mentora Academy-Enrolled</title>
            <h1 className='text-2xl md:text-4xl font-bold text-center mt-5 text-[#b413e1]'>Your Installed Games</h1>
            <p className='text-sm md:text-xl text-center my-3'>Explore All Trending Games on the Market developed by us.</p>
            <div className='flex flex-col md:flex-row justify-between items-center mx-15 text-2xl font-bold text-[#b413e1] '>
                <h2>{installedList.length} Games Found</h2>

                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn w-auto h-auto mx-auto md:mx-auto p-3 rounded-lg bg-gray-50  text-xl m-1 text-[#b413e1]">Sort By Size: {sort ? sort : ""} <i class="fa-solid fa-caret-down"></i> </div>
                    <ul tabIndex={0} className="dropdown-content font-semibold text-lg menu bg-base-100 rounded-box z-1 w-[150px] p-2 shadow-sm text-[#b413e1]">
                        <li><a onClick={() => handleSort('High-Low')}>High-Low</a></li>
                        <li><a onClick={() => handleSort('Low-High')}>Low-High</a></li>
                    </ul>
                </div>
            </div>

            <div>
                {installedList.length === 0 ? (

                    <div className="flex flex-col justify-center items-center h-64 text-center mt-10">
                        <img
                            src="/apperror.png"
                            alt="No installed apps"
                            className="w-60 h-60 mb-4"
                        />
                        {/* <p className="text-2xl font-bold text-[#b413e1]">No installed games found!</p> */}
                    </div>
                ) : (

                    [...installedList]
                        .sort((a, b) => {
                            if (sort === "High-Low") return b.size - a.size;
                            if (sort === "Low-High") return a.size - b.size;
                            return 0;
                        })
                        .map(app => (
                            <InstalledAppCard
                                key={app.id}
                                appData={app}
                                onUninstall={handleUninstall}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default InstalledApps;