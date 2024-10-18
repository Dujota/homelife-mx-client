import { FieldGroup } from "./field-group";
import SelectInput from "./simple-select-input";
import TextInput from "./text-input";

export default function DeveloperInformationFieldGroup() {
  return (
    <FieldGroup heading="Developer Information">
      <TextInput name="development_name" label="Name of Development" />
      <TextInput
        name="developer_contact"
        label="Developer Contact Information"
      />
      <TextInput name="cadastral_number" label="Cadastral/Folio Number" />
      <SelectInput
        name="proof_of_ownership"
        label="Proof of Ownership"
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
      />
    </FieldGroup>
  );
}
