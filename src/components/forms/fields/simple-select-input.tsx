import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type Option = {
  label: string;
  value: any;
};

type SelectInputProps = {
  name: string;
  label: string;
  options: Option[];
  isMulti?: boolean;
  inputStyle?: string;
  labelStyle?: string;
  id?: string;
};

const SelectInput = ({
  name,
  label,
  options,
  isMulti,
  labelStyle,
  inputStyle,
  id,
}: SelectInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <select
              id={id}
              className={inputStyle}
              {...field}
              multiple={isMulti}
              onChange={(e) => {
                const value =
                  e.target.value === "true"
                    ? true
                    : e.target.value === "false"
                      ? false
                      : e.target.value;
                field.onChange(value);
              }}
            >
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
