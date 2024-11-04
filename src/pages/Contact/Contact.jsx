import React, { useContext, useReducer } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";

import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";

import { ContactContext } from "../../Context.jsx";
import contactFormReducer from "./ContactForm/contactFormReducer";

const initialFormState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  isSelected: false
};

const Contact = () => {
  const [formState, dispatch] = useReducer(
    contactFormReducer,
    initialFormState
  );

  const [listState, dispatchList] = useContext(ContactContext);

  const handleTextChange = (e) => {
    dispatch({
      type: "HANDLE_INPUT_TEXT",
      field: e.target.name,
      payload: e.target.value
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      !listState.includes(formState) &&
      formState.firstName &&
      formState.lastName &&
      formState.phoneNumber
    ) {
      dispatchList({
        type: "HANDLE_ADD_TO_LIST",
        payload: formState
      });
      dispatch({
        type: "HANDLE_RESET_TEXT",
        payload: initialFormState
      });
    }
  };

  const handleRemoveSelected = (e) => {
    e.preventDefault();
    dispatchList({
      type: "HANDLE_REMOVE_FROM_LIST",
      payload: listState
    });
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <ContactForm
        formState={formState}
        handleTextChange={handleTextChange}
        handleClick={handleClick}
        handleRemoveSelected={handleRemoveSelected}
      />
      <ContactList contactList={listState} dispatch={dispatchList} />
    </div>
  );
};

export default Contact;
