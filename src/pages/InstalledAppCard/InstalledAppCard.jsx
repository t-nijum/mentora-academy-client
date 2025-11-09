import React from 'react';

const InstalledAppCard = ({ appData, onUninstall }) => {
    const { image, title, description, downloads, ratingAvg, size, id } = appData
    return (
        <div className='border border-gray-300 rounded-xl flex flex-col md:flex-row justify-between items-center md:mt-5 md:mx-5 md:px-4 mx-auto'>
            <div className='flex justify-between items-center gap-7 '>
                <figure className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mx-auto mt-2">
                    <img className="md:h-[150px]" src={image} alt="Apps" />
                </figure>
                <div className=" md:card-body md:m-5">
                    <h2 className="card-title">{title} <span className='text-sm hidden md:block text-gray-600'>: {description}</span></h2>
                    <div className="md:card-actions gap-3 flex items-center mt-2">
                        <button className="md:btn md:bg-[#F1F5E8] md:text-[#00D390] text-[#00D390]"><i class="fa-solid fa-download"></i> {downloads}</button>
                        <button className="md:btn md:bg-[#FFF0E1] md:text-[#FF8811] text-[#FF8811]"><i class="fa-solid fa-star"></i> {ratingAvg}</button>
                        <button className="md:btn md:bg-[#FFF0E1] md:text-[#FF8811] text-[#FF8811]"><i class="fa-solid fa-cloud-arrow-down"></i>{size} MB</button>
                    </div>
                </div>
            </div>
            <button className="mb-5 md:mb-1 btn rounded-lg text-white bg-red-500"onClick={() => onUninstall(id)}>Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;