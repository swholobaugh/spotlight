import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='text-xl font-bold'>
          Welcome to the Aggie Spotlight!
        </div>
        <div className='mt-2'>This is a platform where Aggies can be nominated for their
          outstanding demonstration of the Aggie Core values of Excellence and Integrity.
        </div>
        <div
          className='text-blue-500 cursor-pointer'
          onClick={(e) => navigate('/about')}
        >Learn More...
        </div>
      </div>
      <section className='border-2 rounded border-app-accent w-2/3 mt-8 pt-4 pb-8'>
        <div className='flex flex-col justify-center items-center mt-4'>
          <header className='flex justify-center items-center text-lg mb-4'>Current Nominee</header>
          <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center'>
              <img
                className='w-36 h-36 rounded-full'
                src='https://via.placeholder.com/250'
                alt='placeholder'
              />
            </div>
            <div className='flex justify-center items-center mt-4'>
              <div className='flex flex-col items-center'>
                <div className='mt-4 font-bold'>John Doe</div>
                <div className='mt-8 font-bold'>Biography</div>
                <p className='mt-4 w-3/4 indent-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className='mt-2 w-3/4 indent-4'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  labor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;