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
    const [page,setPage] = useState(0)
    
    function getData(){
        axios.get(`https://www.themuse.com/api/public/jobs?page=${page}`)
        .then((response) => 
            {
            setJobs(response.data.results)
        })
    }

    useEffect(()=>{
        getData()
    },[page])

    return (
        <main className="Dashboard flex">
            <Navbar/>
            <div className='w-full flex flex-col'>
                <Header/>
                <div className='w-full h-full flex flex-col items-center'>
                <div className='w-full h-full flex flex-row justify-center items-center'>
                        <button className="flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group" onClick={()=>{if(page===0){setPage(0)}else {setPage(page-1)} }}>Previous Page</button>
                        <button className="flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group" onClick={()=>{if(page===10){setPage(10)}else {setPage(page+1)}}}>Next Page</button>   
                    </div>
                    <JobCards data={jobs}/>    
                    <div className='w-full h-full flex flex-row justify-center items-center'>
                        <button className="flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group" onClick={()=>{if(page===0){setPage(0)}else {setPage(page-1)} }}>Previous Page</button>
                        <button className="flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group" onClick={()=>{if(page===10){setPage(10)}else {setPage(page+1)}}}>Next Page</button>   
                    </div>
                </div>
                
            </div>
        </main>
    );
}

export default JobListings