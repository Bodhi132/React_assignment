import React from 'react';
import line from '../assets/sign_in_assets/waves.png'

const LogoComp = () => {
    return (
        <>
            <div className="bg-white rounded-full h-[80px] w-[80px] sm:flex items-center hidden ">
                <img src={line} className="object-cover w-full" />
            </div>
        </>
    );
}

export default LogoComp;
