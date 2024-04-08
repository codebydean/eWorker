/* Standard dependencies & Custom Stylesheets*/
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'

/* Import of Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

/* Creation of a Library instance to store the variables from the font awesome imports */
library.add(faEnvelope, faKey, faArrowLeftLong)

/* Initialization of the Component */
function Login() {

    const NAVIGATE = useNavigate();

    /* Declaration of variables for the States */
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()


    /* Form Submission for the website and addition to the database */
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/users/login', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    NAVIGATE("/dashboard")
                } else {
                    console.log("Access denied / Δοκίμασε ξανά")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="Login">

            {/* Splitting the viewscreen with a grid and in two columns */}
            <div className="grid grid-cols-2 h-screen w-screen bg-[#E9F7F9]">

                {/* Left Section contains the login page image with the motivation text in the center */}
                <div class="relative w-full h-screen grid grid-rows-3 LoginImage">
                    {/* <img src="/images/loginImage.jpg" alt="Avatar" className="w-full h-full" /> */}
                    <div className="row-end-1 p-7">
                        <div className="flex">
                            <button className="text-[#067FB9] text-2xl p-3 rounded-3xl 
                            bg-[#E9F7F9] cursor-pointer hover:bg-[#067FB9] hover:text-white hover:shadow-xl" onClick={() => { NAVIGATE("/Home") }}>
                                <FontAwesomeIcon icon={faArrowLeftLong} />
                                <span>&nbsp; Home</span>
                            </button>
                        </div>
                    </div>
                    <div className="row-start-1 row-end-4">
                        <div className="h-full top-0 left-[5%] 
                                    flex justify-center items-center flex-col">
                            <label className="text-white text-5xl text-center">
                                Embark on your path to success with <label className=" text-[#81F9E3]">Every click</label>
                            </label>

                            <label className="text-white text-2xl text-center mt-[20px]">
                                Accelarate your carrer growth by connecting with top-notch opportunities
                            </label>
                        </div>
                        
                    </div>
                    <div className="row-start-4">
                            <footer className="text-right mr-10 mb-4 text-[#E9F7F9]">
                                <button className="mr-10">
                                    <span>About</span>
                                </button>
                                <button className="mr-10">
                                    <span>FAQ</span>
                                </button>
                                <button className="">
                                    <span>Support</span>
                                </button>
                            </footer>
                        </div>
                </div>

                {/* Right side contains the logo as well as the social login and the regular form to submit */}
                <div>

                    {/* Contains the logo of the project */}
                    <div className="flex justify-center items-center">
                        <img className=" w-48 h-auto pt-10" src="/images/logoLight.png" alt=""></img>
                    </div>

                    {/* Informational text underneath the logo of the project */}
                    <div className="flex justify-center mt-10">
                        <div className="w-3/4">
                            <label className="flex justify-center text-6xl font-bold text-[#000000]">Log in to your account</label>
                            <span className="pt-3 flex justify-center text-xl text-[#000000] font-bold text-start w-full">Welcome back! Please select a way to log in:</span>

                            {/* Social Login - Currently only Google is available */}
                            <div className="flex justify-center mb-10">
                                <button className="bg-[#E9F7F9] 
                                border-2 border-[#067FB9] rounded-3xl 
                                h-16 text-xl w-3/4 cursor-pointer mt-8
                                inline-flex items-center justify-center">
                                    <img className="mr-2" src="/images/google.png" alt=""></img>
                                    <span>Connect with Google</span>
                                </button>
                            </div>

                            <div class="inline-flex items-center justify-center w-full">
                                <hr class="w-80 h-1 my-8 bg-gray-400 border-" />
                                <span class="absolute px-3 font-medium bg-[#E9F7F9] text-gray-400 -translate-x-1/2 right-[17.5rem]">or continue with email</span>
                            </div>
                        </div>
                    </div>

                    {/* Regular Log-in form  */}
                    <div className="flex justify-center mt-2">
                        <form action="" className=" w-2/3">

                            {/* Email field  */}
                            <h1 className=" font-bold mb-3"><FontAwesomeIcon icon={faEnvelope} /> Email Address</h1>
                            <div>
                                <input type="text" placeholder="Enter your email adress"
                                    className="block bg-[#E9F7F9] border-2 border-[#067FB9]
                                rounded-3xl p-4 h-16 w-full text-xl 
                                focus:outline-none focus:border-[#067FB9] mb-5"
                                    onChange={e => setEmail(e.target.value)} />
                            </div>

                            {/* Password field */}
                            <div>
                                <h1 className=" font-bold mb-3"><FontAwesomeIcon icon={faKey} /> Password</h1>
                                <input type="password" placeholder="Enter your password"
                                    className="block bg-[#E9F7F9] border-2 border-[#067FB9]
                                rounded-3xl p-4 h-16 w-full text-xl
                                focus:outline-none focus:border-[#067FB9]"
                                    onChange={e => setPassword(e.target.value)} />
                            </div>

                            {/* Log-in button that directs you to the main screen */}
                            <div className="mt-5">
                                <input type="Submit" className="block bg-[#067FB9] 
                                border-2 border-[#067FB9] rounded-3xl 
                                p-1 h-16 text-xl w-full cursor-pointer
                                text-white " defaultValue="Login"
                                    onClick={(e) => handleSubmit(e)} />
                            </div>

                            {/* IF there is NO account found then the user needs to create one */}
                            {/* This re-directs them to the register page */}
                            <label className="flex justify-center">You do not have an account? - &nbsp;<a className=" text-[#067FB9]" href="/Register">Create one!</a></label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login