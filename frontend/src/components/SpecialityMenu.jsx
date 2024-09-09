import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <section id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Find By Speciality</h1>
      <p className='sm:w-1/3 text-center     text-sm'>Simply Browse by Speciality to find the best doctor for you, schedule an appointment and get the best treatment.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {
          specialityData.map((doctor, i) => (
            <Link onClick={() => scrollTo(0,0)} key={i} to={`/doctors/${doctor.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
              <img src={doctor.image} alt='' className='w-16 sm:w-24 mb-2' />
              <p>{doctor.speciality}</p>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default SpecialityMenu