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
      <label htmlFor={id} className={labelStyle}>
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
              className={inputStyle}
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
