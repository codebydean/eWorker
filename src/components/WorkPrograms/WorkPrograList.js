import * as React from 'react'
import { Box, Modal } from '@mui/material'


function WorkProgramList(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClosed = () => setOpen(false)

    const WorkPrograms = props.data

    return (
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
                <div className="w-fit h-fit min-h-[100px] p-5 mb-6 flex flex-col bg-white border-4 border-[#067FB9] rounded-2xl shadow-lg space-y-5" key={WorkProgram.name}>
                    <div className="text-lg text-[#067FB9] font-semibold">
                        <span>Work & Travel Program (J1 Program)</span>
                    </div>
                    <div className="text-sm">
                        <span>This program is open to university students from around the world who want to experience another culture while earning money to support their stay. By working throughout the United States, participants have a unique chance to experience the United States as more than just tourists, and to share their own traditions and culture with people from both the U.S. and abroad. By living abroad in an English speaking environment, gaining some practical experience, and meeting friends that last a lifetime, participants benefit from the experience for years to come.</span>
                    </div>
                    <div className='flex items-center mb-10'>
                        <svg viewBox="0 0 24 24" width="32" className='mr-2' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#067FB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#067FB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <span className='text-[#067FB9]'>1853 Piedmont Rd, Marietta, GA 30066</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <button onClick={handleOpen} className='flex rounded-full bg-[#067FB9] text-white p-2 w-fit h-8 items-center justify-center hover:shadow-lg shadow-gray-800 transition duration-500 hover:translate-y-[-.4rem]'>See requirements!</button>
                        <Modal
                            open={open}
                            onClose={handleClosed}
                            aria-labelledby="modal-modal-title"
                            aria-describeby="modal-modal-description"
                        >
                            <Box className="w-[400px] -translate-x-[15%] -translate-y-[50%] absolute top-[50%] left-[50%] bg-white border-4 border-[#067FB9] p-5 shadow-lg rounded-2xl" >
                                <div className='flex flex-col'>
                                    <h1 className='text-[#067FB9] font-semibold text-center'>Working Program A Papers</h1>
                                    <hr className="h-1 rounded-sm bg-[#067FB9] mb-5 mt-2" />
                                    <span className='text-md mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna ligula, bibendum vitae urna condimentum, malesuada consectetur elit.</span>
                                    <ol className='list-decimal ml-5 mt-10'>
                                        <li>Paper 1</li>
                                        <li>Paper 2</li>
                                        <li>Paper 3</li>
                                        <li>Paper 4</li>
                                    </ol>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                </div>
            ))}
        </div>


    )

}

export default WorkProgramList