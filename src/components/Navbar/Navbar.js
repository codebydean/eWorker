import { NavLink } from "react-router-dom";

/* Import of Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faRightFromBracket, faCopy, faBook, faCalendarCheck, faCommentsDollar, faQuestion, faGear } from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../components/Context/Context';
import { useContext} from "react";

library.add(faHouse, faCopy, faBook, faCalendarCheck, faCommentsDollar, faQuestion, faGear, faRightFromBracket)




function Navbar(){

    const {
        currentUser
      } = useContext(UserContext);


    return (<div id='navigation' className='bg-[FFFFFF] h-screen w-1/6 grid grid-rows-4'>
    <div id='logo' className='flex justify-center align-center translate-y-8'>
        <img src='images/logoLight.png' alt="" className='w-auto h-14' />
    </div>
    <div id='navigation' className='flex flex-col flex-1 px-4 mt-1'>
        <div className='space-y-4'>
        <nav id='main-menu' className='flex-1 space-y-2 translate-y-[-5rem]'>
                <span className='font-bold space-y-1 space-x-2 text-lg'>Main Menu</span>

                <NavLink exact to="/Dashboard" className='w-full flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group '>
                    <FontAwesomeIcon icon={faHouse} className='h-5 w-5 flex-shrik-0 mr-2' />
                    Dashboard
                </NavLink>

                <NavLink to="/JobListings" className='w-full flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200  group'>
                    <FontAwesomeIcon icon={faCopy} className='h-5 w-5 flex-shrik-0 mr-2' />
                    Job Listings
                </NavLink>

                <NavLink to="/TrainingCourses" className='w-full flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group'>
                    <FontAwesomeIcon icon={faBook} className='h-5 w-5 flex-shrik-0 mr-2' />
                    Training Courses
                </NavLink>

                <NavLink to="/WorkPrograms" className='w-full flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group'>
                    <FontAwesomeIcon icon={faCalendarCheck} className='h-5 w-5 flex-shrik-0 mr-2' />
                    Work Programs
                </NavLink>

                <NavLink to="/FinancialAid" className='w-full flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group'>
                    <FontAwesomeIcon icon={faCommentsDollar} className='h-5 w-5 flex-shrik-0 mr-2' />
                    Financial Aid
                </NavLink>

            </nav>

            <nav id='account-menu' className='flex-1 space-y-2 translate-y-[-4rem]'>
                <span className='font-bold space-y-1 space-x-2 text-lg'>Account</span>

                <NavLink to="/Support" className='w-full flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group'>
                    <FontAwesomeIcon icon={faQuestion} className='h-5 w-5 flex-shrik-0 mr-2' />
                    Get Help
                </NavLink>

                <NavLink to="/Settings" className='w-full flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200  group'>
                    <FontAwesomeIcon icon={faGear} className='h-5 w-5 flex-shrik-0 mr-2' />
                    Settings
                </NavLink>

                <NavLink to="/Logout" className='w-full flex items-center px-4 py-2.5 text-lg font-bold text-[#067FB9] hover:bg-[#067FB9] hover:text-white rounded-xl focus:bg-[#067FB9] focus:text-white transition-all duration-200 group'>
                    <FontAwesomeIcon icon={faRightFromBracket} className='h-5 w-5 flex-shrik-0 mr-2' />
                    Logout
                </NavLink>

            </nav>
            <div className='pb-3 mt-20 fixed bottom-0'>
                <button className='flex items-center justify-center text-center align-center w-full px-4 py-3 text-lg font-medium text-[#067FB9] hover:shadow-2xl hover:rounded-xl hover:-translate-y-2 hover:bg-[#067FB9] hover:text-white hover:w-full transition-all duration-300 hover:ease-in'>
                <img className="flex-shrink-0 object-cover w-14 h-14 mr-5 rounded-full" src={currentUser.picture} alt="" />
                    {currentUser.name}
                </button>
            </div>
        </div>
    </div>

</div>)
  }

export default Navbar