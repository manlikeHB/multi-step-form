import { useState } from "react";
import debounce from "../../../utils/debounce";
import validator from "validator";

const Input = (props) => {
  const [input, setInputValue] = useState("");

  const [isGreaterThanMin, setGreaterThanMin] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(false);

  const [ifNumeric, setIsNumeric] = useState(false);

  // const [password, setPasswordConfirm] = useState();

  const checkMinLength = debounce((inputValueLength, min) => {
    if (inputValueLength > min) setGreaterThanMin(true);
  }, 500);

  const isNumeric = (input) => {
    const numericRegex = /^[0-9]+$/;

    return numericRegex.test(input);
  };

  const handleOnChange = (event) => {
    const inputValue = event.target.value;

    checkMinLength(inputValue.length, props.min);
    setInputValue(inputValue);

    if (props.type === "email") {
      setIsValidEmail(validator.isEmail(inputValue));
    }

    if (event.target.id === "zip-code") {
      setIsNumeric(isNumeric(inputValue));
    }

    if (event.target.id === "confirm-password") {
    }
  };

  return (
    <input
      type={props.type}
      minLength={props.min}
      required
      id={props.id}
      name={props.name}
      placeholder={props.holder}
      onChange={handleOnChange}
      value={input}
      style={{
        borderBottomColor:
          isGreaterThanMin || isValidEmail || ifNumeric ? "green" : "red",
      }}
      pattern={props.pattern}
    />
  );
};

export default Input;
