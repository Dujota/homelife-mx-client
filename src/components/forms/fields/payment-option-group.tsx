import { FieldGroup } from "./field-group";
import TextArea from "./text-area-input";

export default function PaymentOptionGroup() {
  return (
    <FieldGroup heading="Payment Options">
      <TextArea name="deposit_structure" label="Deposit Structure" />
      <TextArea name="incentives" label="Incentives" />
    </FieldGroup>
  );
}
