import React from "react";
import * as Separator from "@radix-ui/react-separator";
import HallOfFame from '../../components/HallOfFame/HallOfFame.jsx'


const Hall = () => {

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-app-accent font-bold mb-4'>Hall of Fame</h1>
      <section className='w-2/3 mt-4 p-6'>
        <div className='flex flex-col justify-center items-center'>
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
