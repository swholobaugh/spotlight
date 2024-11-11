import React from "react";

const initialFormState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  isSelected: false
};

const HallOfFame = () => {

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-2xl text-black font-bold mb-4">(Currently Under Construction...)</h1>
      <h1 className='text-xl text-black font-bold mb-4'>Hall of Fame</h1>
    </div>
  );
};

export default HallOfFame;
