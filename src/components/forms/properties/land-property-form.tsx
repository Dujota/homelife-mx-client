"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  landPropertySchema,
  type LandPropertyFormData,
} from "@/lib/zod/forms/land-property-schema";
import NumberInput from "../fields/number-input";
import TextArea from "../fields/text-area-input";
import TextInput from "../fields/text-input";
import SelectInput from "../fields/simple-select-input";
import FormSubmitButton from "../../common/buttons/form-submit-button";

type LandPropertyFormProps = {
  propertyTypes: { name: string; id: number }[];
};

const LandPropertyForm = ({ propertyTypes }: LandPropertyFormProps) => {
  const methods = useForm<LandPropertyFormData>({
    resolver: zodResolver(landPropertySchema),
  });

  const propertyTypeOptions = propertyTypes.map(
    (type: { name: string; id: number }) => ({
      label: type.name,
      value: type.id,
    }),
  );

  const onSubmit = async (data: LandPropertyFormData) => {
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
        <NumberInput name="size_of_land" label="Size of the Land" />
        <TextInput name="dimensions" label="Dimensions" />
        <SelectInput
          name="in_land_registry"
          label="In Land Registry"
          options={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
        />
        <SelectInput
          name="appraisal_available"
          label="Appraisal Available"
          options={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
        />
        <TextInput name="zoning" label="Zoning" />
        <TextInput name="topography" label="Topography" />
        <SelectInput
          name="access_to_utilities"
          label="Access to Utilities"
          options={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
        />
        <TextArea name="existing_structures" label="Existing Structures" />
        <FormSubmitButton text="Create Land Property" />
      </form>
    </FormProvider>
  );
};

export default LandPropertyForm;
