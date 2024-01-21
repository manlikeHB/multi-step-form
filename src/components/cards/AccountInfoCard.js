import InputField from "./input/InputField";

const AccountInfoCard = () => {
  return (
    <div className="card">
      <InputField
        label="Username"
        type="text"
        min="3"
        required
        id="username"
        name="username"
        holder="Enter a Username"
      />
      <InputField
        label="Password"
        type="password"
        min="6"
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

export default AccountInfoCard;
