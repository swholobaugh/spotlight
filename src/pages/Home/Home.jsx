import React from 'react'
import {useNavigate} from 'react-router-dom'
import * as Separator from '@radix-ui/react-separator'
import nomineeImage from '../../assets/headshot1.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center bg-white w-full'>
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='text-3xl font-bold text-[#500000]'>
          Welcome to the Aggie Spotlight!
        </div>
        <div className='mt-2 text-[#2C2C2C] max-w-[1000px]'>
          This is a platform where Aggies can be nominated for their outstanding demonstration of the Aggie Core values of Excellence and Integrity. You
          are able to nominate an Aggie, vote for your favorite nominee, and view past winners in the Hall of Fame.
        </div>
        <div
          className='text-[#D4AF37] cursor-pointer hover:underline'
          onClick={() => navigate('/about')}
        >
          Learn More...
        </div>
      </div>
      <section className='border-2 border-[#500000] rounded-lg w-2/3 mt-4 p-6'>
        <div className='flex flex-col justify-center items-center'>
          <header className='text-lg font-bold text-[#500000] mb-4'>
            Current Spotlight
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
                <div className='mt-4 text-xl font-bold text-[#500000]'>Michal Davis</div>
                <div className='mt-8 text-lg font-bold text-[#500000]'>Biography</div>
                <p className='mt-4 w-3/4 indent-4 text-[#2C2C2C]'>
                  Michael Davis, 30, is a passionate community volunteer known for his dedication to helping others. He spends much of his time at the Sunnyside Animal Shelter, where he cares for animals and organizes adoption events, inspiring others to support the cause.
                </p>
                <p className='mt-2 w-3/4 indent-4 text-[#2C2C2C]'>
                  Beyond his work at the shelter, Michael mentors local high school students and leads community service projects, from neighborhood clean-ups to charity drives. His kindness, energy, and commitment to making a difference have earned him the admiration of neighbors and friends alike.
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