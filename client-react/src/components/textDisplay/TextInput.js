import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ enteredText }) => {
  return (
    <>
      <Form>
        <Form.Group controlId="textInput">
          <Form.Label>Type Here:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Text Here"
            onChange={(event) => {
              enteredText(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
            Text input here will be reflected in the Text Box above.
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};
export default TextInput;
