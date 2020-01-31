import React, { useState } from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="user-output">
      <p>
        {props.userInput !== undefined
          ? "Username: " + props.userInput
          : "paragraph 1"}
      </p>
      <p>Paragraph 2</p>
    </div>
  );
};

export default UserOutput;
