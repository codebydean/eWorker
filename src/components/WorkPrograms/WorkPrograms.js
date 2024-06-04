// Standard Imports & Dependencies
import { useNavigate } from 'react-router-dom'
import './WorkPrograms.css'

import axios from "axios"
import {useEffect, useState } from "react"

import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'

import WorkProgramList from './WorkPrograList'



// Initialization of the component
function WorkPrograms() {

    // Creation of the navigate constant
    const NAVIGATE = useNavigate();

    const [workPrograms,setworkPrograms] = useState([])
    
    function getData(){
        axios.get(`http://localhost:5000/workPrograms`)
        .then((response) => setworkPrograms(response.data))
    }

    useEffect(()=>{
        getData()
    },[])

    

    return (
        <main className="Dashboard flex">
            <Navbar/>
            <div className='w-full flex flex-col'>
                <Header/>
                <div className='w-full h-full flex flex-col items-center'>
                    <WorkProgramList data={workPrograms}/>
                </div>
            </div>
        </main>
    );
}

export default WorkPrograms