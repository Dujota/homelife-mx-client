"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createPropertySchema,
  type CreatePropertyFormData,
} from "@/lib/zod/property-schema";
import NumberInput from "./fields/number-input";
import TextArea from "./fields/text-area-input";
import TextInput from "./fields/text-input";
import SelectInput from "./fields/simple-select-input";
import FormSubmitButton from "../common/buttons/form-submit-button";

type CreatePropertyFormProps = {
  propertyTypes: { name: string; id: number }[];
};

const CreatePropertyForm = ({ propertyTypes }: CreatePropertyFormProps) => {
  const methods = useForm<CreatePropertyFormData>({
    resolver: zodResolver(createPropertySchema),
  });

  const propertyTypeOptions = propertyTypes.map(
    (type: { name: string; id: number }) => ({
      label: type.name,
      value: type.id,
    }),
  );

  const onSubmit = async (data: CreatePropertyFormData) => {
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
        <FormSubmitButton text="Create Property" />
      </form>
    </FormProvider>
  );
};

export default CreatePropertyForm;
