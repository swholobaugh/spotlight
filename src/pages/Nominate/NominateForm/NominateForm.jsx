import React from "react";

const NominateForm = (props) => {
  const {formState, handleTextChange, handleSubmit
  } = props;

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handleSubmit}>
        <div className='pt-4 px-2'>First Name:</div>
        <div className='px-2'>
          <input
            id='firstName'
            name='firstName'
            type='text'
            placeholder='First Name'
            className='border border-gray-400 p-1'
            value={formState.firstName}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      </form>
      <div>
        <div className='pt-2 px-2'>Last Name:</div>
        <div className='px-2'>
          <input
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Last Name'
            className='border border-gray-400 p-1'
            value={formState.lastName}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      </div>
      <div>
        <div className='pt-2 px-2'>Email:</div>
        <div className='px-2'>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Email'
            className='border border-gray-400 p-1'
            value={formState.email}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      </div>
      <div>
        <div className='pt-2 px-2'>Reason for Nomination:</div>
        <div className='px-2'>
          <input
            id='reason'
            name='reason'
            type='text'
            placeholder='Reason'
            className='border border-gray-400 p-1'
            value={formState.reason}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      </div>
      <div className='pt-8 p-1'>
        <button
          type="submit"
          className='border border-gray-400 self-center w-48 p-1 m-1'
        >
          Submit Nomination
        </button>
      </div>
    </div>
  );
};

export default NominateForm;
