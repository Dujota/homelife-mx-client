import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type EmailInputProps = {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
};

const EmailInput = ({
  name,
  label,
  className,
  placeholder,
}: EmailInputProps) => {
  const { control } = useFormContext();

  return (
    <div>
      {/* <label>{label}</label> */}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type="email"
              className={className}
              placeholder={placeholder}
            />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default EmailInput;
