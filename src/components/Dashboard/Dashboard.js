// Standard Imports & Dependencies
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'

import { useLocalStorage } from '../../components/Localstorage/Localstorage.js';

// Initialization of the component
function Dashboard() {
    const [user, setUser] = useLocalStorage("user", "");

    return (
        <main className="Dashboard flex">
            {/* Dynamic Render of the Navbar */}
            <Navbar/>
            <div className='w-full flex flex-col'>
                {/* Dynamic Render of the Header */}
                <Header/>
                {/* Main Content here*/}
                <div className='h-full w-full'>
                    test
                </div>
            </div>

        </main>
    );
}

export default Dashboard