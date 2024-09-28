import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type CheckboxOption = {
  label: string;
  value: number | string;
};

type CheckboxesProps = {
  name: string;
  label: string;
  inputStyle?: string;
  labelStyle?: string;
  options: CheckboxOption[];
};

const Checkboxes = ({
  name,
  label,
  options,
  inputStyle,
  labelStyle,
}: CheckboxesProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label && <label className={`my-4 ${labelStyle}`}>{label}</label>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              {options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-baseline space-x-2"
                >
                  <input
                    type="checkbox"
                    className={inputStyle}
                    value={option.value}
                    id={option.label}
                    checked={field.value?.includes(option.value)}
                    onChange={(e) => {
                      const newValue = e.target.checked
                        ? [...(field.value || []), option.value]
                        : field.value.filter(
                            (val: number) => val !== option.value,
                          );

                      field.onChange(newValue);
                    }}
                  />
                  <label
                    htmlFor={option.label}
                    className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              ))}

              {error && <FieldErrorMessage errorMessage={error.message} />}
            </>
          )}
        />
      </div>
    </>
  );
};

export default Checkboxes;

// import React from "react";
// import { useController } from "react-hook-form";

// const Checkboxes = ({ options, control, name }: any) => {
//   const { field } = useController({
//     control,
//     name,
//   });
//   const [value, setValue] = React.useState(field.value || []);

//   const handleCheckboxChange = (checkedValue: any) => {
//     let updatedValue = [];

//     if (value.includes(checkedValue)) {
//       // If the checkbox is already checked, remove it from the value array
//       updatedValue = value.filter((v: any) => v !== checkedValue);
//     } else {
//       // Otherwise, add it to the array
//       updatedValue = [...value, checkedValue];
//     }

//     // Send updated data to react hook form and update local state
//     field.onChange(updatedValue);
//     setValue(updatedValue);
//   };

//   return (
//     <>
//       {options.map((option: any) => (
//         <div key={option.value}>
//           <label>
//             <input
//               type="checkbox"
//               value={option.value}
//               checked={value.includes(option.value)}
//               onChange={() => handleCheckboxChange(option.value)}
//             />
//             {option.label}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Checkboxes;
