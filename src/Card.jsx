import React from "react";

function Card(){
    return(

        <>
        <div className="mt-8 bg-light rounded shadow-md overflow-hidden relative">
            <div className="">
                <img src="images/stew.jpeg" alt="stew" className="w-full object-cover" />
                <div className="m-4">
                    <span className='text-gray-500'>5 been chilli stew</span>
                    <span className='block text-sm'>Recipe by Mario</span>
                </div>
            </div>

            <div className="uppercase top-0 ml-2 mt-2 bg-light-500 text-gray-800 rounded-full p-2 text-xs font-bold absolute">
                <span>25 min</span>
            </div>
        </div>
        
        <div className="mt-8 bg-light rounded shadow-md overflow-hidden relative">
            <div>
                <img src="images/stew.jpeg" alt="stew" className="w-full object-cover" />
                <div className="m-4">
                    <span className='text-gray-500'>5 been chilli stew</span>
                    <span className='block text-sm'>Recipe by Mario</span>
                </div>
            </div>

            <div className="uppercase top-0 ml-2 mt-2 bg-light-500 text-gray-800 rounded-full p-2 text-xs font-bold absolute">
                <span>25 min</span>
            </div>
        </div>
        <div className="mt-8 bg-light rounded shadow-md overflow-hidden relative">
            <div>
                <img src="images/stew.jpeg" alt="stew" className="w-full object-cover" />
                <div className="m-4">
                    <span className='text-gray-500'>5 been chilli stew</span>
                    <span className='block text-sm'>Recipe by Mario</span>
                </div>
            </div><div className="uppercase top-0 ml-2 mt-2 bg-light-500 text-gray-800 rounded-full p-2 text-xs font-bold absolute">
                <span>25 min</span>
            </div>
        </div>
            
            </>


    )
}

export default Card;