import { useController, useFormContext } from "react-hook-form";
import Select from "react-select";

type Option = {
  label: string;
  value: string | number;
};

type MultiSelectInputProps = {
  name: string;
  label: string;
  options: Option[];
  labelStyle?: string;
};

const MultiSelectInput = ({
  name,
  label,
  options,
  labelStyle,
}: MultiSelectInputProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  return (
    <div className="form-group">
      <label
        className={`block text-md font-medium text-dash-muted-foreground mb-1 ${labelStyle}`}
      >
        {label}
      </label>
      <Select
        isMulti
        options={options}
        value={options.filter((option) => value.includes(option.value))}
        onChange={(selectedOptions) => {
          onChange(selectedOptions.map((option) => option.value));
        }}
        onBlur={onBlur}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default MultiSelectInput;
