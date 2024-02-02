import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import googleImage from '../assets/sign_in_assets/google.png'
import appleImage from '../assets/sign_in_assets/apple.png'
import SignInButtons from '../components/SignInButtons'
import LogoComp from '../components/LogoComp'
import SocialLinks from '../components/SocialLinks'
import logoMobile from '../assets/sign_in_assets/logo_mobile.png'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Button from '../components/Button'
//style={{"clip-path": "polygon(0 0, 100% 0, 79% 100%, 0% 100%)"}}
const SignUp = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [login, setLogin] = useState(true)

    const handleRegister = async () => {
        try {
            let res = await axios.post('https://react-assignment-backend-em0t1xo50-bodhi132.vercel.app/auth/register', { email, password });
            // Check if the request was successful
            if (res.status === 200) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        setPassword('');
                        setEmail('');
                        navigate('/home')
                        resolve();
                    }, 3000);
                });
            } else {
                console.log('Error:', res.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleLogin = async () => {
        try {
            let res = await axios.post('https://react-assignment-backend-em0t1xo50-bodhi132.vercel.app/auth/login', { email, password });
            // Check if the request was successful
            if (res.status === 200) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const token = response.data.token;
                        const decoded = jwtDecode(token);
                        setUser(decoded.user);
                        setEmail('');
                        setPassword('');
                        navigate('/home')
                        resolve()
                    }, 3000);
                });
            } else {
                console.log('Error:', res.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    const handleGoogleLogin = async () => {
        
        window.open("https://react-assignment-red.vercel.app/auth/google/callback","_self")
      };
      

    return (
        <div className=' h-screen w-screen bg-[#F8FAFF] flex flex-col sm:flex-row'>
            <div className=' sm:w-1/2 w-screen bg-[#605BFF] flex justify-between sm:clipping-path'>
                <div className='w-full flex max-sm:items-center max-sm:h-[80px] ml-4'>
                    <div className='sm:mt-7'>
                        <img src={logoMobile} className='h-[26px] w-[25px] sm:hidden' />
                        <LogoComp />
                    </div>
                    <div className='flex flex-col w-full sm:mt-[50%] justify-between'>
                        <h1 className='sm:ml-[5rem] ml-[1rem] sm:font-montserrat font-nunito sm:font-bold font-semibold sm:text-[72px] text-[20px] text-white'>BASE</h1>
                        <div className='ml-[5rem] mb-5 sm:block hidden'>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
                {/* <div className='w-0 h-0 border-b-[100vh] border-l-[10rem] border-l-transparent border-[#F8FAFF] max-sm:hidden'></div> */}
            </div>
            <div className='sm:w-1/2 bg-[#F8FAFF] flex flex-col sm:mt-24 mt-[0.75rem]'>
                <div className='sm:w-[422.64px] w-[328px] h-[390.8px] space-y-4 sm:ml-[3rem] ml-[1rem]'>
                    <div className='flex flex-col font-montserrat'>
                        <h1 className=' font-bold sm:text-[36px] text-[24px]'>Sign In</h1>
                        <h2 className=' font-lato sm:text-[16px] text-[12px]'>Sign in to your account</h2>
                    </div>
                    <div className='flex justify-between sm:mb-4'>
                        <SignInButtons imgUrl={googleImage} type={'Google'} onClick={handleGoogleLogin}/>
                        {/* <SignInButtons imgUrl={appleImage} type={'Apple'} /> */}
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <div className='w-full h-[347px] bg-[#ffffff] rounded-[20px] flex flex-col justify-center'>
                            <form>
                                <div className='h-full flex flex-col space-y-5 p-8'>
                                    <div className=' flex flex-col space-y-2'>
                                        <label htmlFor="email" >Email address</label>
                                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className=' bg-[#EAEAEA] rounded-[10px] h-[43px]' />
                                    </div>
                                    <div className=' flex flex-col space-y-2'>
                                        <label htmlFor="password" >Password</label>
                                        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className=' bg-[#EAEAEA] rounded-[10px] h-[43px]' />
                                    </div>
                                    <p>Forgot password?</p>
                                    {/* {login?(<button className='h-[43px] bg-[#605BFF] text-white font-montserrat font-bold text-[16px] rounded-[10px]' onClick={handleLogin}>Sign In</button>):
                                    (<button className='h-[43px] bg-[#605BFF] text-white font-montserrat font-bold text-[16px] rounded-[10px]' onClick={handleRegister}>Sign Up</button>)} */}
                                    {
                                        <Button onClick={login?handleLogin:handleRegister}>{login ? 'Sign In' : 'Sign Up'}</Button>
                                    }
                                </div>
                            </form>
                        </div>
                        <p className='mt-2'>{login ? "Don't have an acount?" : "Login to your account."} <span className=' text-[#605BFF] font-lato text-[16px] max-sm:block max-sm:ml-6' onClick={() => setLogin(!login)}>{login ? 'Register here' : 'Login here'}</span></p>
                    </div>
                </div>
            </div>
            <div className='sm:hidden absolute bottom-3'>
                <SocialLinks />
            </div>
        </div>
    )
}

export default SignUp