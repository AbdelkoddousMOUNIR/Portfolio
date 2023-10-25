import React from 'react'
import '../styles/About.css'
import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons'
import profileImg from '../imgs/profileImg.png'

export default function About() {
  return (
    <div className='About'>
        <div className="infos">
            <h2>hi i'm</h2>
            <h1>abdelkoddous mounir</h1>
            <TypeAnimation
          sequence={[
                "front end Developer",
                1500,
                "back end Developer",
                1500,
                "full stack Developer",
                1500
                ]}
                speed={30}
                repeat={Infinity}
                className='text'
              />
              <h2>from morocco .</h2>
            <div className="socialMediaIcons">
                  <SocialIcon url="https://www.linkedin.com/in/abdelkoddous-mounir-50373a294/" className='icon'/>
                  <SocialIcon url="https://github.com/AbdelkoddousMOUNIR" className='icon' />
                  <SocialIcon url="mailto:abdelkoddousmounir@gmail.com" className='icon' />
                  <SocialIcon url="https://api.whatsapp.com/message/6KPU743BLRSWI1?autoload=1&app_absent=0" className='icon' />
                  <SocialIcon url="https://www.facebook.com/profile.php?id=100086849074542&mibextid=ZbWKwL" className='icon fbIcon' />
            </div>
        </div>
      <div className="imageContainer">
        <img src={profileImg} alt="profileImg" />
      </div>  
    </div>
  )
}
