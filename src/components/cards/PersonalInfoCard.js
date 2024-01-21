import "./Card.css";
import InputField from "./input/InputField";

const PersonalInfoCard = () => {
  return (
    <div className="card">
      <InputField
        label="Full Name"
        type="Text"
        min="3"
        id="name"
        name="name"
        holder="Enter Your Full Name"
      />
      <InputField
        label="Email Address"
        type="email"
        id="email"
        name="email"
        holder="Enter Your Email Address"
      />
      <InputField
        label="Date of Birth"
        type="date"
        id="date-of-birth"
        name="date-of-birth"
      />
    </div>
  );
};

export default PersonalInfoCard;
