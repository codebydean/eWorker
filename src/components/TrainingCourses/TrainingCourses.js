// Standard Imports & Dependencies
import { useNavigate } from 'react-router-dom'
import './TrainingCourses.css'
import Navbar from '../Navbar/Navbar'



// Initialization of the component
function TrainingCourses() {

    // Creation of the navigate constant
    const NAVIGATE = useNavigate();

    return (
        <main className="TrainingCourses flex">
            <Navbar></Navbar>
            <div id='main' className='bg-[blue] h-screen w-5/6'>
                test
            </div>
        </main>
    );
}

export default TrainingCourses