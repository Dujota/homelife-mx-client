import { FieldGroup } from "../../fields/field-group";
import TextInput from "../../fields/text-input";

export default function AddressFieldGroup() {
  return (
    <FieldGroup heading="Location">
      <TextInput name="address_attributes.house_number" label="House Number" />
      <TextInput name="address_attributes.street" label="Street" />
      <TextInput name="address_attributes.neighborhood" label="Neighborhood" />
      <TextInput name="address_attributes.municipality" label="Municipality" />
      <TextInput name="address_attributes.city" label="City" />
      <TextInput name="address_attributes.state" label="State" />
      <TextInput name="address_attributes.postal_code" label="Postal Code" />
    </FieldGroup>
  );
}
