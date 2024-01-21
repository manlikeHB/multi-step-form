import InputField from "../input/InputField";

const AddressInfo = () => {
  return (
    <div className="card">
      <InputField
        label="Street Address"
        type="text"
        minlength="5"
        required
        id="street-address"
        name="street-address"
        holder="Enter street address"
      />
      <InputField
        label="City"
        type="text"
        minlength="3"
        required
        id="city"
        name="city"
        holder="Enter City"
      />
      <InputField
        label="Street Address"
        type="text"
        minlength="5"
        required
        id="street-address"
        name="street-address"
        holder="Enter street address"
      />
      <InputField
        label="Zip Code"
        type="number"
        required
        id="zip-code"
        name="zip-code"
        holder="Enter Zip Code"
      />
    </div>
  );
};

export default AddressInfo;
