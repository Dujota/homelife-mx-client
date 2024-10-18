import { FieldGroup } from "../../fields/field-group";
import NumberInput from "../../fields/number-input";
import SelectInput from "../../fields/simple-select-input";
import TextArea from "../../fields/text-area-input";

export default function InformationFieldGroup({
  propertyTypeOptions,
}: {
  propertyTypeOptions: { label: string; value: string | number }[];
}) {
  return (
    <FieldGroup heading="General Information">
      <SelectInput
        name="property_type_id"
        label="Property Type"
        options={propertyTypeOptions}
      />
      <NumberInput name="number_of_bedrooms" label="Number of Bedrooms" />
      <NumberInput name="number_of_bathrooms" label="Number of Bathrooms" />
      <NumberInput name="half_bathrooms" label="Half Bathrooms" />
      <NumberInput name="number_of_living_rooms" label="Living Rooms" />
      <NumberInput name="garage_size" label="Garage Size" />
      <NumberInput
        name="number_of_airconditioners"
        label="Number of Air Conditioners"
      />
      <NumberInput name="gas_tank_size" label="Gas Tank Size (liters)" />
      <TextArea name="description" label="Description" />
    </FieldGroup>
  );
}
