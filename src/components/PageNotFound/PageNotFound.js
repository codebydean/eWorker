import { useNavigate } from 'react-router-dom'
import './PageNotFound.css'

// Function Declaration
export default function PageNotFound() {

    const NAVIGATE = useNavigate();  
    return(
        <div className='flex grid grid-rows-2 gap-10 h-screen PageNotFound'>
            <div className="flex justify-center items-center">
                <img className="h-60 w-auto" src="images/logo.png"/>
            </div>
            <div className="text-center text-white">
                <h1 className="text-4xl">Oops! You seem to be <label className="text-[#067FB9]">lost.</label></h1>
                <p className="p-4 text-lg">Looks like you've wandered off the beaten path. Let's get you back on track!</p>
                <button className="bg-[#067FB9] text-white p-5 cursor-pointer rounded-xl" onClick={()=>{NAVIGATE("/Home")}}>
                    Go back to Home 🏠
                </button>
            </div>
        </div>

    );
}
