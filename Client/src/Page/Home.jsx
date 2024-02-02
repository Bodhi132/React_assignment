import React from 'react'
import { useState } from 'react'
import logo from '../assets/Home_page_assets/logo.png'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import burger from '../assets/burger.png'
import { useLocation } from 'react-router-dom'

const Home = (props) => {

  
  const [open, setOpen] = useState(false)
  
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];

  React.useEffect(() => {
    if (
      lastSegment === 'upload' ||
      lastSegment === 'dashboard' ||
      lastSegment === 'invoice' ||
      lastSegment === 'schedule' ||
      lastSegment === 'calender' ||
      lastSegment === 'notification' ||
      lastSegment === 'setting'
    ) {
      setOpen(false);
    }
  }, [lastSegment]);

  return (
    <>
      <div className='absolute top-10 left-10 flex items-center w-[111px] justify-around'>
        <img src={burger} className={`sm:hidden mr-3 ${open ? 'hidden' : 'block'}`} onClick={() => setOpen(!open)} />
        <img src={logo} className='h-10 w-10 max-sm:mr-3' />
        <p className=' font-nunito font-semibold text-[24px]'>Base</p>
      </div>
      <div className='flex w-screen h-screen bg-slate-50'>
        <NavBar open={open} />
        {!open &&<div className='flex w-full flex-col'>
          <Header />
          { props.children}
        </div>}
        {
          open && <p className='absolute right-10 top-10 text-gray-400' onClick={()=>setOpen(!open)}>X</p>
        }
      </div>
    </>
  )
}

export default Home