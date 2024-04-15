import './Waiting.css';

// Function Declaration
export default function Waiting() {
    return (
        <div className='Waiting h-screen flex justify-center items-center'>
            {/* Centered content box */}
            <div className="max-w-lg w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center">
                <img className="h-60 w-auto mx-auto mb-4" src="/images/logoLight.png" alt="Logo" />

                <h1 className="text-5xl font-bold mb-4">Launching <span className='text-[#067FB9]'>Soon!</span></h1>
                <p className="text-lg mb-6">
                    At eWorker, we're dedicated to making a difference. Our <span className='font-bold'>open-source</span> project aims to support unemployed individuals of all backgrounds by connecting them with job opportunities and providing assistance with financial aid. <br></br>
                    <br></br>
                    Additionally, we strive to <span className='font-bold'>empower</span> individuals through access to educational programs, helping them enhance their skills and pursue their career goals.
                </p>
                <p className="text-lg mb-6">Check our Github repository frequently to stay up to date with the changes!</p>
                
                <div className="flex justify-center">
                    <a href="https://github.com/codebydean/eWorker" target="_blank" className="text-gray-600 hover:text-gray-800 mr-4">
                        <img src="/images/github.png" className='h-10'/>
                    </a>
                </div>
            </div>
        </div>
    );
}