import InputField from "../input/InputField";

const AccountInfo = () => {
  return (
    <div className="card">
      <InputField
        label="Username"
        type="text"
        minlength="3"
        required
        id="username"
        name="username"
        holder="Enter a Username"
      />
      <InputField
        label="Password"
        type="password"
        minlength="6"
        required
        id="password"
        name="password"
        holder="Enter a password."
      />
      <InputField
        label="Confirm Password"
        type="password"
        required
        id="confirm-password"
        name="confirm-password"
        holder="Enter your Password again."
      />
    </div>
  );
};

export default AccountInfo;
