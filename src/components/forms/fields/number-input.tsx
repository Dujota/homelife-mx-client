import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type NumberInputProps = {
  name: string;
  label: string;
  labelStyle?: string;
  inputStyle?: string;
  placeholder?: string;
  id?: string;
};

const NumberInput = ({
  name,
  label,
  labelStyle,
  inputStyle,
  placeholder,
  id,
}: NumberInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-md font-medium text-dash-muted-foreground mb-1 ${labelStyle}`}
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              id={id}
              placeholder={placeholder}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" ${inputStyle}`}
              {...field}
              type="number"
            />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default NumberInput;
