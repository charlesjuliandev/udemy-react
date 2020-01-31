import React from "react";

const UserInput = props => {
  const inputStyle = {
    border: "2px solid red",
    marginBottom: "10px"
  };
  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default UserInput;
