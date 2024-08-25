"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Hook Form
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  singleFamilyDwellingSchema,
  type SingleFamilyDwellingFormData,
} from "@/lib/zod/forms/single-family-dwelling-schema";

// Components
import NumberInput from "../fields/number-input";
import TextArea from "../fields/text-area-input";
import TextInput from "../fields/text-input";
import SelectInput from "../fields/simple-select-input";
import FormSubmitButton from "../../common/buttons/form-submit-button";
import MultiSelectInput from "../fields/multi-select";
import toast from "react-hot-toast";

// Mutations
import { createSingleFamilyDwelling } from "@/lib/models/properties/mutations";

type SingleFamilyDwellingFormProps = {
  propertyTypes: { name: string; id: number }[];
};

const SingleFamilyDwellingForm = ({
  propertyTypes,
}: SingleFamilyDwellingFormProps) => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login?callbackUrl=/admin/properties/add-property");
    },
  });

  const methods = useForm<SingleFamilyDwellingFormData>({
    resolver: zodResolver(singleFamilyDwellingSchema),
  });

  const propertyTypeOptions = propertyTypes?.map(
    (type: { name: string; id: number }) => ({
      label: type.name,
      value: type.id,
    }),
  );

  const onSubmit = async (data: SingleFamilyDwellingFormData) => {
    try {
      const payload = {
        property: data,
      };

      const res = await createSingleFamilyDwelling(
        payload,
        session?.user?.accessToken,
      );

      debugger;
      // router.push(`/listings/${res.data.id}`);
      toast.success("Property created successfully!");
    } catch (error) {
      toast.error("Failed to create property");
      console.error("Error creating property:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NumberInput name="price" label="Price" />
        <TextArea name="description" label="Description" />
        <TextInput
          name="address_attributes.house_number"
          label="House Number"
        />
        <TextInput name="address_attributes.street" label="Street" />
        <TextInput
          name="address_attributes.neighborhood"
          label="Neighborhood"
        />
        <TextInput
          name="address_attributes.municipality"
          label="Municipality"
        />
        <TextInput name="address_attributes.city" label="City" />
        <TextInput name="address_attributes.state" label="State" />
        <TextInput name="address_attributes.postal_code" label="Postal Code" />
        <SelectInput
          name="property_type_id"
          label="Property Type"
          options={propertyTypeOptions}
        />
        <NumberInput name="number_of_bedrooms" label="Number of Bedrooms" />
        <NumberInput name="number_of_bathrooms" label="Number of Bathrooms" />
        <NumberInput
          name="living_space_square_meters"
          label="Living Space (sqm)"
        />
        <NumberInput name="lot_size" label="Lot Size (sqm)" />
        <NumberInput name="year_built" label="Year Built" />
        {/* <SelectInput
          name="amenities"
          label="Amenities"
          options={[
            { label: "Pool", value: "pool" },
            { label: "Garage", value: "garage" },
            { label: "Nearby Schools", value: "schools" },
          ]}
          isMulti
        /> */}

        <MultiSelectInput
          name="amenity_ids"
          label="Amenities"
          options={[
            { label: "Pool", value: 1 },
            { label: "Gym", value: 2 },
            { label: "Garden", value: 3 },
          ]}
        />
        <FormSubmitButton text="Create Single Family Dwelling" />
      </form>
    </FormProvider>
  );
};

export default SingleFamilyDwellingForm;
