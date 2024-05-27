import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type DateInputProps = {
  name: string;
  label: string;
};

const DateInput = ({ name, label }: DateInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input {...field} type="date" />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default DateInput;
