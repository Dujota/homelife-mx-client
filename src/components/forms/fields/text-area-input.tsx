import { useFormContext, Controller } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type TextAreaProps = {
  name: string;
  label: string;
};

const TextArea = ({ name, label }: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <textarea {...field} />
            {error && <FieldErrorMessage errorMessage={error.message} />}
          </>
        )}
      />
    </div>
  );
};

export default TextArea;
