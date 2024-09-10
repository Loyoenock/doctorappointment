import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  return (
    <section className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* --------------------Left side -------------------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white   font-semibold leading-tight md:leading-tight lg:leading-tight '>Book Appoitment <br/> With Trusted Doctors</p>        
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img src={assets.group_profiles} alt=''className='w-28' />
          <p>Find the best doctors in your city. <br className='hidden sm:block'/> Book an appointment with just a few clicks.</p>
        </div>
        <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105  transition-all duration-300'>Book Appointment <img  src={assets.arrow_icon} className='w-3'/> </a>      
      </div>
       {/* --------------------Right side -------------------- */}
      <div className='md:w-1/2 relative'>
        <img src={assets.header_img} className='w-full md:absolute bottom-0 h-auto rounded-lg' />
      </div>
    </section>
  )
}

export default Header