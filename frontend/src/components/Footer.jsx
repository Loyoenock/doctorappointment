import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <section className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* --------------------- Left section------------------------- */}
        <div>
          <img src={assets.logo} alt=''className='mb-5 w-40' />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            Duis vulputate commodo.
          </p>
        </div>

        {/* --------------------- Center section------------------------- */}
        <div>
          <p className='text-xl font-medium uppercase mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Doctors</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* --------------------- Right section------------------------- */}
        <div>
          <p className='text-xl font-medium uppercase mb-5'>Get in Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Phone: +1234567890</li>
            <li>Email: info@email.com </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2024 All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer
