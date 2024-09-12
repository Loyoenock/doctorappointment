import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    <section>
      {/* Conditionally render doctor details only when docInfo is available */}
      {docInfo ? (
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img src={docInfo.image} alt={docInfo.name} className='bg-primary w-full sm:max-w-72 rounded-lg' />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-8 bg-white mx-2 sm:max-0 mt-[-80] sm:mt-0'>
            {/* ---------Doctor info: Name, degree, Experience------------- */}
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {docInfo.name}
              <img src={assets.verified_icon} alt='verified' className='w-5' />
            </p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
            </div>

            {/* ------------- About Doctor---------------- */}
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                About <img src={assets.info_icon} alt='info' />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>
              Appointment Fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      ) : (
        <p>Loading doctor details...</p> // Show a loading state while docInfo is being fetched
      )}
    </section>
  );
};

export default Appointment;