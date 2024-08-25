"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  preConstructionSchema,
  type PreConstructionFormData,
} from "@/lib/zod/forms/pre-construction-schema";
import NumberInput from "../fields/number-input";
import TextArea from "../fields/text-area-input";
import TextInput from "../fields/text-input";
import SelectInput from "../fields/simple-select-input";
import FormSubmitButton from "../../common/buttons/form-submit-button";

type PreConstructionFormProps = {
  propertyTypes: { name: string; id: number }[];
};

const PreConstructionForm = ({ propertyTypes }: PreConstructionFormProps) => {
  const methods = useForm<PreConstructionFormData>({
    resolver: zodResolver(preConstructionSchema),
  });

  const propertyTypeOptions = propertyTypes.map(
    (type: { name: string; id: number }) => ({
      label: type.name,
      value: type.id,
    }),
  );

  const onSubmit = async (data: PreConstructionFormData) => {
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
        <TextInput name="name_of_develop" label="Name of Development" />
        <TextArea name="project_description" label="Project Description" />
        <TextInput
          name="developer_contact_info"
          label="Developer Contact Information"
        />
        <TextInput
          name="cadastral_folio_number"
          label="Cadastral/Folio Number"
        />
        <SelectInput
          name="proof_of_ownership"
          label="Proof of Ownership"
          options={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
        />
        <NumberInput name="property_taxes" label="Property Taxes" />
        <TextInput name="zoning" label="Zoning" />
        <TextInput name="location" label="Location" />
        <TextArea name="plans" label="Plans" />
        <SelectInput
          name="rendering_available"
          label="Rendering Available"
          options={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
        />
        <TextInput
          name="estimated_completion_date"
          label="Estimated Completion Date"
        />
        <NumberInput name="min_price" label="Minimum Price" />
        <NumberInput name="max_price" label="Maximum Price" />
        <TextArea name="deposit_structure" label="Deposit Structure" />
        <TextArea name="incentives" label="Incentives" />
        <FormSubmitButton text="Create Pre-construction Property" />
      </form>
    </FormProvider>
  );
};

export default PreConstructionForm;
