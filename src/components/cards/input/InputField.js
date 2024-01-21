import Input from "./Input";

const InputField = (props) => {
  return (
    <div className="InputField">
      <label htmlFor={props.id}>{props.label}: </label>

      <Input
        type={props.type}
        id={props.id}
        name={props.name}
        required
        min={props.min}
        holder={props.holder}
      />
    </div>
  );
};

export default InputField;
