import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type EmailInputProps = {
  name: string;
  label: string;
  placeholder: string;
  wrapperClassName?: string;
  className?: string;
  disableErrorMessage?: boolean;
};

const EmailInput = ({
  name,
  label,
  className,
  placeholder,
  wrapperClassName,
  disableErrorMessage,
}: EmailInputProps) => {
  const { control } = useFormContext();

  return (
    <div className={wrapperClassName}>
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