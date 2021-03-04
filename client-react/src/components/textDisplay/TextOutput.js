import React from "react";

// const inputText = "Typed Text Will Be Displayed Here";

const TextOutput = ({ text, defaultText }) => {
  return (
    <p>
      <b>{text === "" ? defaultText : text}</b>
    </p>
  );
};
export default TextOutput;
