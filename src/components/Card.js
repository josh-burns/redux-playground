import React from "react";
import { connect } from "react-redux";
import { addMessage, clearMessages } from "../actions/index";

function Card({ dispatch }) {
  let input;

  return (
    <div>
      <h1> Hello Friendo </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addMessage(input.value));
          input.value = "";
        }}
      >
        <label>
          Name:
          <input type="text" name="name" ref={(node) => (input = node)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => dispatch(clearMessages())}>clear messages </button>
    </div>
  );
}

export default connect()(Card);
