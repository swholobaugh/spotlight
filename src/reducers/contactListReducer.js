const contactListReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_ADD_TO_LIST":
      return [...state, action.payload];
    case "HANDLE_REMOVE_FROM_LIST":
      return [...state.filter((item) => item.isSelected === false)];
    case "HANDLE_TOGGLE_CHECKBOX":
      return state.map((checkbox) => {
        if (checkbox.id !== action.id) {
          return checkbox;
        }
        return {
          ...checkbox,
          isSelected: checkbox.isSelected ? false : true
        };
      });
    default:
      return state;
  }
};

export default contactListReducer;
