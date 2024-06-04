/* Standard dependencies & Custom Stylesheets*/
import { useState } from "react";
import {useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './Login.css'
import axios from 'axios'

//google Authentication
import { useGoogleLogin } from '@react-oauth/google';

/* Import of Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import { useLocalStorage } from '../../components/Localstorage/Localstorage.js';

/* Creation of a Library instance to store the variables from the font awesome imports */
library.add(faEnvelope, faKey, faArrowLeftLong)

/* Initialization of the Component */
function Login() {

    const [user,setUser] = useLocalStorage("user","");


    const NAVIGATE = useNavigate();

    /* Declaration of variables for the States */
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    /*Decleration of Error variables for the states*/
    const [emailerr, setEmailerr] = useState()
    const [passworderr, setPassworderr] = useState()

    /* Form Submission for the website and addition to the database */
    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailerr("")
        setPassworderr("")
        if(!(email && password)){
            if(!email){setEmailerr("Email can not be empty")}
            if(!password){setPassworderr("Password can not be empty")}
            return
        }
        axios.post('http://localhost:5000/users/login', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    axios.get(`http://localhost:5000/users/${email}`)
                    .then(response => {
                        setUser(response.data)
                    })
                    toast.success
                    (`Welcome back`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        onClose: () => NAVIGATE("/dashboard")
                        });            
                } 
                else if(result.data === "No user"){
                    toast.error('incorrect password or email', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                        });
                }     
            })
            .catch(err => console.log(err))
    }
    const login = useGoogleLogin({
        onSuccess: (response) => {
          //Getting the information about the google email for validation and then navigate to dashboard
          axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
              {
                  headers : {
                      Authorization : `${response.token_type} ${response.access_token}`
                  }  
              }
          ).then((res) => {
            HandleGoogleLogin(res.data)
            
          })
            
          
        }   
    });

    //Handle Login via Google
    function HandleGoogleLogin(userInfo) {
        
        axios.post('http://localhost:5000/users/login', { email: userInfo.email, password:"google" })
            .then(result => {
                if (result.data === "Success") {
                    toast.success
                    (`Welcome back`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        onClose: () => NAVIGATE("/dashboard")
                        });            
                } 
                else if(result.data === "No user"){
                    toast.error('incorrect password or email', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                        });
                }     
            })
            .catch(err => console.log(err))
    }
    
      
    return (
        <section className="Login">

            {/* Splitting the viewscreen with a grid and in two columns */}
            <div className="grid grid-cols-2 h-screen w-screen bg-[#E9F7F9]">

                {/* Left Section contains the login page image with the motivation text in the center */}
                <div className="relative w-full h-screen grid grid-rows-3 LoginImage">
                    {/* Addition of a button that re-directs the user to the homepage. */}
                    <div className="row-end-1 p-7">
                        <div className="flex">
                            <button className="text-[#067FB9] text-2xl p-3 rounded-3xl 
                            bg-[#E9F7F9] cursor-pointer hover:bg-[#067FB9] hover:text-white transition duration-300 hover:ease-in hover:-translate-y-1" onClick={() => { NAVIGATE("/Home") }}>
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
                    {/* Footer that contains information which re-directs the user to the appropriate page */}
                    {/* It contains the re-directions to ABOUT page, FAQ page, Support page */}
                    <div className="row-start-4">
                            <footer className="text-right mr-10 mb-4 text-[#E9F7F9]">
                                <button className="mr-10">
                                    <span>About</span>
                                </button>
                                <button className="mr-10">
                                    <span>FAQ </span>
                                </button>
                                <button>
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
                            <div className="grid grid-cols-3">

                                {/*Google login*/}
                                <div className="flex justify-center mb-10">
                                    <button className="bg-[#E9F7F9] 
                                    border-2 border-[#067FB9] rounded-3xl 
                                    h-16 text-xl w-3/4 cursor-pointer mt-8
                                    inline-flex items-center justify-center duration-300 hover:ease-in text-[#067FB9] hover:-translate-y-1 hover:shadow-xl"
                                    onClick={() => login()}>
                                        <img className="mr-2 h-[30px] w-[32px]" src="/images/google.png" alt=""></img>
                                        <span>Connect with Google</span>
                                    </button>
                                </div>

                                {/*Facebook(Meta) login*/}
                                <div className="flex justify-center mb-10">
                                    <button className="bg-[#E9F7F9] 
                                    border-2 border-[#067FB9] rounded-3xl 
                                    h-16 text-xl w-3/4 cursor-pointer mt-8
                                    inline-flex items-center justify-center duration-300 hover:ease-in text-[#067FB9] hover:-translate-y-1 hover:shadow-xl"
                                    onClick={() => login()}>
                                        <img className="mr-2 h-[30px] w-[32px]" src="/images/Meta.svg" alt=""></img>
                                        <span>Connect with Meta</span>
                                    </button>
                                </div>

                                {/*Twitter(X) login*/}
                                <div className="flex justify-center mb-10">
                                    <button className="bg-[#E9F7F9] 
                                    border-2 border-[#067FB9] rounded-3xl 
                                    h-16 text-xl w-3/4 cursor-pointer mt-8
                                    inline-flex items-center justify-center duration-300 hover:ease-in text-[#067FB9] hover:-translate-y-1 hover:shadow-xl"
                                    onClick={() => login()}>
                                        <img className="mr-2 h-[30px] w-[32px]" src="/images/twitter_X.svg" alt=""></img>
                                        <span>Connect with Twitter</span>
                                    </button>
                                </div>
                            </div>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-80 h-1 my-8 bg-gray-400 border-" />
                                <span className="absolute px-3 font-medium bg-[#E9F7F9] text-gray-400 -translate-x-1/2 right-[17.5rem]">or continue with email</span>
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
                                focus:outline-none focus:border-[#067FB9] text-[#067FB9] transition duration-300 focus:ease-in focus:text-white focus:bg-[#067FB9]"
                                    onChange={e => setEmail(e.target.value)} defaultvalue={"Sokos@gmail.com"}/>

                                {/*Adding span elemement so we can see the errors ,if it is one, after the submit*/}
                                <span className=" text-red-500">{emailerr}</span>
                            </div>

                            {/* Password field */}
                            <div>
                                <h1 className=" font-bold mb-3"><FontAwesomeIcon icon={faKey} /> Password</h1>
                                <input type="password" placeholder="Enter your password"
                                    className="block bg-[#E9F7F9] border-2 border-[#067FB9] 
                                rounded-3xl p-4 h-16 w-full text-xl
                                focus:outline-none focus:border-[#067FB9] text-[#067FB9] transition duration-300 focus:ease-in focus:text-white focus:bg-[#067FB9]"
                                    onChange={e => setPassword(e.target.value)} defaultvalue={"159753!@"}  />

                                {/*Adding span elemement so we can see the errors ,if it is one, after the submit*/}
                                <span className=" text-red-500">{passworderr}</span>
                            </div>

                            {/* Log-in button that directs you to the main screen */}
                            <div className="mt-5">
                                <input type="Submit" className="block bg-[#067FB9] 
                                border-2 border-[#067FB9] rounded-3xl 
                                p-1 h-16 text-xl w-full cursor-pointer
                                text-white hover:bg-[#E9F7F9] hover:transition-all duration-300 hover:ease-in hover:text-[#067FB9]" defaultValue="Log in"
                                    onClick={(e) => handleSubmit(e)} />
                            </div>

                            {/* IF there is NO account found then the user needs to create one */}
                            {/* This re-directs them to the register page */}
                            <label className="flex justify-center mt-2">You do not have an account? - &nbsp;<button className=" text-[#067FB9]" onClick={()=> {NAVIGATE("/Register")}}>Create one!</button></label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login