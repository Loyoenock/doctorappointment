import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx=10'>
      <h1 className='text-3xl font-medium'>Top Docors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'> simply browse and book the best doctors in your city</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
          doctors.slice(0, 10).map((doctor, i) => (
            <div onClick={() => {navigate(`/appointment/${doctor._id}`); scrollTo(0,0)}} key={i} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10] transition-all duration-500'>
              <img src={doctor.image} className='bg-blue-50' />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
                <p className='text-gray-900 font-lg font-medium'>{doctor.name}</p>
                <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
              </div>
             
            </div>
          ))
        }         
      </div>
      <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className='text-gray-600 bg-blue-50 px-12 py-3 rounded-full mt-10'>More</button>
    </section>
  )
}

export default TopDoctors