import React from 'react'

const SignInButtons = ({ imgUrl, type, onClick }) => {
    const [buttonState, setButtonState] = React.useState("loaded");
    const handleClick = async () => {
        setButtonState("loading");
        await onClick();
        setButtonState("loaded");
    };
    return (
        <div onClick={handleClick} className=' sm:w-[197.6px] w-[153px] h-[32.93px] bg-[#ffffff] flex justify-around items-center rounded-[10px]'>
            <img src={imgUrl} className=' w-[15.37px] h-[15.37px]' />
            <p className='font-montserrat text-[#858585] font-[400] text-[12px]'>{buttonState === "loaded" ? `Sign in with ${type}` : "wait..."}</p>
        </div>
    )
}

export default SignInButtons