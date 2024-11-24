import React from "react";
import * as Separator from "@radix-ui/react-separator";
import nomineeImage from "../../assets/headshot1.png";
import Slider from 'react-slick'
import { useQuery } from '@tanstack/react-query'
import Nominee from '../../components/Nominee/Nominee'

const fetchNominees = async () => {
  const { data, error } = await supabase
    .from('nominees')
    .select('*');
}


const HallOfFame = () => {

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-2xl text-black font-bold mb-4">(Currently Under Construction...)</h1>
      <h1 className='text-xl text-black font-bold mb-4'>Hall of Fame</h1>
      <section className='border-2 border-[#500000] rounded-lg w-2/3 mt-4 p-6'>
        <div className='flex flex-col justify-center items-center'>
          <header className='text-lg font-bold text-[#500000] mb-4'>
            Previous Nominee
          </header>
          <Separator.Root className='w-full h-[1px] bg-[#E0E0E0] mb-4'/>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p className='mt-2 w-3/4 indent-4 text-[#2C2C2C]'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  labor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HallOfFame;
