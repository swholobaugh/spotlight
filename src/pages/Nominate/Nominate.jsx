import React, { useContext, useReducer } from "react";
import NominateForm from './NominateForm/NominateForm'
import { NominateContext } from "../../Context.jsx";
import nominateFormReducer from './NominateForm/nominateFormReducer'
import {useMutation} from "@tanstack/react-query";
import {supabase} from "../../auth/supabase.js";
import { format } from 'date-fns';

const initialFormState = {
  first_name: '',
  last_name: '',
  email: '',
  nomination_reason: '',
  nominee_photo: null,
  linked_in: '',
  biography: '',
  hometown: '',
  class_year: '',
  isSelected: false
}

const Nominate = () => {
  const [formState, dispatch] = useReducer(
    nominateFormReducer,
    initialFormState
  )

  const [listState, dispatchList] = useContext(NominateContext)

  const addNominee = useMutation({
    mutationFn: async (newNominee) => {
      const { data, error } = await supabase
        .from('nominees')
        .insert([newNominee])
      if (error) throw new Error(error.message)
      return data
    }
  })

  // Handle file upload to Supabase storage
  const uploadPhoto = async (file) => {
    const filePath = `${formState.first_name}-${Date.now()}.${file.name.split('.').pop()}`;
    const { data, error } = await supabase.storage
      .from('nominee-photos')
      .upload(filePath, file);

    if (error) throw new Error(error.message);
    return data.path; // Return the file path to save in the database
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'nominee_photo') {
      // handle file upload or removal
      const file = files.length > 0 ? files[0] : null
      dispatch({
        type: 'HANDLE_INPUT_FILE',
        field: name,
        payload: file
      })
      return
    } else {
      dispatch({
        type: 'HANDLE_INPUT_TEXT',
        field: name,
        payload: value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let photoPath = null;

      if (formState.nominee_photo) {
        photoPath = await uploadPhoto(formState.nominee_photo);
      }

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
          nomination_reason: formState.nomination_reason,
          nominee_photo: photoPath,
          biography: formState.biography,
          linked_in: formState.linked_in,
          hometown: formState.hometown,
          class_year: formState.class_year,
          date_nominated: format(new Date(), 'yyyy-MM-dd')
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
    } catch (error) {
      alert(`Photo upload error: ${error.message}`);
    }

  }

  return (
      <div className="flex flex-col items-center bg-white p-4">
        <h2 className="text-xl text-black font-bold mb-4">Nominate</h2>
        <div>Nominate an Aggie to the Aggie Spotlight! Please fill in all of the fields below.</div>
        <NominateForm
          formState={formState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
  );
};

export default Nominate;
