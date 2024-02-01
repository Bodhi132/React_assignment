import React from 'react'
import linkedin from '../assets/socials/linkedin.png'
import github from '../assets/socials/github.png'
import discord from '../assets/socials/discord.png'
import twitter from '../assets/socials/twitter.png'

const SocialLinks = () => {
  return (
    <div className='flex justify-between sm:w-[250px] w-[166px]'>
        <img src={github} className=' h-7 w-7'/>
        <img src={twitter} className=' h-7 w-7'/>
        <img src={linkedin} className=' h-7 w-7'/>
        <img src={discord} className=' h-7 w-7'/>
    </div>
  )
}

export default SocialLinks