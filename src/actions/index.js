export const addMessage = (text) => ({
  type: "ADD_MESSAGE",
  message: text,
});

export const clearMessages = () => ({
  type: "CLEAR_MESSAGES",
});
