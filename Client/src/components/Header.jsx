import React from 'react'
import bell from '../assets/Home_page_assets/bell.png'
import { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];

  return (
    <div className='w-full flex h-20 justify-between items-center mb-10 mt-8'>
       <div className='ml-9 max-sm:hidden'>{lastSegment === 'upload' ? 'Upload CSV':''}</div>
       <div className='sm:hidden'></div>
      <div className='flex items-center pr-5'>
        <img src={bell} className=' h-[23px] w-[18px] mr-4' alt="" />
        <div className='w-7 h-7 ml-7 rounded-full bg-black'></div>
      </div>
    </div>
  )
}

export default Header