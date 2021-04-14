import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ enteredText }) => {
  return (
    <>
      <Form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Form.Group controlId="textInput">
          <Form.Label>Type Here:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Text Here"
            onChange={(event) => {
              enteredText(event.target.value);
            }}
          />
          <br />
          <Form.Text
            className="text-muted"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ width: "100%" }}>
              <b>Instructions: </b>
              <br />
              1. Type in the input field, your input is reflected in the grey
              box above the input field. <br />
              <br />
              2. Text color will vary everytime a change in input is registered
              (either by typing or deleting characters)
              <br />
              <br />
            </p>
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};
export default TextInput;
