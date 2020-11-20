import messageReducer from "./reducers/messageReducer";
import { createStore, applyMiddleware } from "redux";

const print1 = () => {
  return console.log("logged");
};

const middlewareEnhancer = applyMiddleware(print1);
const store = createStore(messageReducer, middlewareEnhancer);

export default store;
