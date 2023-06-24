import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import mdiMagnify from '@iconify/icons-mdi/magnify';

export default function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle your search here
      console.log(searchTerm);
    };
  
    return (
      <form onSubmit={handleSubmit} className='w-1/3 absolute top-16 right-16'>
        <div className="relative w-full m-auto">
          <input
            type="text"
            className='h-12 rounded-full w-full py-2 px-4 leading-tight focus:outline-none pl-10 shadow-lg text-black bg-gray-200'
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Icon icon={mdiMagnify} className='text-black' />
          </div>
        </div>
        <button
          type="submit"
          className='absolute right-0 top-0 text-white w-1/6 rounded-full h-12 bg-[#ff3d3e] shadow-lg'
        >
          Search
        </button>
      </form>
    );
  }  