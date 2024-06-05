// Standard Imports & Dependencies
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import JobChart from '../Charts/JobsC'
import UnemploymentChart from '../Charts/UnemploymentC.js'

import { useLocalStorage } from '../../components/Localstorage/Localstorage.js';

//Function to calculate the title width
const calculateTitleWidth = (title) => `${title.length + 2}ch`;

//Function to restrict the characters in the card description
const calculateDesc = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

//Component for the dynamic input of icons
const JobTitleIcon = () => (
    // placeholder for dynamic icon input
    <svg className="w-6 h-6 text-[#067FB9] mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 7H11V13H13V7ZM13 15H11V17H13V15Z" fill="#067FB9" />
    </svg>
);

//Dynamic Creation of the Job Card
const JobCard = ({ title, description, location, maxDescriptionLength }) => {
    const titleWidth = calculateTitleWidth(title);
    const descLimit = calculateDesc(description, maxDescriptionLength);

    return (
        <div className='flex flex-col bg-white border-4 border-[#067FB9] rounded-2xl p-5  shadow-lg'>
            <div className='flex items-center'>
                <JobTitleIcon />
                <h2>{title}</h2>
            </div>
            <hr style={{ width: titleWidth }} className='h-1 rounded-sm bg-[#067FB9] mb-5 mt-2' />
            <span className='mb-5 text-sm'>{descLimit}</span>
            <div className='flex items-center mb-10'>
                <svg viewBox="0 0 24 24" width="32" className='mr-2' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#067FB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#067FB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <span className='text-[#067FB9]'>{location}</span>
            </div>

            <button className='flex rounded-full bg-[#067FB9] text-white p-2 w-28 h-8 items-center justify-center hover:shadow-lg shadow-gray-800 transition duration-500 hover:translate-y-[-.4rem]'>Apply now!</button>
        </div>
    );

}


// Initialization of the component
function Dashboard() {
    const [user, setUser] = useLocalStorage("user", "");

    return (
        <main className="Dashboard flex">
            {/* Dynamic Render of the Navbar */}
            <Navbar />
            <div className='w-full flex flex-col'>
                {/* Dynamic Render of the Header */}
                <Header />
                {/* Main Content here*/}
                <div className='h-full w-full flex flex-col p-4'>
                    <div id='jobCard' className='w-full mb-5 flex flex-row space-x-9'>
                        {/* Render Job Cards */}
                        <JobCard title="Software Engineer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Los Angeles, CA" maxDescriptionLength={100} />
                        <JobCard title="Product Designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Cupertino, CA" maxDescriptionLength={100} />
                        <JobCard title="UI Designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Miami, FL" maxDescriptionLength={100} />
                        <JobCard title="Community Manager" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Houston, TX" maxDescriptionLength={100} />
                        <JobCard title="UX Designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Thessaloniki, GR" maxDescriptionLength={100} />
                    </div>
                    <div id='News-Statistics' className='flex flex-row w-full space-x-10 mt-5'>
                        <div id='Statistics'  className='space-y-10'>
                            <div className='border-4 border-[#067FB9] rounded-xl pl-3 shadow-lg'><JobChart/></div>
                            <div className='border-4 border-[#067FB9] rounded-xl pl-3 shadow-lg'><UnemploymentChart/></div>
                        </div>
                        <div id='News'>test3</div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Dashboard
