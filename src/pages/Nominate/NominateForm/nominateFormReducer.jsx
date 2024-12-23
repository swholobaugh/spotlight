const nominateFormReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_FILE":
      return {
        ...state,
        [action.field]: action.payload
      };
    case "HANDLE_INPUT_TEXT":
      return {
        ...state,
        [action.field]: action.payload
      };
    case "HANDLE_RESET_TEXT":
      return action.payload;
    default:
      return state;
  }
};

export default nominateFormReducer;
