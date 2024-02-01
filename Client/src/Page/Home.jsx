import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Home_page_assets/logo.png'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const Home = (props) => {

  return (
    <>
      <div className='absolute top-10 left-10 flex items-center w-[111px] justify-around'>
        <img src={logo} className='h-10 w-10' />
        <p className=' font-nunito font-semibold text-[24px]'>Base</p>
      </div>
      <div className='flex w-screen h-screen bg-slate-50'>
        <NavBar />
        <div className='flex flex-col'>
          <Header />
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Home