import React, { useState, useEffect } from "react";
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
      "biography",
      "nomination_reason",
    ];
    const allFieldsFilled = requiredFields.every((field) =>
      formState[field] && (field !== "nominee_photo" ? formState[field].trim() : true)
    );

    setIsFormValid(allFieldsFilled);
  }, [formState]);

  return (
    <Form.Root
      className="bg-white p-4 rounded-lg shadow-md max-w-4xl w-full mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-3">
        {/* First Name */}
        <Form.Field name="first_name">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            First Name
          </Form.Label>
          <Form.Control asChild>
            <input
              id="first_name"
              name="first_name"
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.first_name}
              onChange={handleChange}
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            First Name is required.
          </Form.Message>
        </Form.Field>

        {/* Last Name */}
        <Form.Field name="last_name">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            Last Name
          </Form.Label>
          <Form.Control asChild>
            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.last_name}
              onChange={handleChange}
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            Last Name is required.
          </Form.Message>
        </Form.Field>

        {/* Email */}
        <Form.Field name="email">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            Email
          </Form.Label>
          <Form.Control asChild>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            Email is required.
          </Form.Message>
          <Form.Message
            match="typeMismatch"
            className="text-red-500 text-sm mt-1"
          >
            Enter a valid email address.
          </Form.Message>
        </Form.Field>

        {/* Hometown */}
        <Form.Field name="hometown">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            Hometown
          </Form.Label>
          <Form.Control asChild>
            <input
              id="hometown"
              name="hometown"
              type="text"
              placeholder="Hometown"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.hometown}
              onChange={handleChange}
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            Hometown is required.
          </Form.Message>
        </Form.Field>

        {/* Class Year */}
        <Form.Field name="class_year">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            Class Year
          </Form.Label>
          <Form.Control asChild>
            <input
              id="class_year"
              name="class_year"
              type="text"
              placeholder="Class Year"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.class_year}
              onChange={handleChange}
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            Class Year is required.
          </Form.Message>
        </Form.Field>

        {/* LinkedIn */}
        <Form.Field name="linked_in">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            LinkedIn
          </Form.Label>
          <Form.Control asChild>
            <input
              id="linked_in"
              name="linked_in"
              type="url"
              placeholder="LinkedIn"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              value={formState.linked_in}
              onChange={handleChange}
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            LinkedIn URL is required.
          </Form.Message>
          <Form.Message
            match="typeMismatch"
            className="text-red-500 text-sm mt-1"
          >
            Enter a valid LinkedIn URL.
          </Form.Message>
        </Form.Field>

        {/* Photo Upload */}
        <Form.Field name="nominee_photo">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            Nominee Photo
          </Form.Label>
          <Form.Control asChild>
            <input
              id="nominee_photo"
              name="nominee_photo"
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              onChange={(e) =>
                handleChange({
                  target: { name: "nominee_photo", value: e.target.files[0] },
                })
              }
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            Please upload a photo.
          </Form.Message>
        </Form.Field>
      </div>

      <div className="grid grid-cols-1 gap-3 mt-3">
        {/* Biography */}
        <Form.Field name="biography">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            Biography
          </Form.Label>
          <Form.Control asChild>
            <textarea
              id="biography"
              name="biography"
              placeholder="Biography"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
              value={formState.biography}
              onChange={handleChange}
              rows={3}
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            Biography is required.
          </Form.Message>
        </Form.Field>

        {/* Nomination Reason */}
        <Form.Field name="nomination_reason">
          <Form.Label className="block text-sm text-[#500000] font-semibold">
            Nomination Reason
          </Form.Label>
          <Form.Control asChild>
            <textarea
              id="nomination_reason"
              name="nomination_reason"
              placeholder="Reason for nomination"
              className="w-full border border-gray-300 p-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
              value={formState.nomination_reason}
              onChange={handleChange}
              rows={3}
              required
            />
          </Form.Control>
          <Form.Message
            match="valueMissing"
            className="text-red-500 text-sm mt-1"
          >
            Nomination reason is required.
          </Form.Message>
        </Form.Field>
      </div>

      <div className="flex justify-center mt-3">
        <Form.Submit asChild>
          <button
            type="submit"
            className={`w-full max-w-xs p-2 font-semibold rounded text-sm transition-colors ${
              isFormValid
                ? "bg-[#500000] text-white hover:bg-[#7A2323]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Submit Nomination
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default NominateForm;
