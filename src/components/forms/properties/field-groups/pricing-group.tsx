import { FieldGroup } from "../../fields/field-group";
import NumberInput from "../../fields/number-input";
import SelectInput from "../../fields/simple-select-input";

export default function PricingFieldGroup({
  currencySelectOptions,
  range = false,
}: {
  currencySelectOptions: { label: string; value: string }[];
  range?: boolean;
}) {
  return (
    <FieldGroup heading="Pricing">
      {!range && <NumberInput name="price" label="Price" />}
      {range && (
        <>
          <NumberInput name="min_price" label="Minimum Price" />
          <NumberInput name="max_price" label="Maximum Price" />
        </>
      )}
      <SelectInput
        name="currency"
        label="Currency"
        options={currencySelectOptions}
      />
    </FieldGroup>
  );
}
