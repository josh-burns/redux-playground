const messageReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, { message: action.message }];

    case "CLEAR_MESSAGES":
      return [{ message: "" }];
    default:
      return state;
  }
};

export default messageReducer;
