/* Standard dependencies & Custom Stylesheets*/
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Register.css'

/* Import of Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

/* Creation of a Library instance to store the variables from the font awesome imports */
library.add(faEnvelope, faKey, faUser, faArrowLeftLong)

/* Initialization of the Component */
function Register() {

    /* Declaration of the navigate constant */
    const NAVIGATE = useNavigate();

    /* Declaration of variables for the States */
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    /* Form Submission for the website and addition to the database */
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/users/register', { email, username, password })
            .then(result => {
                if (result.data === "Success") {
                    console.log("Access granded / Καλος ήρθες")
                    //navigate to Login page or to main page.
                } else {
                    console.log("Access denied / Δοκίμασε ξανά")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="Register">

            {/* Splitting the viewscreen in a grid that has two columns */}
            <div className="grid grid-cols-2 w-full bg-[#E9F7F9]">

                {/* Left Section that contains the image and the motivation text */}
                <div class="relative w-full h-screen grid grid-rows-3 RegisterImage">
                    {/* Addition of a button that re-directs the user to the homepage. */}
                    <div className="row-end-1 p-7">
                        <button className="text-[#067FB9] text-2xl p-3 rounded-3xl 
                            bg-[#E9F7F9] cursor-pointer hover:bg-[#067FB9] hover:text-white hover:shadow-xl" onClick={() => { NAVIGATE("/Home") }}>
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                            <span>&nbsp; Home</span>
                        </button>
                    </div>
                    <div className="row-start-1 row-end-4">
                        <div className="relative w-[80%] h-full top-0 translate-x-[10%]
                                    flex justify-center items-center flex-col">
                            <label className="text-white text-5xl text-center">
                                Bridging dreams to careers <label className=" text-[#81F9E3]">Seamlessly</label>
                            </label>

                            <label className="text-white text-2xl text-center mt-[20px]">
                                Streamlime your job search with our platform & explore opportunities in <label className=" text-[#81F9E3]">minutes!</label>
                            </label>
                        </div>
                    </div>
                    {/* Footer that contains information which re-directs the user to the appropriate page */}
                    {/* It contains the re-directions to ABOUT page, FAQ page, Support page */}
                    <div className="row-start-4">
                        <footer className="text-right mr-10 mb-4 text-[#E9F7F9]">
                            <button className="mr-10">
                                <span>About</span>
                            </button>
                            <button className="mr-10">
                                <span>FAQ</span>
                            </button>
                            <button>
                                <span>Support</span>
                            </button>
                        </footer>
                    </div>
                </div>

            {/* Right Section that contains the form as well as the logo */}
            {/* It contains also the re-direction to the login page IF the user has already established an account with the database */}
            <div>

                <div className="flex justify-center items-center">
                    <img className=" w-48 h-auto pt-10" src="/images/logoLight.png" alt=""></img>
                </div>

                <div className="flex justify-center mt-10">
                    <div className="w-3/4">
                        <label className="flex justify-center text-6xl font-bold text-[#000000]">Create an account</label>
                        <span className="pt-3 flex justify-center text-xl text-[#000000] font-bold text-start w-full">completly free</span>

                        <div className="flex justify-center">
                            <button className="bg-[#E9F7F9] 
                                border-2 border-[#067FB9] rounded-3xl 
                                h-16 text-xl w-3/4 cursor-pointer mt-8
                                inline-flex items-center justify-center">
                                <img className="mr-2" src="/images/google.png" alt=""></img>
                                <span>Sign up with Google</span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center mt-5">
                    <form action="" className=" w-2/3">

                        {/* Username field as well as the addition to the database */}
                        <div>
                            <h1 className=" font-bold mb-2"><FontAwesomeIcon icon={faUser} /> Full Name</h1>
                            <input type="text" placeholder="Enter your username"
                                className="block bg-[#E9F7F9] border-2 border-[#067FB9]
                                rounded-3xl h-16 w-full text-xl mb-5
                                focus:outline-none focus:border-[#067FB9] p-4"
                                onChange={e => setUsername(e.target.value)} />
                        </div>

                        {/* Email field as well as the addition to the database */}
                        <h1 className=" font-bold mb-2"><FontAwesomeIcon icon={faEnvelope} /> Email Address</h1>
                        <div className="relative">
                            <input type="text" placeholder="Enter your email adress"
                                className="block bg-[#E9F7F9] border-2 border-[#067FB9]
                                rounded-3xl p-1 h-16 w-full text-xl 
                                focus:outline-none focus:border-[#067FB9] mb-5 p-4"
                                onChange={e => setEmail(e.target.value)} />

                        </div>

                        {/* Password field as well as the addition to the database */}
                        <div>
                            <h1 className=" font-bold text-[#000000]/70 mb-2"><FontAwesomeIcon icon={faKey} /> Password</h1>
                            <input type="password" placeholder="Enter your password"
                                className="block bg-[#E9F7F9] border-2 border-[#067FB9]
                                rounded-3xl p-1 h-16 w-full text-xl
                                focus:outline-none focus:border-[#067FB9] p-4"
                                onChange={e => setPassword(e.target.value)} />
                            <label className=" text-[#000000]/50">Must be at least 8 characters</label>
                        </div>

                        {/* Create an account button that will finalize and submit the information to the database */}
                        <div className="mt-5">
                            <input type="Submit" className="block bg-[#067FB9] 
                                border-2 border-[#067FB9] rounded-3xl 
                                p-1 h-16 text-xl w-full cursor-pointer
                                text-white " defaultValue="Create account"
                                onClick={(e) => handleSubmit(e)} />
                        </div>

                        {/* IF the user has already made an account he can re-direct to the login page */}
                        <label className="flex justify-center mt-2">Already registered? -&nbsp;<button className=" text-[#067FB9]" onClick={() => { NAVIGATE("/Login") }}>Login</button></label>
                    </form>
                </div>
            </div>
        </div>
        </section >
    );
}

export default Register