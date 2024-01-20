function Input(props) {
  return (
    <input
      type={props.type}
      minlength={props.min}
      required
      id={props.id}
      name={props.name}
      placeholder={props.holder}
    />
  );
}

export default Input;
