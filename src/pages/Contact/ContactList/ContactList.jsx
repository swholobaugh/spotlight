import React from "react";

const ContactList = (props) => {
  const { contactList, dispatch } = props;

  return (
    <>
      {contactList.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.firstName}</span>
            <span>{item.lastName}</span>
            <span>{item.phoneNumber}</span>
            <input
              type="checkbox"
              id={index}
              name={`${index}_firstName`}
              checked={item.isSelected}
              onChange={(e) =>
                dispatch({
                  type: "HANDLE_TOGGLE_CHECKBOX"
                })
              }
            />
          </div>
        );
      })}
    </>
  );
};

export default ContactList;