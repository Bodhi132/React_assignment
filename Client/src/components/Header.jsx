import React from 'react'
import bell from '../assets/Home_page_assets/bell.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];

  const [menu, setMenu] = useState(false)

  const handleLogout = async () => {
    try {

      const authMethod = localStorage.getItem('authMethod'); // Replace with your actual key

      // Make a request to the server to log out
      if (authMethod === 'jwt') {
        await axios.post('/auth/logout/jwt');
      } else if (authMethod === 'google') {
        await axios.post('/auth/logout/google');
      } else {
        console.error('Invalid auth method');
        return;
      }
      localStorage.removeItem('token');
      localStorage.removeItem('authMethod');

      setUser(null);
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <div className='w-full flex h-20 justify-between items-center mb-10'>
      <div className='ml-9 max-sm:hidden'>{lastSegment === 'upload' ? 'Upload CSV' : ''}</div>
      <div className='sm:hidden'></div>
      <div className='flex items-center pr-5 relative'>
        <img src={bell} className=' h-[23px] w-[18px] mr-4' alt="" />
        <div className='w-7 h-7 ml-7 rounded-full bg-black cursor-pointer' onClick={() => setMenu(!menu)}></div>
        {menu && <div className={`bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-full mt-2 right-0 dark:bg-gray-700 p-4`}>
          <button className=' text-blue-500 font-montserrat text-lg' onClick={handleLogout}>Log Out</button>
        </div>
        }
      </div>
    </div>
  )
}

export default Header
