import React, { useContext, useReducer } from "react";
import NominateForm from './NominateForm/NominateForm'
import { NominateContext } from "../../Context.jsx";
import nominateFormReducer from './NominateForm/nominateFormReducer'
import {useMutation} from "@tanstack/react-query";
import {supabase} from "../../auth/supbase.js";

const initialFormState = {
  first_name: '',
  last_name: '',
  email: '',
  nomination_reason: '',
  isSelected: false
}

const Nominate = () => {
  const [formState, dispatch] = useReducer(
    nominateFormReducer,
    initialFormState
  )

  const [listState, dispatchList] = useContext(NominateContext)

  /*
  const addNominee = useMutation((newNominee) => {
    const { data, error } = supabase
      .from('nominees')
      .insert([newNominee])
    if (error) throw new Error(error.message)
    return data
  })
  */
  const addNominee = useMutation({
    mutationFn: async (newNominee) => {
      const { data, error } = await supabase
        .from('nominees')
        .insert([newNominee])
      if (error) throw new Error(error.message)
      return data
    }
  })

  const handleTextChange = (e) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      !listState.includes(formState) &&
      formState.first_name &&
      formState.last_name &&
      formState.email &&
      formState.nomination_reason
    ) {
      const payload = {
        first_name: formState.first_name,
        last_name: formState.last_name,
        email: formState.email,
        nomination_reason: formState.nomination_reason
      }

      await addNominee.mutate(payload, {
        onSuccess: () => {
          alert('Nominee added successfully!')
          dispatchList({
            type: 'HANDLE_ADD_TO_LIST',
            payload: formState
          })
          dispatch({
            type: 'HANDLE_RESET_TEXT',
            payload: initialFormState
          })
        }
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