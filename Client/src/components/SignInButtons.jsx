import React from 'react'

const SignInButtons = ({ imgUrl, type }) => {
    return (
        <div className=' sm:w-[197.6px] w-[153px] h-[32.93px] bg-[#ffffff] flex justify-around items-center rounded-[10px]'>
            <img src={imgUrl} className=' w-[15.37px] h-[15.37px]'/>
            <p className='font-montserrat text-[#858585] font-[400] text-[12px]'>{`Sign in with ${type}`}</p>
        </div>
    )
}

export default SignInButtons