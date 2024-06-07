import * as React from 'react'
import { Box, Modal } from '@mui/material'
import ThemeSwitch from './ThemeSwitch'
import { useLocation } from 'react-router-dom'



function Header() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClosed = () => setOpen(false)

    const location = useLocation();
    let currentPage = location.pathname.substring(1);
    currentPage = currentPage.replace(/(?=[A-Z])/g, ' ');

    return (
        <header className="w-full h-auto">
            <nav>
                <div className="flex flex-wrap justify-between items-center m-7 pt-[1.rem]">
                    {/* Dynamic Page Name */}
                    <h1 className="flex items-center text-[#067FB9] font-extrabold text-4xl">{currentPage}</h1>
                    {/* Theme Switcher & Messages Tab */}
                    <div className="flex items-center">
                        {/* The theme switcher does not work yet */}
                        <ThemeSwitch />
                        {/* Bell Icon */}
                        <a onClick={handleOpen} href="#" className="flex items-center justify-center h-12 w-12 ml-4 rounded-full bg-white border-2 border-[#067FB9] hover:shadow-md transition duration-500 hover:translate-y-[-.4rem]">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20" stroke="#067FB9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <Modal
                                open={open}
                                onClose={handleClosed}
                                aria-labelledby="modal-modal-title"
                                aria-describeby="modal-modal-description"
                            >
                                <Box className="w-[400px] -translate-x-[15%] -translate-y-[50%] absolute top-[50%] left-[50%] bg-white border-4 border-[#067FB9] p-5 shadow-lg rounded-2xl" >
                                    <div className='flex flex-col space-y-10 items-center'>
                                    <img src='images/logoLight.png' alt="" className='w-fit h-14' />
                                        <h1 className='text-[#067FB9] font-semibold text-center text-lg'>The feature is under development - <br></br>For more questions visit our <a href="" target="_blank" className='text-orange-400'>GitHub</a> repository</h1>
                                    </div>
                                </Box>
                            </Modal>
                        </a>
                        {/* Messages Button */}
                        <button onClick={handleOpen} className="flex items-center justify-center h-12 ml-4 px-2 rounded-full bg-white text-[#067FB9] border-2 border-[#067FB9] hover:shadow-md transition duration-500 hover:translate-y-[-.4rem]">
                            {/* Message Icon */}
                            <svg className="w-10 h-10 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10.5C2 6.35786 5.35786 3 9.5 3C13.6421 3 17 6.35786 17 10.5C17 14.6421 13.6421 18 9.5 18C8.40027 18 7.35412 17.7628 6.41143 17.3363C5.15315 17.6267 3.79825 17.8765 3.17494 17.9875C2.48734 18.1099 1.88844 17.5063 2.02174 16.8173C2.13954 16.2085 2.40124 14.9 2.70336 13.6749C2.25193 12.71 2 11.6335 2 10.5ZM8.144 6.30723C7.70245 6.54311 7.35423 6.91012 7.09057 7.39644C6.89315 7.76058 7.0283 8.21582 7.39244 8.41324C7.75657 8.61066 8.21181 8.47551 8.40923 8.11137C8.55557 7.84146 8.70735 7.7069 8.8508 7.63027C9.00176 7.54962 9.20469 7.50075 9.49994 7.50073C9.72352 7.50072 9.98714 7.57985 10.1808 7.73853C10.3513 7.87825 10.4999 8.10296 10.4999 8.5C10.4999 8.69484 10.4248 8.78469 9.9115 9.18806C9.46115 9.54195 8.7499 10.116 8.7499 11.25C8.7499 11.6642 9.08569 12 9.4999 12C9.91411 12 10.2499 11.6642 10.2499 11.25C10.2499 10.8795 10.4137 10.7012 10.8383 10.3675C10.8644 10.347 10.8928 10.3252 10.9229 10.302C11.3112 10.0037 11.9999 9.47459 11.9999 8.5C11.9999 7.65186 11.6485 7.00192 11.1315 6.57829C10.6377 6.17363 10.0263 6.0007 9.49986 6.00073C9.04511 6.00076 8.57804 6.07535 8.144 6.30723ZM10.5001 14.0001C10.5001 13.4477 10.0524 13 9.50007 13C8.94775 13 8.5 13.4477 8.5 14.0001C;C2.0001C9.50007C10.0524 14.0001 10.5001 13.4477 10.5001 14.0001Z" fill="#067FB9"></path>
                                <path d="M9.40039 18.9995C10.7386 20.241 12.5307 21 14.5001 21C15.5998 21 16.646 20.7629 17.5887 20.3364C18.8486 20.6268 20.2102 20.8756 20.8365 20.986C21.5258 21.1076 22.1242 20.5002 21.9871 19.8105C21.8662 19.202 21.599 17.8971 21.2968 16.6748C21.7482 15.7099 22.0001 14.6335 22.0001 13.5C22.0001 10.2171 19.8908 7.42685 16.9535 6.41052C17.6206 7.62383 18.0001 9.01762 18.0001 10.5001C18.0001 15.1945 14.1945 19 9.50012 19C9.46684 19 9.43359 18.9999 9.40039 18.9995Z" fill="#067FB9"></path>
                            </svg>
                            <span className="text-lg font-semibold">Messages</span>
                            <Modal
                                open={open}
                                onClose={handleClosed}
                                aria-labelledby="modal-modal-title"
                                aria-describeby="modal-modal-description"
                            >
                                <Box className="w-[400px] -translate-x-[15%] -translate-y-[50%] absolute top-[50%] left-[50%] bg-white border-4 border-[#067FB9] p-5 shadow-lg rounded-2xl" >
                                    <div className='flex flex-col space-y-10 items-center'>
                                    <img src='images/logoLight.png' alt="" className='w-fit h-14' />
                                        <h1 className='text-[#067FB9] font-semibold text-center text-lg'>The feature is under development - <br></br>For more questions visit our <a href="https://github.com/codebydean/eWorker" target="_blank" className='text-orange-400'>GitHub</a> repository</h1>
                                        <span className='flex font-bold text-orange-400 p-2 w-fit h-8 items-center justify-center'>Press ESC to exit</span>
                                    </div>
                                    
                                </Box>
                            </Modal>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

