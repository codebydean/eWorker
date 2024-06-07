import React from 'react';
import { Box, Modal } from '@mui/material'

function FinancialAidList(props) {
    const financials = props.data;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClosed = () => setOpen(false)

    return (
        <div className="w-3/4 flex flex-wrap justify-between">
            {financials.map((financial, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-full bg-white border-4 border-[#067FB9] rounded-2xl p-5 shadow-lg mt-2">
                        <p className="text-xl font-bold text-[#067FB9]">{financial.name}</p>
                        <hr className="h-1 rounded-sm bg-[#067FB9] mb-5 mt-2" />
                        <p className="mb-5">Available Spots: {financial.quantity}</p>
                        <p className="mb-5">Aid: {financial.price}$</p>
                        <div className="flex flex-col items-center">
                        <button onClick={handleOpen} className='flex rounded-full bg-[#067FB9] text-white p-2 w-fit h-8 items-center justify-center hover:shadow-lg shadow-gray-800 transition duration-500 hover:translate-y-[-.4rem]'>Am I Eligible?</button>
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
                    
                </div>
            ))}
        </div>
    );
}

export default FinancialAidList;
