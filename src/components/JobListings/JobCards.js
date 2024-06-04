


function JobCards(props){

    const jobs = props.data

    //console.log(job.data[0].Category)
    return(
        <div className="w-3/4 flex flex-col justify-center items-center">
            {/*Data at job object :

            "published_date":"15-58-20",
            "Title":"Mechanic enginier",
            "Category":"Enginier",
            "Avocation":"Full",
            "City":"Patra",
            "Description":"We need junior mechanical enginier",
            "Company":"SCAMER.AE"}
            
            */}
               {jobs.map((job) => (
                    <div className="w-full h-fit min-h-[100px] p-5 mb-6 bg-blue-200 opacity-80 rounded-3xl flex justify-center flex-col" key={job.Title}>
                        <p className="mt-[10px] opacity-100  text-3xl items">{job.Title}</p>
                        <p className="mt-[5px] text-sm">{job.Company}</p>
                        <p className="text-base">{job.City}</p>
                        <p className="w-fit mt-[10px] bg-blue-400">{job.Avocation} time</p>

                        <p className="opacity-100">{job.Description}</p>
                        
                        
                    </div>
               ))} 
        </div>


    )
   
}

export default JobCards