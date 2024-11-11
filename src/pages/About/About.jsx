import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <section className='text-center'>
        <p>Contact us at support@AggieSpotlight.com</p>
        <p>Call us at 123-867-5309</p>
      </section>
      <section>
        <h1 className='text-lg text-black font-bold mb-4'>Mission Statement</h1>
        <p>
          Our mission is to lead with excellence and demonstrate integrity in our project
          based on the Aggie Core Values. We believe that aligning with these core values will
          help us achieve success not only in this project but throughout all our lives. We aim
          to help others achieve this same alignment in order for our communities to achieve their
          greatest possible levels of success.
        </p>
      </section>
      <section>
        <h1 className='text-lg text-black font-bold mt-4 mb-4'>About Spotlight</h1>
        <p>
          To be an Aggie one must try to abide by the Core Values of Respect, Excellence,
          Leadership, Loyalty, Integrity, and Selfless Service. When an Aggie is not only
          abiding by the Core Values but exemplifying the Core Values of Integrity and/or Excellence
          we want to shine a spotlight on them for other Aggies to follow.
        </p>
      </section>
      <section>
        <h1 className='text-lg text-black font-bold mt-4 mb-4'>About Us</h1>
        <p>
          We are Team AGS; Aaron, Garret, and Seth! A group of 3 students in an online masters
          program for Management Information Systems who have a lofty goal of creating something worthy
          of getting the coveted "A" in their course. From different backgrounds, they realized they
          each brought something unique and important to develop the best way to shine a spotlight
          on fellow Aggies. With that, the Aggie Spotlight was born.
        </p>
      </section>
      <section>
        <h1>Pictures</h1>
      </section>
    </div>
  );
};

export default About;