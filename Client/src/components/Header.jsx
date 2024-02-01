import React from 'react'
import bell from '../assets/Home_page_assets/bell.png'
import { useEffect } from 'react'
import axios from 'axios'

const Header = () => {

  return (
    <div className='w-full flex h-20 justify-between items-center mb-10'>
      <div className='ml-9'>Upload CSV</div>
      <div className='flex items-center pr-5'>
        <img src={bell} className=' h-[23px] w-[18px] mr-4' alt="" />
        <div className='w-7 h-7 ml-7 rounded-full bg-black'></div>
      </div>
    </div>
  )
}

export default Header