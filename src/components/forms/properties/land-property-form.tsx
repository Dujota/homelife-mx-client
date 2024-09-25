"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Hook Form
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  landPropertySchema,
  type LandPropertyFormData,
} from "@/lib/zod/forms/land-property-schema";

// Components
import NumberInput from "../fields/number-input";
import TextArea from "../fields/text-area-input";
import TextInput from "../fields/text-input";
import SelectInput from "../fields/simple-select-input";
import FormSubmitButton from "../../common/buttons/form-submit-button";

// Mutations
import {
  createLand,
  createLandBrokers,
} from "@/lib/models/properties/mutations";
import { useMemo } from "react";
import Checkboxes from "../fields/checkboxes";
import ImageUpload from "../fields/image-uploader";

type LandPropertyFormProps = {
  propertyTypes?: { name: string; id: number }[];
  currencyOptions: { name: string; value: string }[];
  broker?: boolean;
};

const LandPropertyForm = ({
  propertyTypes,
  currencyOptions,
  broker,
}: LandPropertyFormProps) => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login?callbackUrl=/admin/properties/add-property");
    },
  });

  const methods = useForm<LandPropertyFormData>({
    resolver: zodResolver(landPropertySchema),
  });

  // const propertyTypeOptions = propertyTypes.map(
  //   (type: { name: string; id: number }) => ({
  //     label: type.name,
  //     value: type.id,
  //   }),
  // );

  const currencySelectOptions = useMemo(
    () =>
      currencyOptions?.map((currency: { name: string; value: string }) => ({
        label: currency.name,
        value: currency.value,
      })),
    [currencyOptions],
  );

  const onSubmit = async (data: LandPropertyFormData) => {
    try {
      let res;
      if (broker) {
        res = await createLandBrokers(data, session?.user?.accessToken);
      } else {
        res = await createLand(data, session?.user?.accessToken);
      }

      const result = window.confirm("Do you want to add another property?");

      if (result) {
        // TODO: clear form with react hook form
        window.location.reload();
      } else {
        if (broker) {
          router.push(`/brokers/properties/${res.data.id}`);
        } else {
          router.push(`/admin/properties/${res.data.id}`);
        }
      }
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ImageUpload name="images" label="Images" maxNumber={10} />
        <ImageUpload
          name="attachments"
          label="Legal Documents (images)"
          maxNumber={10}
        />
        <NumberInput name="price" label="Price" />
        <SelectInput
          name="currency"
          label="Currency"
          options={currencySelectOptions}
        />
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
        {/* <SelectInput
          name="property_type_id"
          label="Property Type"
          options={propertyTypeOptions}
        /> */}
        <NumberInput name="size_of_land" label="Size of the Land" />
        <TextInput name="dimensions" label="Dimensions" />
        <SelectInput
          name="is_in_land_registry"
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
        <Checkboxes
          name="create_listing"
          label="Make Listing Public"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <FormSubmitButton text="Create Land Property" />
      </form>
    </FormProvider>
  );
};

export default LandPropertyForm;
