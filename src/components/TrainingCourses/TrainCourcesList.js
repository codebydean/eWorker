import React from 'react';

function TrainCourcesList(props) {
    const trainCources = props.data;

    return (
        <div className="w-3/4 flex flex-wrap justify-between">
            {trainCources.map((trainCource, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-full bg-white border-4 border-[#067FB9] rounded-2xl p-5 shadow-lg mt-10">
                        <p className="text-xl font-bold text-[#067FB9]">Title: {trainCource.Title}</p>
                        <hr className="h-1 rounded-sm bg-[#067FB9] mb-5 mt-2" />
                        <p className="mb-5 text-sm">Application: {trainCource.Dates.Application.split("T")[0]}</p>
                        <p className="mb-5 text-sm">Duration: {trainCource.Dates.Duration.split("T")[0]}</p>
                        <p className="mb-5 text-sm">Conducted: {trainCource.Dates.Conducted.split("T")[0]}</p>
                        <p className="mb-10 text-sm">Pricing: {trainCource.Pricing}$</p>
                        <button className='flex rounded-full bg-[#067FB9] text-white p-2 w-28 h-8 items-center justify-center hover:shadow-lg shadow-gray-800 transition duration-500 hover:translate-y-[-.4rem]'>Buy now!</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TrainCourcesList;
