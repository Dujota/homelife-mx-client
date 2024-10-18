import DateInput from "./date-input";
import { FieldGroup } from "./field-group";
import NumberInput from "./number-input";
import SelectInput from "./simple-select-input";
import TextArea from "./text-area-input";
import TextInput from "./text-input";

export default function PreConstructionInformationFieldGroup() {
  return (
    <FieldGroup heading="Project Information">
      <DateInput
        name="estimated_completion_date"
        label="Estimated Completion Date"
      />
      <TextArea name="plans" label="Plans" />
      <TextArea name="description" label="Project Description" />
      <NumberInput name="property_taxes" label="Property Taxes" />
      <TextInput name="zoning" label="Zoning" />
      <TextInput name="location" label="Location" />
      <SelectInput
        name="rendering_available"
        label="Rendering Available"
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
      />
    </FieldGroup>
  );
}
