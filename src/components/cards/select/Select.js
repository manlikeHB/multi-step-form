import { useState } from "react";

const Select = (props) => {
  const [placeholder, setSelectedOption] = useState("Select Your State");

  const handleSelectChange = (event) => {
    setSelectedOption();
  };

  return (
    <div className="InputField">
      <label>{props.label}: </label>

      <select onChange={handleSelectChange}>
        <option value="">{placeholder}</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default Select;
