"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  commercialPropertySchema,
  type CommercialPropertyFormData,
} from "@/lib/zod/forms/commercial-property-schema";
import NumberInput from "../fields/number-input";
import TextArea from "../fields/text-area-input";
import TextInput from "../fields/text-input";
import SelectInput from "../fields/simple-select-input";
import FormSubmitButton from "../../common/buttons/form-submit-button";

type CommercialPropertyFormProps = {
  propertyTypes: { name: string; id: number }[];
};

const CommercialPropertyForm = ({
  propertyTypes,
}: CommercialPropertyFormProps) => {
  const methods = useForm<CommercialPropertyFormData>({
    resolver: zodResolver(commercialPropertySchema),
  });

  const propertyTypeOptions = propertyTypes.map(
    (type: { name: string; id: number }) => ({
      label: type.name,
      value: type.id,
    }),
  );

  const onSubmit = async (data: CommercialPropertyFormData) => {
    try {
      const res = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create property");
      }

      const result = await res.json();
      console.log("Property created:", result);
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NumberInput name="price" label="Price" />
        <TextArea name="description" label="Description" />
        <TextInput name="address.house_number" label="House Number" />
        <TextInput name="address.street" label="Street" />
        <TextInput name="address.neighborhood" label="Neighborhood" />
        <TextInput name="address.municipality" label="Municipality" />
        <TextInput name="address.city" label="City" />
        <TextInput name="address.state" label="State" />
        <TextInput name="address.postal_code" label="Postal Code" />
        <SelectInput
          name="property_type_id"
          label="Property Type"
          options={propertyTypeOptions}
        />
        <TextInput name="type_of_property" label="Type of Property" />
        <NumberInput name="square_footage" label="Square Footage" />
        <NumberInput name="lot_size" label="Lot Size" />
        <TextInput name="zoning" label="Zoning" />
        <NumberInput name="rental_income" label="Rental Income" />
        <NumberInput name="year_built" label="Year Built" />
        <TextArea
          name="commercial_lease_terms"
          label="Commercial Lease Terms"
        />
        <FormSubmitButton text="Create Commercial Property" />
      </form>
    </FormProvider>
  );
};

export default CommercialPropertyForm;
