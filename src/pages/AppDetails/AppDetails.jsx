// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';
// import { addToStoreDb } from '../../Utility/addToDb';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { GrInstallOption } from 'react-icons/gr';

// const MySwal = withReactContent(Swal)

// const AppDetails = () => {
//     const { id } = useParams();
//     const appId = parseInt(id)
//     const data = useLoaderData();
//     const singleAppData = data.find(app => app.id === appId)
//     const { image, title, description, appDetails, downloads, ratingAvg, reviews, size, companyName } = singleAppData;

//     const handleInstall = id => {
//         addToStoreDb(id);

//         Swal.fire({
//             title: "Installation Completed!",
//             icon: "success",
//             draggable: true
//         });
//     }

//     return (
//         <div className='mx-5 md:max-w-[1100px] md:mx-auto card bg-base-100 shadow-lg border-gray-200 p-5 mt-3 md:mt-10'>
//             <title>{title}</title>
//             <div className=" flex flex-col md:flex-row bg-base-100 shadow-sm">
//                 <figure><img src={image} className='w-[250px] h-[250px] md:w-[350px] md:h-[350px]' alt="Apps" /></figure>

//                 <div className="mt-5 p-4">
//                     <h1 className="text-3xl font-bold">{title}</h1>
//                     <p className='text-lg text-[#627382]'>{description}</p>
//                     <h3 className='text-lg font-normal border-b border-gray-300 pb-2'>Developed by: {companyName}</h3>
//                     <div className="md:mt-15 mt-5 md:gap-3 flex justify-between items-center">
//                         <div className='text-center'>
//                             <i class="fa-solid text-[#00d390] text-xl fa-download"></i>
//                             <p className='text-lg'>Downloads</p>
//                             <p className="text-black font-bold text-2xl md:text-4xl"> {downloads}</p>
//                         </div>
//                         <div className='text-center'>
//                             <i class="fa-solid fa-star text-[#FF8811] text-xl"></i>
//                             <p className='text-lg'>Ratings</p>
//                             <p className="text-black font-bold text-2xl md:text-4xl"> {ratingAvg}</p>
//                         </div>
//                         <div className='text-center'>
//                             <i class="fa-solid fa-thumbs-up text-[#FF8811] text-xl"></i>
//                             <p className='text-lg'>Reviews</p>
//                             <p className="text-black font-bold  text-2xl md:text-4xl"> {reviews}</p>
//                         </div>
//                     </div>
//                     <div className="card-actions mt-5">

//                         <button onClick={() => handleInstall(id)} className="btn text-2xl border-1 border-black font-bold rounded-lg text-black bg-[#00d390] mx-auto">Install({size}MB)<GrInstallOption/></button>
//                     </div>
//                 </div>
//             </div>
//             <div className=' mt-5'>
//                 <h2 className='text-2xl font-semibold'>Description:</h2>
//                 <p className='mt-3 text-lg text-[#627382] text-justify'>{appDetails}</p>
//             </div>

//         </div>
//     );
// };

// export default AppDetails;