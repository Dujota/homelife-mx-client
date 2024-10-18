import Checkboxes from "../../fields/checkboxes";
import { FieldGroup } from "../../fields/field-group";

export default function PublishListingFieldGroup() {
  return (
    <FieldGroup heading="Public Options">
      <Checkboxes
        name="create_listing"
        label="Make Listing Public"
        options={[
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ]}
      />
    </FieldGroup>
  );
}
