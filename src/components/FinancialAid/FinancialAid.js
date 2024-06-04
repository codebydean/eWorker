// Standard Imports & Dependencies
import { useNavigate } from 'react-router-dom'
import './FinancialAid.css'

import axios from "axios"
import {useEffect, useState } from "react"


import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import FinancialAidList from './FinancialAidList.js'



// Initialization of the component
function FinancialAid() {

    // Creation of the navigate constant
   const NAVIGATE = useNavigate();

    const [financial,setfinancial] = useState([])
    
    function getData(){
        axios.get(`http://localhost:5000/finacials`)
        .then((response) => setfinancial(response.data))
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
                    <FinancialAidList data={financial}/>
                </div>
            </div>
        </main>
    );
}

export default FinancialAid