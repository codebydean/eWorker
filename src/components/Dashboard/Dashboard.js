// Standard Imports & Dependencies
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'

// Initialization of the component
function Dashboard() {


    return (
        <main className="Dashboard flex">
            <Navbar></Navbar>
            <div id='main' className='bg-[blue] h-screen w-5/6'>
                test
            </div>
        </main>
    );
}

export default Dashboard