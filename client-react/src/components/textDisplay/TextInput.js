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
              {/* a. Less than 4 characters: <b style={{ color: "red" }}>
                Red
              </b>{" "}
              <br />
              b. Between 4 to 7 characters:{" "}
              <b style={{ color: "yellow" }}>Yellow</b> <br />
              c. Between 8 to 12 characters:{" "}
              <b style={{ color: "blue" }}>Blue</b> <br />
              d. More than 12 characters:{" "}
              <b style={{ color: "green" }}>Green</b> */}
            </p>
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};
export default TextInput;
