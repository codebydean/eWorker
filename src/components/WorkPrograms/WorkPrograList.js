
function WorkProgramList(props){

    const WorkPrograms = props.data

    return(
        <div className="w-3/4 flex flex-col justify-center items-center">
            {/*Data at job object :

                "Title": "FRONT-END",
                "Dates": {
                    "Application": "Tue Jun 04 2024 22:17:04 GMT+0300 (Eastern European Summer Time)",
                    "Duration": "2024-06-04T19:10:30.927Z",
                    "Conducted": "2024-06-04T19:10:30.927Z"
                },
                "Pricing": "158",
                "Description": "Learnig Front-end for WEB developer"

            */}
               {WorkPrograms.map((WorkProgram) => (
                    <div className="w-full h-fit min-h-[100px] p-5 mb-6 bg-blue-200 opacity-80 rounded-3xl flex justify-center flex-col" key={WorkProgram.name}>
                       

                    </div>
               ))} 
        </div>


    )
   
}

export default WorkProgramList