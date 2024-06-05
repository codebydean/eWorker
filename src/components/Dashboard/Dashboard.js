// Standard Imports & Dependencies
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'

import { useLocalStorage } from '../../components/Localstorage/Localstorage.js';


//Function to calculate the title width
const calculateTitleWidth = (title) => `${title.length + 2}ch`;

const JobTitleIcon = () => (
    // placeholder for dynamic icon input
    <svg className="w-6 h-6 text-[#067FB9] mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 7H11V13H13V7ZM13 15H11V17H13V15Z" fill="#067FB9" />
    </svg>
);

//Dynamic Creation of the title card
const JobCard = ({ title, description, location }) => {
    const titleWidth = calculateTitleWidth(title);

    return (
        <div className='flex flex-col bg-white border-4 border-[#067FB9] rounded-2xl p-5'>
            <div className='flex items-center'>
                <JobTitleIcon />
                <h2>{title}</h2>
            </div>
            <hr style={{ width: titleWidth}} className='h-1 rounded-sm bg-[#067FB9] mb-5 mt-2' />
            <span className='mb-5'>{description}</span>
            <span className='mb-10 text-[#067FB9]'>{location}</span>
            <button className='flex rounded-full bg-[#067FB9] text-white p-2 w-28 h-8 items-center justify-center'>Apply now!</button>
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
                    <div id='jobCard' className='w-full mb-5 flex flex-row space-x-11'>
                        {/* Render Job Cards */}
                        <JobCard title="Software Engineer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Los Angeles" />
                        <JobCard title="Product Designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Los Angeles" />
                        <JobCard title="UI Designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Los Angeles" />
                        <JobCard title="Community Manager" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Los Angeles" />
                        <JobCard title="UX Designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus mi ac libero hendrerit, eu sodales elit vulputate. Morbi semper placerat bibendum." location="Los Angeles" />
                    </div>
                    <div id='News-Statistics' className='flex flex-row w-full h-full space-x-10 mt-2'>
                        <div id='Statistics'>test2</div>
                        <div id='News'>test3</div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Dashboard


{/* <div id='card1' className='flex flex-col bg-white border-4 border-[#067FB9] rounded-2xl p-5'>
<h2>Job Title</h2>
<span>Description</span>
<span>Location</span>
<button className='flex rounded-full bg-[#067FB9] text-white p-2 w-28 h-8 items-center justify-center'>Apply now!</button>
</div> */}