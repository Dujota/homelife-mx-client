import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type TextInputProps = {
  name: string;
  label: string;
  inputStyle?: string;
  labelStyle?: string;
  placeholder?: string;
  id?: string;
};

const TextInput = ({
  name,
  label,
  labelStyle,
  inputStyle,
  placeholder,
  id,
}: TextInputProps) => {
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
              type="text"
            />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default TextInput;
