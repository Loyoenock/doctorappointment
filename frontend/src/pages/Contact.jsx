import React from 'react'
import { assets} from '../assets/assets'


const Contact = () => {
  return (
    <section>
      <div className='text-center text-2xl pt-10 text-gray-600'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'> 
        <img src={assets.contact_image} className='w-full md:max-w-[360px]'/>
        <div className='flex flex-col items-start gap justify-center gap-6'>
          <p className='font-semibold text-left text-gray-600'>OUR OFFICES</p>
          <p className='text-gray-600'> 1234 Street Name, Taxes <br /> United States</p>
          <p className='text-gray-600'> Phone: +1 123 456 789 <br /> Email: info@prescipto.com</p>
          <p className='font-semibold text-left text-gray-600'> CAREERS AT PRESCRIPTO </p>
          <p className='text-gray-600'>We are always looking for talented individuals to join our team.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </section>
  )
}

export default Contact