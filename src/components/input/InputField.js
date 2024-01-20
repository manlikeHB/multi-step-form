import Input from "./Input";

function InputField(props) {
  return (
    <div className="InputField">
      <label for={props.id}>{props.label}: </label>

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
}

export default InputField;
