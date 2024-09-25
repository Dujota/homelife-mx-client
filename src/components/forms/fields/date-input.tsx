import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";
import { today } from "@/lib/helpers/date-helpers";

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
            <input {...field} type="date" min={today} />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default DateInput;
