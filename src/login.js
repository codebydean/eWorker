import { useState } from "react";
import axios from 'axios'



function Login(){
    const[username,setUsername] = useState()
    const[password,setPassword] = useState()



    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/users/login',{username,password})
        .then(result => {
            if(result.data ==="Success"){
                console.log("Fine")
            } else {
                console.log("NAh ah")
            }
        })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex justify-content-center align-items-center bg-secodary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">
                        <strong>Email</strong>
                        </label>
                        <br></br>
                        <input type="text" placeholder="Enter username"
                            className="form-control rounded-0" 
                            onChange={e=> setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">
                        <strong>password</strong>
                        </label>
                        <br></br>
                        <input type="text" placeholder="Enter username"
                            className="form-control rounded-0" 
                        onChange={e=> setPassword(e.target.value)}
                        />
                    </div>
                        <button type="submit" className="btn btn-default border w-100 bg-light rounded-0">
                            Login
                        </button>
                </form>
            </div>

        </div>
    );
}

export default Login