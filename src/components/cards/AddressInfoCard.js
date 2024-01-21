import InputField from "./input/InputField";
import Select from "./select/Select";

const AddressInfoCard = () => {
  return (
    <div className="card">
      <InputField
        label="Street Address"
        type="text"
        min="5"
        required
        id="street-address"
        name="street-address"
        holder="Enter street address"
      />
      <InputField
        label="City"
        type="text"
        min="3"
        required
        id="city"
        name="city"
        holder="Enter City"
      />

      <Select label="Select Your State" />

      <InputField
        label="Zip Code"
        type="text"
        required
        id="zip-code"
        name="zip-code"
        holder="Enter Zip Code"
        pattern="\d*"
      />
    </div>
  );
};

export default AddressInfoCard;
