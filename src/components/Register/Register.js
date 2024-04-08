import { useState } from "react";
import axios from 'axios'
import './Register.css'


function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

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

            <div className="grid grid-cols-2 w-full bg-[#E9F7F9]">
            
                {/*First Colun (Left side)*/}
                <div class="relative w-full h-screen">
                    <img src="/images/registerImage.png" alt="Avatar" class="w-full h-full" />
                    <div className="absolute w-[90%] h-full top-0 left-[5%] 
                                    flex justify-center items-center flex-col">
                        <label className="text-white text-5xl text-center">
                        Bridging dreams to careers <label className=" text-[#81F9E3]">Seamlessly</label>
                        </label> 

                        <label className="text-white text-2xl text-center mt-[20px]">
                        Streamlime your job search with our platform & explore opportunities in <label className=" text-[#81F9E3]">minutes!</label>
                        </label>         
                    </div>
                </div>

                {/*Second Colun (Right side)*/}
                <div>

                    <div className="flex justify-center items-center">
                        <img className=" w-60 h-40" src="/images/logoLight.png" alt=""></img>    
                    </div>

                    <div className="flex justify-center mt-5">
                        <div className="w-3/4">
                            <label className="flex justify-center text-6xl font-bold text-[#000000]">Create an account</label>
                            <span className="flex justify-center text-xl text-[#000000] font-bold text-start w-full">completly free</span>

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

                            {/*-------------------------- username input --------------------------*/}
                            <div>
                                <h1 className=" font-bold mb-2">Full Name</h1>
                                <input type="text" placeholder="Enter your username"
                                    className="block bg-[#E9F7F9] border-2 border-[#067FB9]
                                rounded-3xl h-16 w-full text-xl mb-5
                                focus:outline-none focus:border-[#067FB9] p-4"
                                    onChange={e => setUsername(e.target.value)} />
                            </div>

                            {/*-------------------------- Email input --------------------------*/}
                            <h1 className=" font-bold mb-2">Email Address</h1>
                            <div>
                                <input type="text" placeholder="Enter your email adress"
                                    className="block bg-[#E9F7F9] border-2 border-[#067FB9]
                                rounded-3xl p-1 h-16 w-full text-xl 
                                focus:outline-none focus:border-[#067FB9] mb-5 p-4"
                                    onChange={e => setEmail(e.target.value)} />
                            </div>

                            {/*-------------------------- Password input --------------------------*/}
                            <div>
                                <h1 className=" font-bold text-[#000000]/70 mb-2">Password</h1>
                                <input type="password" placeholder="Enter your password"
                                    className="block bg-[#E9F7F9] border-2 border-[#067FB9]
                                rounded-3xl p-1 h-16 w-full text-xl
                                focus:outline-none focus:border-[#067FB9] p-4"
                                    onChange={e => setPassword(e.target.value)} />
                                    <label className=" text-[#000000]/50">Must be at least 8 characters</label>
                            </div>
                            
                            {/*-------------------------- Create account button --------------------------*/}
                            <div className="mt-5">
                                <input type="Submit" className="block bg-[#067FB9] 
                                border-2 border-[#067FB9] rounded-3xl 
                                p-1 h-16 text-xl w-full cursor-pointer
                                text-white " defaultValue="Create account"
                                onClick={(e) => handleSubmit(e)} />
                            </div>

                            <label className="flex justify-center">Already registered? <a className=" text-[#067FB9]" href="/login">Login</a></label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login