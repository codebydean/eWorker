// Standard Imports & Dependencies
import { useNavigate } from 'react-router-dom'
import './JobsListings.css'

import axios from "axios"
import {useEffect, useState } from "react"

import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import JobCards from './JobCards'



// Initialization of the component
function JobListings() {
    // Creation of the navigate constant
    const NAVIGATE = useNavigate();


    const [jobs,setJobs] = useState([])
    
    function getData(){
        axios.get(`https://www.themuse.com/api/public/jobs?page=0`)
        .then((response) => 
            {
            setJobs(response.data.results)
        })
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
                    <JobCards data={jobs}/>                 
                </div>
            </div>
        </main>
    );
}

export default JobListings