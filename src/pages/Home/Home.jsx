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
          className='text-[#D4AF37] cursor-pointer hover:underline'
          onClick={() => navigate('/about')}
        >
          Learn More...
        </div>
      </div>
      <section className='border-2 border-[#500000] rounded-lg w-2/3 mt-4 p-6'>
        <div className='flex flex-col justify-center items-center'>
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
                <div className='mt-4 text-xl font-bold text-[#500000]'>Michal Davis</div>
                <div className='mt-8 text-lg font-bold text-[#500000]'>Biography</div>
                <p className='mt-4 w-3/4 indent-4 text-[#2C2C2C]'>
                  Michael Davis is a dedicated community leader and volunteer who has spent the last decade making a meaningful impact in his hometown. At 30 years old, Michael is well-known for his tireless efforts to improve the lives of both people and animals in the community. When he’s not working as a project coordinator for a local nonprofit, Michael can be found volunteering at the Sunnyside Animal Shelter, where he helps care for abandoned pets and organizes adoption events. His love for animals and commitment to their well-being has inspired many in the community to step up and support the shelter's mission.
                </p>
                <p className='mt-2 w-3/4 indent-4 text-[#2C2C2C]'>
                  Beyond his work with animals, Michael is also a mentor to local high school students, guiding them through community service projects that teach the importance of giving back. Whether it’s hosting neighborhood clean-ups, running charity drives, or simply lending a listening ear to someone in need, Michael’s selfless spirit and boundless energy make him a true role model. Friends and neighbors describe him as warm, approachable, and deeply passionate about creating a better world for everyone.
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