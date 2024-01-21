import { useState } from "react";
import debounce from "../../../utils/debounce";
import validator from "validator";

const Input = (props) => {
  // Input value state management
  const [input, setInputValue] = useState("");

  // Minimum number of characters in input field state management
  const [isGreaterThanMin, setGreaterThanMin] = useState(false);

  // Check if email is valid state management
  const [isValidEmail, setIsValidEmail] = useState(false);

  // Check if input is a valid number state management
  const [ifNumeric, setIsNumeric] = useState(false);

  // Debouncing function for checking minimum characters in an input field
  const checkMinLength = debounce((inputValueLength, min) => {
    // If input value length is greater than minimum character, then set to true
    if (inputValueLength > min) setGreaterThanMin(true);
  }, 500);

  // Check if an input is a number usimg regex
  const isNumeric = (input) => {
    const numericRegex = /^[0-9]+$/;

    // Return boolean
    return numericRegex.test(input);
  };

  // Handle on change event
  const handleOnChange = (event) => {
    // Get input value
    const inputValue = event.target.value;

    // Check minimum length
    checkMinLength(inputValue.length, props.min);

    // if input is for email, check if input value is a valid email address
    if (props.type === "email") {
      setIsValidEmail(validator.isEmail(inputValue));
    }

    //  if input is for zip-code, check if input value is a valid number
    if (event.target.id === "zip-code") {
      setIsNumeric(isNumeric(inputValue));
    }

    // Set input value
    setInputValue(inputValue);
  };

  return (
    <input
      // Pass input type as a prop
      type={props.type}
      // Pass minimum length as a prop
      minLength={props.min}
      // Set input as required
      required
      // Pass id as a prop
      id={props.id}
      // pass name as a prop
      name={props.name}
      // Pass placeholder value as a prop
      placeholder={props.holder}
      // Listen for change
      onChange={handleOnChange}
      // Set input value
      value={input}
      // Set background color as green if all requirement are reached or red if requirements are nt meet
      style={{
        borderBottomColor:
          isGreaterThanMin || isValidEmail || ifNumeric ? "green" : "red",
      }}
      // Pattern attremute to control the type of input recieved
      pattern={props.pattern}
    />
  );
};

export default Input;
