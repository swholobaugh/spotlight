import React, { useContext, useReducer } from "react";
import NominateForm from './NominateForm/NominateForm'
import { NominateContext } from "../../Context.jsx";
import nominateFormReducer from './NominateForm/nominateFormReducer'

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  reason: '',
  isSelected: false
}

const Nominate = () => {
  const [formState, dispatch] = useReducer(
    nominateFormReducer,
    initialFormState
  )

  const [listState, dispatchList] = useContext(NominateContext)

  const handleTextChange = (e) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !listState.includes(formState) &&
      formState.firstName &&
      formState.lastName &&
      formState.email &&
      formState.reason
    ) {
      dispatchList({
        type: 'HANDLE_ADD_TO_LIST',
        payload: formState
      })
      dispatch({
        type: 'HANDLE_RESET_TEXT',
        payload: initialFormState
      })
    }
  }

  return (
      <div className="flex flex-col items-center bg-white p-4">
        <h1 className="text-2xl text-black font-bold mb-4">(Currently Under Construction...)</h1>
        <h2 className="text-xl text-black font-bold mb-4">Nominate</h2>
        <div>Nominate an Aggie to the Aggie Spotlight!</div>
        <NominateForm
          formState={formState}
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
        />
      </div>
  );
};

export default Nominate;