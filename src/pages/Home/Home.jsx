import React from 'react'
import {useNavigate} from 'react-router-dom'
import * as Separator from '@radix-ui/react-separator'
import nomineeImage from '../../assets/headshot1.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center bg-white w-full'>
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='text-2xl font-bold text-[#500000]'>
          Welcome to the Aggie Spotlight!
        </div>
        <div className='mt-2 text-[#2C2C2C]'>
          This is a platform where Aggies can be nominated for their outstanding demonstration of the Aggie Core values of Excellence and Integrity.
        </div>
        <div
          className='text-[#D4AF37] cursor-pointer mt-2 hover:underline'
          onClick={() => navigate('/about')}
        >
          Learn More...
        </div>
      </div>
      <section className='border-2 border-[#500000] rounded-lg w-2/3 mt-8 p-6'>
        <div className='flex flex-col justify-center items-center mt-4'>
          <header className='text-lg font-bold text-[#500000] mb-4'>
            Current Nominee
          </header>
          <Separator.Root className='w-full h-[1px] bg-[#E0E0E0] mb-4' />
          <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center'>
              <img
                className='w-64 h-64 rounded-full shadow-lg border-2 border-[#500000] object-cover'
                src={nomineeImage}
                alt='Current Nominee'
              />
            </div>
            <div className='flex justify-center items-center mt-4'>
              <div className='flex flex-col items-center'>
                <div className='mt-4 text-xl font-bold text-[#500000]'>John Doe</div>
                <div className='mt-8 text-lg font-bold text-[#500000]'>Biography</div>
                <p className='mt-4 w-3/4 indent-4 text-[#2C2C2C]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className='mt-2 w-3/4 indent-4 text-[#2C2C2C]'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;