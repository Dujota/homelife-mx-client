import { FieldGroup } from "../../fields/field-group";
import NumberInput from "../../fields/number-input";
import TextArea from "../../fields/text-area-input";
import TextInput from "../../fields/text-input";

export default function CommercialInformationGroup() {
  return (
    <FieldGroup heading="Buisness Information">
      <TextInput name="type_of_business" label="Type of Business" />
      <NumberInput
        name="square_footage_of_building"
        label="Commercial Space Size"
      />
      <TextInput name="zoning" label="Zoning" />
      <NumberInput name="rental_income" label="Rental Income" />
      <TextArea name="commercial_lease_terms" label="Commercial Lease Terms" />
      <TextArea name="description" label="Description" />
    </FieldGroup>
  );
}
