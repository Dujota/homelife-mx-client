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
import Checkboxes from "../fields/checkboxes";

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

      const result = window.confirm("Do you want to add another property?");
      if (result) {
        // TODO: clear form with react hook form
        window.location.reload();
      } else {
        router.push(`/admin/properties/${res.data.id}`);
      }

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
        <NumberInput name="half_bathrooms" label="Half Bathrooms" />
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

        {/* <MultiSelectInput
          name="amenity_ids"
          label="Amenities"
          options={[
            { label: "Pool", value: 1 },
            { label: "Gym", value: 2 },
            { label: "Garden", value: 3 },
          ]}
        /> */}
        <TextInput name="currency" label="Currency" />
        <NumberInput name="number_of_living_rooms" label="Living Rooms" />
        <NumberInput name="garage_size" label="Garage Size" />
        <NumberInput
          name="number_of_airconditioners"
          label="Number of Air Conditioners"
        />
        <NumberInput name="gas_tank_size" label="Gas Tank Size (liters)" />
        <TextInput
          name="general_carpentry_and_paint_condition"
          label="Carpentry/Paint Condition"
        />
        <Checkboxes
          name="amenity_ids"
          label="Amenities"
          options={[
            { label: "Pool", value: 1 },
            { label: "Gym", value: 2 },
            { label: "Garden", value: 3 },
            { label: "Pool", value: 4 },
            { label: "Gym", value: 5 },
            { label: "Garden", value: 6 },
            { label: "Pool", value: 7 },
            { label: "Gym", value: 8 },
            { label: "Garden", value: 9 },
          ]}
        />
        <FormSubmitButton text="Create Single Family Dwelling" />
      </form>
    </FormProvider>
  );
};

export default SingleFamilyDwellingForm;
