import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Home_page_assets/logo.png'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { jwtDecode } from 'jwt-decode'

const Home = (props) => {

  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
          const decoded = jwtDecode(token);
          setUser(decoded.user);
        } else {
          throw new Error('Token not found');
        }
      } catch (error) {
        console.error('Error handling auth callback', error);
      }
    };

    handleAuthCallback();
  }, []);
  

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