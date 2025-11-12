import React from 'react';
import { useLoaderData } from 'react-router';
// import { addToStoreDb } from '../../Utility/addToDb';
import Swal from 'sweetalert2';

const MyAddedCourseDetails = () => {
    const myAddedCourse = useLoaderData()
    console.log(myAddedCourse);

    const { _id, name, image, photo, title, category, description, duration, price,  } = myAddedCourse;

    // const handleInstall = id => {
    //     addToStoreDb(id);

    //     Swal.fire({
    //         title: "Enrolled Completed!",
    //         icon: "success",
    //         draggable: true
    //     });
    // }

    return (
        <div className='mx-5 md:max-w-[1100px] md:mx-auto card bg-base-100 shadow-lg border-gray-200 p-5 mt-3 md:mt-10'>
            <title>{title}</title>
            <div className=" flex flex-col md:flex-row bg-base-100 shadow-sm">
                <figure><img src={image} className='w-[250px] h-[250px] md:w-[350px] md:h-[350px]' alt="Apps" /></figure>

                <div className="mt-5 p-4">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <h1 className="text-lg text-[#627382] font-semibold">Category:{category}</h1>
                    <h1 className="text-lg text-[#627382] font-semibold">Duration: {duration}</h1>
                    <p className='text-lg text-[#627382]'>{description}</p>

                    <div className="flex items-center gap-2">
                        <img
                            src={photo}
                            alt="Instructor"
                            className="w-8 h-8 rounded-full object-cover border border-gray-300"
                        />
                        <h3 className='text-xl font-bold border-b border-gray-300 pb-2'>Instructor: <span className="font-semibold text-gray-700">{name}</span></h3>



                    </div>

                    <div className="md:mt-15 mt-5 md:gap-3 flex justify-between items-center">
                        <div className='text-center'>
                            <i class="fa-solid text-[#00d390] text-xl fa-clock"></i>
                            <p className='text-lg'>Duration</p>
                            <p className="text-black font-bold text-xl md:text-xl"> {duration}</p>
                        </div>
                        <div className='text-center'>
                            <i class="fa-solid fa-dollar-sign text-[#FF8811] text-xl"></i>
                            <p className='text-lg'>Price</p>
                            <p className="text-black font-bold text-xl md:text-xl"> {price}</p>
                        </div>
                        <div className='text-center'>
                            <i class="fa-solid fa-star text-[#FF8811] text-xl"></i>
                            <p className='text-lg'>Featured</p>
                            <p className="text-black font-bold  text-xl md:text-xl"> Yes</p>
                        </div>
                    </div>
                    {/* <div className="card-actions mt-5">

                        <button onClick={() => handleInstall(_id)} className="btn text-2xl font-bold rounded-lg text-black bg-[#00d390] mx-auto">Update</button>

                        <button onClick={() => handleInstall(_id)} className="btn text-2xl  font-bold rounded-lg text-black bg-[#d32e00] mx-auto">Remove</button>
                    </div> */}
                </div>
            </div>
            <div className=' mt-5'>
                <h2 className='text-2xl font-semibold'>Description:</h2>
                <p className='mt-3 text-lg text-[#627382] text-justify'>{description}</p>
            </div>

        </div>
    );
};

export default MyAddedCourseDetails;