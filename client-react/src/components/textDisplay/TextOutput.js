import React from "react";
import randomColor from "randomcolor";

const TextOutput = ({ text, defaultText }) => {
  const renderText = (inputText) => {
    return (
      <p
        style={{
          color: randomColor({
            luminosity: "random",
            hue: "random",
          }),
        }}
      >
        <b>{inputText}</b>
      </p>
    );
  };

  return (
    <div
      style={{
        border: "2px solid grey",
        width: "70%",
      }}
    >
      {text === "" ? renderText(defaultText) : renderText(text)}
    </div>
  );
};
export default TextOutput;
