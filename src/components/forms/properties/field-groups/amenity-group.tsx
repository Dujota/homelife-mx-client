import Checkboxes from "../../fields/checkboxes";
import { FieldGroup } from "../../fields/field-group";

export default function AmenityFieldGroup({
  amenities,
}: {
  amenities: { label: string; value: string | number }[];
}) {
  return (
    <FieldGroup heading="Amenities">
      <Checkboxes name="amenity_ids" label="Amenities" options={amenities} />
    </FieldGroup>
  );
}
