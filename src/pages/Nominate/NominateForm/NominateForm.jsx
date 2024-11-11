import React from "react";
import * as Form from '@radix-ui/react-form'

const NominateForm = (props) => {
  const {formState, handleTextChange, handleSubmit
  } = props;

  return (
    <Form.Root className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md'>
      {/* First Name Field */}
      <Form.Field name='firstName' className='w-full mb-4'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-[#500000] font-semibold'>First Name</Form.Label>
          <Form.Message
            className='text-[#B23A3A] text-sm'
            match='valueMissing'
          >
            Please enter your first name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            id='firstName'
            name='firstName'
            type='text'
            placeholder='First Name'
            className='w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
            value={formState.firstName}
            onChange={(e) => handleTextChange(e)}
          />
        </Form.Control>
      </Form.Field>

      {/* Last Name Field */}
      <Form.Field name='lastName' className='w-full mb-4'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-[#500000] font-semibold'>Last Name</Form.Label>
          <Form.Message
            className='text-[#B23A3A] text-sm'
            match='valueMissing'
          >
            Please enter your last name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Last Name'
            className='w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
            value={formState.lastName}
            onChange={(e) => handleTextChange(e)}
          />
        </Form.Control>
      </Form.Field>

      {/* Email Field */}
      <Form.Field name='email' className='w-full mb-4'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-[#500000] font-semibold'>Email</Form.Label>
          <Form.Message
            className='text-[#B23A3A] text-sm'
            match='valueMissing'
          >
            Please enter your email
          </Form.Message>
          <Form.Message
            className='text-[#B23A3A] text-sm'
            match='typeMismatch'
          >
            Please enter a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email'
            className='w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
            value={formState.email}
            onChange={(e) => handleTextChange(e)}
          />
        </Form.Control>
      </Form.Field>

      {/* Nomination Reason Field */}
      <Form.Field name='nominationReason' className='w-full mb-4'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-[#500000] font-semibold'>Nomination Reason</Form.Label>
          <Form.Message
            className='text-[#B23A3A] text-sm'
            match='valueMissing'
          >
            Please provide a reason for the nomination
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            id='nominationReason'
            name='nominationReason'
            placeholder='Reason for nomination'
            className='w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none'
            value={formState.nominationReason}
            onChange={(e) => handleTextChange(e)}
            rows={4}
          />
        </Form.Control>
      </Form.Field>

      {/* Submit Button */}
      <Form.Submit asChild>
        <button
          type="submit"
          className='w-full p-2 mt-2 bg-[#500000] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors'
          onClick={handleSubmit}
        >
          Submit Nomination
        </button>
      </Form.Submit>
    </Form.Root>
  );

  /*
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
   */
};

export default NominateForm;
