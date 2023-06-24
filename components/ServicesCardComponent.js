import React from "react";

export default function ServicesCardComponent() {
    return (
        <div className='w-1/3 h-96 bg-white rounded-lg shadow-lg'>
            <div className='w-full h-1/2 bg-[#FF9933] rounded-t-lg'></div>
            <div className='w-full h-1/2 p-4'>
                <h1 className='text-2xl font-bold'>Service Name</h1>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
        </div>
    )
};