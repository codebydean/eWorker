import {useState} from "react"
import {useNavigate } from 'react-router-dom'
import axios from "axios";

import { useLocalStorage } from '../../components/Localstorage/Localstorage.js';

function Settings () {

    const [user,setUser] = useLocalStorage("user","");

    const NAVIGATE = useNavigate();

    const [name, setName] = useState(user.name)
    const [password, setPassword] = useState(user.password)
    const [email, setEmail] = useState(user.email)


    const defusername = user.name
    const defemail = user.email
    const defpassword = user.password

    const resetDefaultUserInfo = () =>{
        const UserName = document.getElementById("UserName")
        UserName.value = defusername

        const Email = document.getElementById("Email")
        Email.value = defemail

        const Password = document.getElementById("Password")
        Password.value = defpassword
      }

    const submitUserNewInfo = () =>{
        axios.put(`http://localhost:5000/users/${defemail}`, {email , name , password})
        .then(response => {
            setUser(response.data)  
        })
        
        //Litle delay to change the value of localstorage item user
        setTimeout(() => {
            NAVIGATE("/dashboard")
        }, 1000); 
      }


    return(
        <div className="Setting">
            <div className=" flex flex-col items-center justify-center h-screen w-screen">
                <div className="grid grid-rows-3 h-screen items-center">
                <div className="">
                    <label>Username</label>
                    <input id="UserName" className="h-10 w-full border border-[#000000]" defaultValue={defusername} 
                        onChange={(e) => {setName(e.target.value)}}/>  
                </div>
                <div className="">
                    <label>email</label>
                    <input id="Email" className="h-10 w-full border border-[#000000]" defaultValue={defemail}
                        onChange={(e) => {setEmail(e.target.value)}}/>    
                </div>
                <div className="">
                    <label>password</label>
                    <input id="Password" type="password" className="h-10 w-full border border-[#000000]" defaultValue={defpassword}
                        onChange={(e) => {setPassword(e.target.value)}}/>    
                </div>
                <div>
                    <button className="h-10 w-full border border-[#000000]" onClick={()=>{resetDefaultUserInfo()}}> Reset values</button>
                </div>
                <div>
                    <button className="h-10 w-full border border-[#000000]" onClick={()=>{submitUserNewInfo()}}> Submit Changes</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}
export default Settings