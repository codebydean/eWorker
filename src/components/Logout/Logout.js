
import {useNavigate } from 'react-router-dom'
import React from'react'

function Logout() {
    localStorage.removeItem("user")
    
    const NAVIGATE = useNavigate();
    
    React.useEffect(()=>{
        NAVIGATE("/home")
    },[])
    return(
        <>
        </>
    )
}



export default Logout