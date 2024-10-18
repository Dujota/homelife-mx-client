import { FieldGroup } from "../../fields/field-group";
import SelectInput from "../../fields/simple-select-input";
import TextArea from "../../fields/text-area-input";
import TextInput from "../../fields/text-input";

export default function LandInformationGroup() {
  return (
    <FieldGroup heading="Land Information">
      <TextInput name="zoning" label="Zoning" />
      <SelectInput
        name="access_to_utilities"
        label="Access to Utilities"
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
      />
      <SelectInput
        name="is_in_land_registry"
        label="In Land Registry"
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
      />
      <SelectInput
        name="appraisal_available"
        label="Appraisal Available"
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
      />
      <TextArea name="existing_structures" label="Existing Structures" />
      <TextArea name="description" label="Description" />
    </FieldGroup>
  );
}
