// Standard Imports & Dependencies
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import JobChart from '../Charts/JobsC'
import UnemploymentChart from '../Charts/UnemploymentC.js'

import { useLocalStorage } from '../../components/Localstorage/Localstorage.js';
import { useEffect, useState } from 'react'
import axios from 'axios'

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

//Dynamic Creation of the News Card
const NewsCard = ({ title, description, maxDescriptionLength }) => {
    const descLimit = calculateDesc(description, maxDescriptionLength);

    return (
        <div className='flex'>
            <div id='news-image' className='mr-3 cursor-pointer hover:shadow-l transition duration-500 hover:translate-y-[-.4rem]'>
                <svg fill="#067FB9" height="64" width="64px" viewBox="0 0 32 32" >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M28,14h-5V6c0-0.6-0.4-1-1-1H4C3.4,5,3,5.4,3,6v18c0,2.2,1.8,4,4,4h17c0.1,0,0.2,0,0.3-0.1c0.2,0,0.4,0.1,0.7,0.1 c2.2,0,4-1.8,4-4v-9C29,14.4,28.6,14,28,14z M10,16H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S10.6,16,10,16z M14,12H8 c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S14.6,12,14,12z M27,24c0,1.1-0.9,2-2,2c-0.2,0-0.4,0-0.6-0.1c0,0,0,0,0,0 c-0.6-0.2-1-0.7-1.2-1.2c0,0,0-0.1,0-0.1C23,24.4,23,24.2,23,24v-8h4V24z"></path> 
                    </g>
                </svg>
            </div>
            <div>
                <h2 className='text-md font-bold text-[#067FB9] mb-4'>{title}</h2>
                <span>{descLimit}</span>
            </div>
        </div>
    );
}


// Initialization of the component
function Dashboard() {
    const [news, setNews] = useState([])

    const getNewsData = () => {
        //Actual url  https://newsdata.io/api/1/latest?apikey=pub_45823fe08a973f774a3e0b1ef818d73f4f59c
        axios.get("http://localhost:5000/records"/*Dummy URL for */) 
        .then((res)=> {
            /*For dummy Url */setNews(res.data)
            //*For actual URL */setNews(res.data.results)
        })
    }

    useEffect(()=> {
        getNewsData()
    },[])

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
                    <div id='News-Statistics' className='flex flex-row w-full space-x-12 mt-24'>
                        <div id='Statistics' className='space-y-10 w-1/2'>
                            <div className='border-4 border-[#067FB9] rounded-xl p-2 shadow-lg'><JobChart /></div>
                            <div className='border-4 border-[#067FB9] rounded-xl p-2 shadow-lg'><UnemploymentChart /></div>
                        </div>
                        <div id='News' className='flex flex-col w-full space-y-10 justify-around'>
                            {
                                news.map((news)=>(
                                    <NewsCard title={news.title} description={news.description} maxDescriptionLength={200}/>
                                ))
                            }
                        
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Dashboard
