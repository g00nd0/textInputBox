import React, { useState } from "react";
import TextOutput from "./TextOutput";
import TextInput from "./TextInput";

const defaultText = "Typed Text Will Be Displayed Here";

const TextDisplay = () => {
  const [currentText, setCurrentText] = useState(defaultText);
  return (
    <>
      <TextOutput text={currentText} defaultText={defaultText} />
      <TextInput enteredText={setCurrentText} />
    </>
  );
};
export default TextDisplay;
