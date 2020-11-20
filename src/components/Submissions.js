import React from "react";
import { connect } from "react-redux";
import Item from "./Item";

function Submissions(props) {
  return (
    <div>
      <div>These are the submissions:</div>
      {props.messages.map((message, i) => (
        <Item
          key={i}
          text={message.message}
        />
      ))}
    </div>
  );
}

export default Submissions;
