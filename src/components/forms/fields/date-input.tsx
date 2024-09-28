import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";
import { today } from "@/lib/helpers/date-helpers";

type DateInputProps = {
  name: string;
  label: string;
  inputStyle?: string;
  labelStyle?: string;
  placeholder?: string;
  id?: string;
};

const DateInput = ({
  name,
  label,
  inputStyle,
  labelStyle,
  placeholder,
  id,
}: DateInputProps) => {
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
              className={inputStyle}
              placeholder={placeholder}
              {...field}
              type="date"
              min={today}
            />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default DateInput;
