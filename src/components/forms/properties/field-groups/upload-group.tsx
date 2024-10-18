import { FieldGroup } from "../../fields/field-group";
import ImageUpload from "../../fields/image-uploader";

export default function UploadFieldGroup() {
  return (
    <FieldGroup heading="Uploads">
      <ImageUpload name="images" label="Images" maxNumber={10} />
      <ImageUpload
        name="attachments"
        label="Legal Documents (images)"
        maxNumber={10}
      />
    </FieldGroup>
  );
}
