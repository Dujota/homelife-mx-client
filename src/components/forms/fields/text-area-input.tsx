import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type TextAreaProps = {
  name: string;
  label: string;
  inputStyle?: string;
  labelStyle?: string;
  placeholder?: string;
  id?: string;
  rows?: number;
};

const TextArea = ({
  name,
  label,
  inputStyle,
  labelStyle,
  placeholder,
  id,
  rows = 6,
}: TextAreaProps) => {
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
            <textarea
              id={id}
              placeholder={placeholder}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${inputStyle}`}
              rows={rows}
              {...field}
            />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default TextArea;
