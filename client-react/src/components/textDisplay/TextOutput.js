import React from "react";

const TextOutput = ({ text, defaultText }) => {
  const renderDefaultText = (inputText) => {
    return (
      <p>
        <b>{inputText}</b>
      </p>
    );
  };

  const renderText = (inputText) => {
    let textColor;
    switch (true) {
      case inputText.length < 4:
        textColor = "red";
        break;
      case inputText.length >= 4 && inputText.length < 8:
        textColor = "yellow";
        break;
      case inputText.length >= 8 && inputText.length < 13:
        textColor = "black";
        break;
      case inputText.length >= 13 && inputText.length < 16:
        textColor = "green";
        break;
      default:
        textColor = "blue";
    }

    return (
      <p style={{ color: textColor }}>
        <b>{inputText}</b>
      </p>
    );
  };

  return <>{text === "" ? renderDefaultText(defaultText) : renderText(text)}</>;
};
export default TextOutput;
