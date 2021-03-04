import React from "react";
import randomColor from "randomcolor";

const TextOutput = ({ text, defaultText }) => {
  const renderText = (inputText) => {
    // let textColor;

    // if (inputText === "") {
    //   textColor = "black";
    // } else {
    //   textColor = randomColor();
    // }

    // switch (true) {
    //   case inputText.length < 4:
    //     textColor = "red";
    //     break;
    //   case inputText.length >= 4 && inputText.length < 8:
    //     textColor = "yellow";
    //     break;
    //   case inputText.length >= 8 && inputText.length < 13:
    //     textColor = "blue";
    //     break;
    //   case inputText.length >= 13 && inputText.length < 16:
    //     textColor = "green";
    //     break;
    //   default:
    //     textColor = "black";
    // }

    return (
      <p style={{ color: randomColor() }}>
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
