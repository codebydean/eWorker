import { useNavigate } from 'react-router-dom'

function Login() {
    
    const navigate = useNavigate();
    return (
        <section className="">
            <div className="relative w-full grid grid-cols-3">

                {/*------------------- Left Section -------------------*/}
                <div className="relative w-full ">
                    <img className="flex justify-start items-center w-60 h-40" src="/images/logo-light.png" alt=""></img>    
                    <div className="absolute w-[70%] h-full top-0 left-[15%] 
                                    flex justify-center items-center flex-col">
                        <label className="text-black text-5xl text-center">
                        Find your <label className=" text-[#1CA9EE] underline ">Passion</label> with our solutions!
                        </label>         
                    </div>                  
                </div>

                {/*------------------- Middle  Section -------------------*/}
                <div className="flex flex-col justify-center items-center h-[900px] w-full">
                    <img className="w-full rounded-3xl mt-[2%] h-[96%]" src="/images/Land_page_image.jpg" alt=""></img>
                </div>

                {/*------------------- Right Section -------------------*/}
                <div className="relative w-full ">

                    {/*------------------- Menu (top) -------------------*/}
                    <div className="m-[15px] h-[850px]">
                        <label className="text-black/50">menu</label>
                        <label className="flex">About us</label>
                        <label className="flex">Our Features</label>
                        <label className="flex">Pricing</label>
                        <label className="flex">Support</label>
                    </div>

                    {/*------------------- Details , Login , Sign-up (middle) -------------------*/}
                    <div className="absolute w-[95%] h-full top-0 left-[2.5%] 
                                    flex justify-center items-center flex-col">
                        <label>
                            Are you uneployed youe are still filled with hope and ambition? Checkout what we offer completety <label className="font-bold">FREE!</label>
                        </label>
                        
                        <div className="relative flex justify-center w-full h-[50px]">
                            <button className="block bg-[#067FB9] 
                                border-2 border-[#067FB9] rounded-xl 
                                p-1 text-xl w-[40%] mr-[5px] cursor-pointer
                                text-white"
                                onClick={()=>{navigate("/register")}}>
                                Sign up &#8594;
                            </button>
                            <button className="block bg-[#000000]/20 
                                 rounded-xl p-1 text-xl w-[40%] ml-[5px] 
                                 cursor-pointer text-black font-bold"
                                 onClick={()=>{navigate(("/login"))}}>
                                Login
                            </button>                            
                        </div>
                    </div>

                    {/*------------------- Coming soon (Bottom side) -------------------*/}
                    <div className="absolute w-[95%] bottom-[3.5%] left-[2.5%] 
                                    flex justify-center items-center flex-col">
                        
                        <label>Coming Soon!</label>
                        <div className="relative flex justify-center w-full h-[50px]">
                            <label className="inline-flex bg-[#1CA9EE]/30 
                                rounded-xl p-1 text-xl w-[45%] mr-[5px]
                                justify-center items-center cursor-pointer">
                                <img className="mr-2" src="/images/apple.png" alt=""></img>
                                App Store 
                            </label>
                            <label className="inline-flex bg-[#1CA9EE]/30 
                                rounded-xl p-1 text-xl w-[45%] mr-[5px]
                                justify-center items-center cursor-pointer">
                                <img className="mr-2" src="/images/google-play.png" alt=""></img>
                                Goggle Play
                            </label>                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Login