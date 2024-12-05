import React from "react";
import * as Form from "@radix-ui/react-form";

const NominateForm = (props) => {
  const { formState, handleChange, handleSubmit } = props;

  return (
    <Form.Root className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-lg min-w-[400px] w-full">
      {/* First Name Field */}
      <Form.Field name="first_name" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">First Name</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="valueMissing">
            Please enter your first name
          </Form.Message>
        </div>
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

      {/* Last Name Field */}
      <Form.Field name="last_name" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">Last Name</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="valueMissing">
            Please enter your last name
          </Form.Message>
        </div>
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

      {/* Email Field */}
      <Form.Field name="email" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">Email</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="text-[#B23A3A] text-sm" match="typeMismatch">
            Please enter a valid email
          </Form.Message>
        </div>
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

      {/* Hometown field */}
      <Form.Field name="hometown" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">Hometown</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="valueMissing">
            Please enter your hometown
          </Form.Message>
        </div>
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

      {/* Class Year Field */}
      <Form.Field name="class_year" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">Class Year</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="valueMissing">
            Please enter your class year
          </Form.Message>
        </div>
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

      {/* LinkedIn Field */}
      <Form.Field name="linked_in" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">LinkedIn</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="typeMismatch">
            Please enter a valid LinkedIn URL
          </Form.Message>
        </div>
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

      {/* Nominee Photo Field */}
      <Form.Field name="nominee_photo" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">Nominee Photo</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="valueMissing">
            Please upload a photo of the nominee
          </Form.Message>
        </div>

        {/* Display uploaded photo or upload input */}
        <div className="flex flex-col items-center">
          {formState.nominee_photo ? (
            <>
              <p className="text-sm text-[#500000]">
                {formState.nominee_photo.name} ({(formState.nominee_photo.size / 1024).toFixed(2)} KB)
              </p>
              <button
                type="button"
                onClick={() => handleChange({ target: { name: "nominee_photo", files: [] } })} // Clear the input
                className="mt-2 px-4 py-2 bg-[#B23A3A] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors"
              >
                Remove Photo
              </button>
            </>
          ) : (
            <Form.Control asChild>
              <input
                id="nominee_photo"
                name="nominee_photo"
                type="file"
                accept="image/*"
                className="w-full border border-[#E0E0E0] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                onChange={handleChange}
              />
            </Form.Control>
          )}
        </div>
      </Form.Field>

      {/* Biography */}
      <Form.Field name="biography" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">Biography</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="valueMissing">
            Please provide a biography for the nominee
          </Form.Message>
        </div>
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

      {/* Nomination Reason Field */}
      <Form.Field name="nomination_reason" className="w-full mb-4">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[#500000] font-semibold">Nomination Reason</Form.Label>
          <Form.Message className="text-[#B23A3A] text-sm" match="valueMissing">
            Please provide a reason for the nomination
          </Form.Message>
        </div>
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

      {/* Submit Button */}
      <Form.Submit asChild>
        <button
          type="submit"
          className="w-full p-2 mt-2 bg-[#500000] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors"
          onClick={handleSubmit}
        >
          Submit Nomination
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default NominateForm;
