import { FieldGroup } from "../../fields/field-group";
import NumberInput from "../../fields/number-input";
import TextInput from "../../fields/text-input";

export default function LandSizeFieldGroup() {
  return (
    <FieldGroup heading="Land Information">
      <NumberInput name="size_of_land" label="Size of the Land" />
      <TextInput name="dimensions" label="Dimensions" />
      <TextInput name="topography" label="Topography" />
    </FieldGroup>
  );
}
