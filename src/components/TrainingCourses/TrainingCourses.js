// Standard Imports & Dependencies
import { useNavigate } from 'react-router-dom'
import './TrainingCourses.css'

import axios from "axios"
import {useEffect, useState } from "react"

import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'

import TrainCourcesList from './TrainCourcesList.js'



// Initialization of the component
function TrainingCourses() {

    // Creation of the navigate constant
    const NAVIGATE = useNavigate();
    const [TrainCource,setTrainCource] = useState([])
    
    function getData(){
        axios.get(`http://localhost:5000/TrainCources`)
        .then((response) => setTrainCource(response.data))
    }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        TrainCource.map((Train) => {
            console.log(Train.Dates.Application.split("T")[0])
        })
        //TrainCource.Dates 
    },[TrainCource])

    return (
        <main className="Dashboard flex">
            <Navbar/>
            <div className='w-full flex flex-col'>
                <Header/>
                <div className='w-full h-full flex flex-col items-center'>
                    <TrainCourcesList data={TrainCource}/>
                </div>
            </div>
        </main>
    );
}

export default TrainingCourses