import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Navbar from "../Navbar/Navbar.js";
import Header from "../Header/Header.js";

import './Settings.css'

import { useLocalStorage } from '../../components/Localstorage/Localstorage.js';

function Settings() {

    const [user, setUser] = useLocalStorage("user", "");

    const NAVIGATE = useNavigate();

    const [name, setName] = useState(user.name)
    const [password, setPassword] = useState(user.password)
    const [email, setEmail] = useState(user.email)


    const defusername = user.name
    const defemail = user.email
    const defpassword = user.password

    const resetDefaultUserInfo = () => {
        const UserName = document.getElementById("UserName")
        UserName.value = defusername

        const Email = document.getElementById("Email")
        Email.value = defemail

        const Password = document.getElementById("Password")
        Password.value = defpassword
    }

    const submitUserNewInfo = () => {
        axios.put(`http://localhost:5000/users/${defemail}`, { email, name, password })
            .then(response => {
                setUser(response.data)
            })

        //Litle delay to change the value of localstorage item user
        setTimeout(() => {
            NAVIGATE("/dashboard")
        }, 1000);
    }


    return (
        <div className="Settings flex">
            <Navbar />
            <div className="flex flex-col h-screen w-screen">
                <Header />
                <div className="flex flex-row space-x-40 justify-center">
                    <div id="profile-details" className="flex flex-col translate-x-[5rem] translate-y-[5rem] rounded-2xl w-fit ">
                        <h1 className="text-[#067FB9] text-xl font-semibold mb-16">Profile Details</h1>
                        <div id="profile-picture" className="flex">
                            <img className="flex-shrink-10 object-cover w-24 h-24 mr-5 rounded-full border-[#067FB9] border-4 -translate-y-2.5" src={user.picture} alt="" />
                            <div id="remove-change-photo" className="flex flex-col space-y-5">
                                <div className="flex flex-row space-x-3">
                                    <button className='flex rounded-xl bg-[#067FB9] text-white p-3 w-fit h-8 items-center justify-center hover:shadow-lg shadow-gray-800 text-sm transition duration-500 hover:translate-y-[-.4rem]'>Change profile picture</button>
                                    <button className='flex rounded-xl border-4 border-[#067FB9] text-[#067FB9] p-3 w-fit h-8 items-center justify-center hover:shadow-lg shadow-gray-800 text-sm transition duration-500 hover:translate-y-[-.4rem]'>Remove</button>
                                </div>
                                <span className="flex flex-col text-sm text-gray-500">Accepted file types: gif, jpeg, jpe, jpg, png, webp · Max file size: 0.49MB</span>
                            </div>
                        </div>
                        <div className="flex mt-10 space-x-10">
                            <div className="flex flex-col">
                                <label className="text-[#067FB9] text-md mb-2">Username</label>
                                <input id="UserName" className="p-2 h-10 w-fit text-[#067FB9] border-[#067FB9] border-2 rounded-lg focus:bg-[#067FB9] focus:text-white focus:outline-none" defaultValue={defusername}
                                    onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#067FB9] text-md mb-2">Email</label>
                                <input id="Email" className="p-2 h-10 w-fit text-[#067FB9] border-[#067FB9] border-2 rounded-lg focus:bg-[#067FB9] focus:text-white focus:outline-none" defaultValue={defemail}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div id="change-password" className="flex flex-col translate-y-[5rem] rounded-2xl w-fit ">
                        <div className="flex flex-col">
                            <span className="font-semibold text-[#067FB9] text-lg">Change Password</span>
                            <span className="text-sm mt-4">To change your password, please enter your current password,<br></br> followed by your new password and confirm it.</span>
                            <label className="text-[#067FB9] text-md mt-6 mb-1">Current Password</label>
                            <input id="Password" type="password" className="p-2 h-10 w-fit text-[#067FB9] border-[#067FB9] border-2 rounded-lg focus:bg-[#067FB9] focus:text-white focus:outline-none" defaultValue={defpassword}
                                onChange={(e) => { setPassword(e.target.value) }} />
                            <label className="text-[#067FB9] text-md mt-6 mb-1">New Password</label>
                            <input id="Password" type="password" className="p-2 h-10 w-fit text-[#067FB9] border-[#067FB9] border-2 rounded-lg focus:bg-[#067FB9] focus:text-white focus:outline-none" defaultValue={defpassword}
                                onChange={(e) => { setPassword(e.target.value) }} />
                            <label className="text-[#067FB9] text-md mt-6 mb-1">Confirm Password</label>
                            <input id="Password" type="password" className="p-2 h-10 w-fit text-[#067FB9] border-[#067FB9] border-2 rounded-lg focus:bg-[#067FB9] focus:text-white focus:outline-none" defaultValue={defpassword}
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>
                </div>
                <div className="flex translate-y-40 items-center justify-center space-x-10">
                    <button className="p-2 w-fit border-2 border-[#067FB9] text-[#067FB9] rounded-2xl hover:shadow-lg shadow-gray-800 transition duration-500 hover:translate-y-[-.4rem]" onClick={() => { resetDefaultUserInfo() }}> Reset values</button>
                    <button className="p-2 w-fit border-2 border-[#067FB9] bg-[#067FB9] text-white rounded-2xl hover:shadow-lg shadow-gray-800 transition duration-500 hover:translate-y-[-.4rem]" onClick={() => { submitUserNewInfo() }}> Submit Changes</button>
                </div>
            </div>
        </div>

    )
}
export default Settings

{/* <div className="grid grid-rows-3 h-screen items-center">
                <div className="">
                    <label>Username</label>
                    <input id="UserName" className="h-10 w-full border border-[#000000]" defaultValue={defusername} 
                        onChange={(e) => {setName(e.target.value)}}/>  
                </div>
                <div className="">
                    
                </div>
                <div className="">
                       
                </div>
              
                </div> */}