import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null);
  const [docSots, setDocSots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  


  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSots([])

    // Getting current date
    let today = new Date();

    for(let i = 0; i < 7; i++) {
      // Getting Dtae with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // Setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      // setting Hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = [] 

      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hours: '2-digit', minute: '2-digit'})
    
        // Add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // Increment current time by 30 minnutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSots(prev => ([...prev, timeSlots]))
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

useEffect(() => {
  console.log(docSots)
}, [docSots])

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

        {/* ----------------------- Booking Slot -------------------------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {  
            docSots.length && docSots.map((item, index) => (
            <div key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Appointment;