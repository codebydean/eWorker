/* Standard dependencies & Custom Stylesheets*/
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import './LandingPage.css'


/* Initialization of the Component */
function Landing() {

    /* Initialization of the Router Variable */
    const NAVIGATE = useNavigate();

    return (
        <section className="LandingPage">

            {/* Splitting the viewscreen into a grid of three columns*/}
            <div className="relative w-full grid grid-cols-3">

                {/* Left Section */}
                <div className="relative w-full ">
                    <img className="relative w-60 h-40 left-10 top-5" src="images/logoLight.png" alt=""></img>
                    <div className="absolute w-[70%] h-full top-0 left-[15%] 
                                    flex justify-center items-center flex-col">

                        {/* Implementation of a typing animation for the strong text */}
                        <label className="text-black text-5xl text-center">
                            Find your <label className=" text-[#1CA9EE] underline ">
                                <ReactTyped
                                    strings={["Passion", "Future", "Dream"]}
                                    typeSpeed={120}
                                    loop
                                    backDelay={1000}
                                    backSpeed={120}
                                    cursorChar="|"
                                    showCursor={true}
                                />
                            </label> with our solutions!
                        </label>
                    </div>
                </div>

                {/* Middle Section - Contains the container of the abstract shapes */}
                <div className="flex flex-col justify-center items-center h-[900px] w-full">
                    <img className="w-full rounded-3xl mt-[2%] h-[96%]" src="images/landingPage.jpg" alt="Landing Page Image"></img>
                </div>

                {/* Right Section - Contains the Menu list, the sign up form & the coming soon space */}
                <div className="relative w-full ">

                    {/* Creation of a Menu List to navigate through the introduction frame */}
                    <div className="p-2 m-6">
                        <label className="text-black/50">Menu</label>
                        <label className="flex">About us</label>
                        <label className="flex">Our Features</label>
                        <label className="flex">Pricing</label>
                        <label className="flex">Contact Us</label>
                    </div>

                    {/* Account Creation Form that is composed of buttons and inputs */}
                    <div className="absolute w-[95%] h-full top-0 left-[2.5%] 
                                    flex justify-center items-center flex-col">
                        <label>
                            Are you uneployed but  you are still filled with hope and ambition? Checkout what we offer completety <label className="font-bold">FREE!</label>
                        </label>

                        <div className="relative flex justify-center w-full h-[50px] m-9">
                            <button className="block bg-[#004086] 
                                border-2 border-[#004086] rounded-xl 
                                p-1 text-xl w-[40%] mr-[5px] cursor-pointer
                                text-white"
                                onClick={() => { NAVIGATE("/Register") }}>
                                Sign up &#8594;
                            </button>
                            <button className="block bg-[#E0EAEC] 
                                 rounded-xl p-1 text-xl w-[40%] ml-[5px] 
                                 cursor-pointer text-black font-bold"
                                onClick={() => { NAVIGATE(("/Login")) }}>
                                Login
                            </button>
                        </div>
                    </div>

                    {/* Mobile Implementation will come soon and NOT NOW!! After a couple of sprints */}
                    <div className="absolute w-[95%] bottom-[3.5%] left-[2.5%] 
                                    flex justify-center items-center flex-col">

                        <label className="mb-3">Coming Soon!</label>
                        <div className="relative flex justify-center w-full h-[50px]">
                            <label className="inline-flex bg-[#1CA9EE]/30 
                                rounded-xl p-1 text-xl w-[45%] mr-[5px]
                                justify-center items-center cursor-pointer">
                                <img className="mr-2" src="../images/apple.png" alt=""></img>
                                App Store
                            </label>
                            <label className="inline-flex bg-[#1CA9EE]/30 
                                rounded-xl p-1 text-xl w-[45%] mr-[5px]
                                justify-center items-center cursor-pointer">
                                <img className="mr-2" src="images/googlePlay.png" alt=""></img>
                                Google Play
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Landing