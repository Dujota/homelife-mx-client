import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type NumberInputProps = {
  name: string;
  label: string;
};

const NumberInput = ({ name, label }: NumberInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input {...field} type="number" />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default NumberInput;
