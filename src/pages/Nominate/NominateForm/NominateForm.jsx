import React, {useState, useEffect} from "react";
import * as Form from "@radix-ui/react-form";

const NominateForm = (props) => {
  const { formState, handleChange, handleSubmit } = props;

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all required fields have been filled out
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "hometown",
      "class_year",
      "linked_in",
      "nominee_photo",
      "biography",
      "nomination_reason",
    ];
    const allFieldsFilled = requiredFields.every((field) =>
      formState[field] && (field !== "nominee_photo" ? formState[field].trim() : true)
    );

    setIsFormValid(allFieldsFilled);
  }, [formState]);

  return (
    <Form.Root className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full">
      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <Form.Field name="first_name">
          <Form.Label className="block text-[#500000] font-semibold mb-1">
            First Name
          </Form.Label>
          <Form.Control asChild>
            <input
              id="first_name"
              name="first_name"
              type="text"
              placeholder="First Name"
              className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.first_name}
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>

        {/* Last Name */}
        <Form.Field name="last_name">
          <Form.Label className="block text-[#500000] font-semibold mb-1">
            Last Name
          </Form.Label>
          <Form.Control asChild>
            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Last Name"
              className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.last_name}
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>

        {/* Email */}
        <Form.Field name="email">
          <Form.Label className="block text-[#500000] font-semibold mb-1">
            Email
          </Form.Label>
          <Form.Control asChild>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>

        {/* Hometown */}
        <Form.Field name="hometown">
          <Form.Label className="block text-[#500000] font-semibold mb-1">
            Hometown
          </Form.Label>
          <Form.Control asChild>
            <input
              id="hometown"
              name="hometown"
              type="text"
              placeholder="Hometown"
              className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.hometown}
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>

        {/* Class Year */}
        <Form.Field name="class_year">
          <Form.Label className="block text-[#500000] font-semibold mb-1">
            Class Year
          </Form.Label>
          <Form.Control asChild>
            <input
              id="class_year"
              name="class_year"
              type="number"
              placeholder="Class Year"
              className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.class_year}
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>

        {/* LinkedIn */}
        <Form.Field name="linked_in">
          <Form.Label className="block text-[#500000] font-semibold mb-1">
            LinkedIn
          </Form.Label>
          <Form.Control asChild>
            <input
              id="linked_in"
              name="linked_in"
              type="url"
              placeholder="LinkedIn"
              className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.linked_in}
              onChange={handleChange}
            />
          </Form.Control>
        </Form.Field>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Biography */}
        <Form.Field name="biography">
          <Form.Label className="block text-[#500000] font-semibold mb-1">
            Biography
          </Form.Label>
          <Form.Control asChild>
        <textarea
          id="biography"
          name="biography"
          placeholder="Biography"
          className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
          value={formState.biography}
          onChange={handleChange}
          rows={4}
        />
          </Form.Control>
        </Form.Field>

        {/* Nomination Reason */}
        <Form.Field name="nomination_reason">
          <Form.Label className="block text-[#500000] font-semibold mb-1">
            Nomination Reason
          </Form.Label>
          <Form.Control asChild>
        <textarea
          id="nomination_reason"
          name="nomination_reason"
          placeholder="Reason for nomination"
          className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
          value={formState.nomination_reason}
          onChange={handleChange}
          rows={4}
        />
          </Form.Control>
        </Form.Field>
      </div>

      <div className="flex justify-center mt-6">
        <Form.Submit asChild>
          <button
            type="submit"
            className="w-full max-w-xs p-2 bg-[#500000] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors"
            onClick={handleSubmit}
          >
            Submit Nomination
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default NominateForm;
