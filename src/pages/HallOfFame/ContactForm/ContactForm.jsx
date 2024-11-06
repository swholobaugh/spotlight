import React from "react";

const ContactForm = (props) => {
  const { formState, handleTextChange, handleClick, handleRemoveSelected } =
    props;

  return (
    <div className='flex flex-col'>
      <h2>Contact Form</h2>
      <label htmlFor="firstName">
        First Name:
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label htmlFor="phoneNumber">
        Number:
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          value={formState.phoneNumber}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <button type="submit" onClick={handleClick}>
        Add Contact
      </button>
      <button type="submit" onClick={handleRemoveSelected}>
        Remove Selected
      </button>
    </div>
  );
};

export default ContactForm;
