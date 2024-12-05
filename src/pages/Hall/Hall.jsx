import React from "react";
import * as Separator from "@radix-ui/react-separator";
import HallOfFame from '../../components/HallOfFame/HallOfFame.jsx'


const Hall = () => {

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <h1 className='text-3xl text-app-accent font-bold mb-2'>Hall of Fame</h1>
      <section className='w-2/3 p-6'>
        <div className='flex flex-col justify-center text-center items-center'>
          <div className='mb-4 text-[#2C2C2C]'>
            <p className='text-lg font-bold'>Welcome to the Hall of Fame!</p>
            <p className='text-lg'>Here you can view the previous winners of the Aggie Spotlight.</p>
          </div>
          <header className='text-lg font-bold text-[#500000] mb-4'>
            Previous Nominees
          </header>
          <HallOfFame />
        </div>
      </section>
    </div>
  );
};

export default Hall;
