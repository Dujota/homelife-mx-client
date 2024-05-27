import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type Option = {
  label: string;
  value: number;
};

type SelectInputProps = {
  name: string;
  label: string;
  options: Option[];
};

const SelectInput = ({ name, label, options }: SelectInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <select {...field}>
              <option key={`default-select-name`} value="">
                Select an option
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default SelectInput;
