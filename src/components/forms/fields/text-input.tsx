import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type TextInputProps = {
  name: string;
  label: string;
};

const TextInput = ({ name, label }: TextInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input {...field} type="text" />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default TextInput;
