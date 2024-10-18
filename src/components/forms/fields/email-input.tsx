import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type EmailInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  wrapperClassName?: string;
  className?: string;
  disableErrorMessage?: boolean;
  labelStyle?: string;
  inputStyle?: string;
  id?: string;
};

const EmailInput = ({
  name,
  label,
  className,
  placeholder,
  wrapperClassName,
  disableErrorMessage,
  labelStyle,
  id,
}: EmailInputProps) => {
  const { control } = useFormContext();

  return (
    <div className={wrapperClassName}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-md font-medium text-dash-muted-foreground mb-1 ${labelStyle}`}
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              id={id}
              {...field}
              type="email"
              className={className}
              placeholder={placeholder}
            />
            {error && !disableErrorMessage && (
              <FieldErrorMessage errorMessage={error.message} />
            )}
          </>
        )}
      />
    </div>
  );
};

export default EmailInput;
