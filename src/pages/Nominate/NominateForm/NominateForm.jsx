import React from "react";
import * as Form from '@radix-ui/react-form'

const NominateForm = (props) => {
  const {
    formState, handleTextChange, handleSubmit
  } = props;

  return (
    <Form.Root className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md'>
      {/* First Name Field */}
      <Form.Field name='first_name' className='w-full mb-4'>
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
            id='first_name'
            name='first_name'
            type='text'
            placeholder='First Name'
            className='w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
            value={formState.first_name}
            onChange={(e) => handleTextChange(e)}
          />
        </Form.Control>
      </Form.Field>

      {/* Last Name Field */}
      <Form.Field name='last_name' className='w-full mb-4'>
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
            id='last_name'
            name='last_name'
            type='text'
            placeholder='Last Name'
            className='w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
            value={formState.last_name}
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
      <Form.Field name='nomination_reason' className='w-full mb-4'>
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
            id='nomination_reason'
            name='nomination_reason'
            placeholder='Reason for nomination'
            className='w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none'
            value={formState.nomination_reason}
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

};

export default NominateForm;
