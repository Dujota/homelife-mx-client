import { FieldGroup } from "../../fields/field-group";
import NumberInput from "../../fields/number-input";
import TextInput from "../../fields/text-input";

export default function ConstructionSizeFieldGroup() {
  return (
    <FieldGroup heading="Construction Size">
      <NumberInput
        name="living_space_square_meters"
        label="Living Space (sqm)"
      />
      <NumberInput name="lot_size" label="Lot Size (sqm)" />
      <NumberInput name="year_built" label="Year Built" />
      <TextInput
        name="general_carpentry_and_paint_condition"
        label="Carpentry/Paint Condition"
      />
    </FieldGroup>
  );
}
