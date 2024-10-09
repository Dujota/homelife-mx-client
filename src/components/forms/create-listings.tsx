"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  type CreateListingFormData,
  createListingSchema,
} from "@/lib/zod/listing-schema";

import NumberInput from "./fields/number-input";
import DateInput from "./fields/date-input";
import FormSubmitButton from "../common/buttons/form-submit-button";
import SelectInput from "./fields/simple-select-input";

const propertyOptions = [
  { label: "Property 1", value: 1 },
  { label: "Property 2", value: 2 },
  // Add more options as needed
];

const statusOptions = [
  { label: "Available", value: 1 },
  { label: "Sold", value: 2 },
  // Add more options as needed
];

const listingTypeOptions = [
  { label: "Sale", value: 1 },
  { label: "Rent", value: 2 },
  // Add more options as needed
];

const CreateListingForm = () => {
  const methods = useForm<CreateListingFormData>({
    resolver: zodResolver(createListingSchema),
  });

  const onSubmit = async (data: CreateListingFormData) => {
    try {
      const res = await fetch("/api/brokers/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create listing");
      }

      const result = await res.json();
    } catch (error) {
      console.error("Error creating listing:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DateInput name="listing_date" label="Listing Date" />
        <NumberInput
          name="commission_percentage"
          label="Commission Percentage"
        />

        <SelectInput
          name="property_id"
          label="Available Properties"
          options={propertyOptions}
        />

        <SelectInput name="status_id" label="Status" options={statusOptions} />
        <SelectInput
          name="listing_type_id"
          label="Listing Type"
          options={listingTypeOptions}
        />

        <FormSubmitButton text="Create Listing" />
      </form>
    </FormProvider>
  );
};

export default CreateListingForm;
