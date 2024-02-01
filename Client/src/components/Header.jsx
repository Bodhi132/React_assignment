import React from 'react'
import bell from '../assets/Home_page_assets/bell.png'

const Header = () => {
  return (
    <div className='w-full flex h-20 justify-between items-center'>
        <div className='ml-9'>Upload CSV</div>
        <div className='flex items-center pr-5'>
            <img src={bell} className=' h-[23px] w-[18px] mr-4' alt=""/>
            <div className='w-7 h-7 ml-7 rounded-full bg-black'></div>
        </div>
    </div>
  )
}

export default Header