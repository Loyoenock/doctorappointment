import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Loyoh Enoch',
    image: assets.profile_pic,
    email: 'loyoenoch@gmail.com',
    phone: '+234 123 456 789',
    address: {
      line1: '1234 Street Name',
      line2: 'Taxes',
    },
    gender: 'Male',
    dob: '01/01/1990',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <section className='max-w-lg flex flex-col gap-4 text-sm'>
      <img src={userData.image} className='w-36 rounded' alt='Profile Pic' />

      {
        isEdit
          ? <input type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} className='bg-gray-50 text-3xl font-medium max-w-full mt-4' />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2 gap-x-4 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>

          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-full' type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userData.phone}</p>
          }

          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <div>
                  <input className='bg-gray-50 w-full mb-1' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                  <input className='bg-gray-50 w-full' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} />
                </div>
              : <p className='text-gray-500'>
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2 gap-x-4 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select className='bg-gray-100 max-w-20' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }

          <p className='font-medium'>Date of Birth:</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-28' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        { 
          isEdit 
          ? <button onClick={() => setIsEdit(false)} className='border border-primary  px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Save Information</button>
          : <button onClick={() => setIsEdit(true)} className='border border-primary  px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>
        }
      </div>
    </section>
  );
}

export default MyProfile;