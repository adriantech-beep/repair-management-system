import FormRow from "../ui/FormRow";

function SecondaryColorOptions({ register, watch }) {
  const colorOptions = [
    { label: "Default", value: "default" },
    { label: "Orange", value: "Orange" },
    { label: "Yellow", value: "Yellow" },
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
  ];

  const selectedColor = watch("secondary_color", "default");

  return (
    <FormRow label="Choose Secondary Color Theme">
      <select id="secondary_color" {...register("secondary_color")}>
        {colorOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Color: {selectedColor}</p>
    </FormRow>
  );
}

export default SecondaryColorOptions;
