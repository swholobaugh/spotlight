import React from "react";
import teamImage from '../../assets/team1.png'

const About = () => {

  return (
    <div className='flex flex-col justify-center items-center bg-white p-6 w-full'>
      <section className='text-center mb-6'>
        <p className='text-[#2C2C2C]'>Contact us at <span className='font-semibold text-[#500000]'>support@AggieSpotlight.com</span></p>
        <p className='text-[#2C2C2C]'>Call us at <span className='font-semibold text-[#500000]'>123-867-5309</span></p>
      </section>
      <section className='w-3/4 mb-8'>
        <h1 className='text-xl text-[#500000] font-bold mb-4'>Mission Statement</h1>
        <p className='text-[#2C2C2C] leading-relaxed'>
          Our mission is to lead with excellence and demonstrate integrity in our project based on the Aggie Core Values. We believe that aligning with these core values will help us achieve success not only in this project but throughout all our lives. We aim to help others achieve this same alignment in order for our communities to achieve their greatest possible levels of success.
        </p>
      </section>
      <section className='w-3/4 mb-8'>
        <h1 className='text-xl text-[#500000] font-bold mb-4'>About Spotlight</h1>
        <p className='text-[#2C2C2C] leading-relaxed'>
          To be an Aggie one must try to abide by the Core Values of Respect, Excellence, Leadership, Loyalty, Integrity, and Selfless Service. When an Aggie is not only abiding by the Core Values but exemplifying the Core Values of Integrity and/or Excellence we want to shine a spotlight on them for other Aggies to follow.
        </p>
      </section>
      <section className='w-3/4 mb-8'>
        <h1 className='text-xl text-[#500000] font-bold mb-4'>About Us</h1>
        <p className='text-[#2C2C2C] leading-relaxed'>
          We are Team AGS; Aaron, Garrett, and Seth! A group of 3 students in an online masters program for Management Information Systems who have a lofty goal of creating something worthy of getting the coveted "A" in their course. From different backgrounds, they realized they each brought something unique and important to develop the best way to shine a spotlight on fellow Aggies. With that, the Aggie Spotlight was born.
        </p>
      </section>
      <section className='w-2/3 flex justify-center'>
        <img
          className='w-full max-w-md justify-center rounded-lg shadow-lg border-2 border-[#500000] object-cover'
          src={teamImage}
          alt='Team AGS'
        />
      </section>
    </div>
  );
};

export default About;