import React from 'react'
import { assets} from '../assets/assets'

const About = () => {
  return (
    <section>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>        
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img  src={assets.about_image} className='w-full md:max-w-[360px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescrpto - your one-stop solution for all your prescription needs. We are a team of dedicated professionals who are committed to providing you with the best possible service. </p>
          <p>Our goal is to make your life easier by providing you with the medications you need, when you need them. Whether you are looking for a prescription refill or a new medication, we are here to help. Our team of pharmacists is always available to answer any questions you may have and to provide you with the information you need to make informed decisions about your health. We look forward to serving you and helping you live a healthier, happier life.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to be the leading provider of prescription medications in the United States. We are committed to providing our customers with the highest quality medications at the most affordable prices. We believe that everyone deserves access to the medications they need to live a healthy life, and we are dedicated to making that vision a reality.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p> We are committed to providing you with the fastest and most efficient service possible. Our team of pharmacists works tirelessly to ensure that your medications are delivered to you in a timely manner, so you can get back to living your life.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all text-gray-600 cursor-pointer'>
          <b>CONVIENCE:</b>
          <p> We understand that life can be busy, which is why we offer a range of convenient services to make your life easier. From online ordering to home delivery, we are here to help you get the medications you need, when you need them.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all text-gray-600 cursor-pointer'>
          <b>PERSONALISATION</b>
          <p> We believe that everyone is unique, which is why we offer a range of personalized services to meet your individual needs. Our team of pharmacists is always available to answer any questions you may have and to provide you with the information you need to make informed decisions about your health.</p>
        </div>
      </div>
    </section>
  )
}

export default About