const calculateTitleWidth = (title) => `${title.length + 2}ch`;
const calculateDesc = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}


export default function JobCards(props, title=null) {

    const jobs = props.data
    //console.log(job.data[0].Category)


    const cardsArray = (arr, size) => {
        const cardsArray = [];
        for (let i=0; i <arr.length; i+=size){
            cardsArray.push(arr.slice(i,i+size));
        }
        return cardsArray;
    }

    return (
        <div className="w-3/4 flex flex-wrap justify-between space-y-10">
            {/* Chunk the jobs array into arrays of size 4 */}
            {cardsArray(jobs, 4).map((card, index) => (
                <div key={index} className="flex flex-row space-x-10">
                    {/* Render each chunk of jobs */}
                    {card.map((job) => (
                        <div className="flex flex-col" key={job.Title}>
                            <div className="flex flex-col bg-white border-4 border-[#067FB9] rounded-2xl p-5 shadow-lg">
                                <p className="text-xl font-bold text-[#067FB9]">{job.Title}</p>
                                <hr style={{ width: calculateTitleWidth(job.Title) }} className="h-1 rounded-sm bg-[#067FB9] mb-5 mt-2" />
                                <span className="mb-5 text-sm">{job.Company}</span>
                                <span className=" text-sm">{job.Avocation}</span>
                                <div className="mb-5 mt-5">
                                <span className=" text-sm italic ">{calculateDesc(job.Description, 55)}</span>
                                </div>
                                <div className="flex items-center mb-10">
                                    <svg viewBox="0 0 24 24" width="32" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#067FB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#067FB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </g>
                                    </svg>
                                    <span className="text-[#067FB9]">{job.City}</span>
                                </div>
                                <button className="flex rounded-full bg-[#067FB9] text-white p-2 w-28 h-8 items-center justify-center hover:shadow-lg shadow-gray-800 transition duration-500 hover:translate-y-[-.4rem]">Apply now!</button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

}

