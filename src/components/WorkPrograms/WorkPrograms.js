// Standard Imports & Dependencies
import { useNavigate } from 'react-router-dom'
import './WorkPrograms.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'



// Initialization of the component
function WorkPrograms() {

    // Creation of the navigate constant
    const NAVIGATE = useNavigate();

    return (
        <main className="Dashboard flex">
            <Navbar/>
            <div className='w-full flex flex-col'>
                <Header/>
                <div className='w-full h-full'>
                    Job Listings
                </div>
            </div>
        </main>
    );
}

export default WorkPrograms