import FormRow from "../ui/FormRow";

function PrimaryColorOptions({ register, watch }) {
  const colorOptions = [
    { label: "Default", value: "default" },
    { label: "Orange", value: "Orange" },
    { label: "Yellow", value: "Yellow" },
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
  ];

  const selectedColor = watch("primary_color", "default");

  return (
    <FormRow label="Choose Primary Color Theme">
      <select id="primary_color" {...register("primary_color")}>
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

export default PrimaryColorOptions;
