// Standard Imports & Dependencies
import { useNavigate, NavLink } from 'react-router-dom'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'


/* Import of Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faRightFromBracket, faCopy, faBook, faCalendarCheck, faCommentsDollar, faQuestion, faGear } from '@fortawesome/free-solid-svg-icons';



/* Creation of a Library instance to store the variables from the font awesome imports */
library.add(faHouse, faCopy, faBook, faCalendarCheck, faCommentsDollar, faQuestion, faGear, faRightFromBracket)


// Initialization of the component
function Dashboard() {

    // Creation of the navigate constant
    const NAVIGATE = useNavigate();

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