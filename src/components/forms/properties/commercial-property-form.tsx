"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Hook Form
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  commercialPropertySchema,
  type CommercialPropertyFormData,
} from "@/lib/zod/forms/commercial-property-schema";

// Components
import NumberInput from "../fields/number-input";
import TextArea from "../fields/text-area-input";
import TextInput from "../fields/text-input";
import FormSubmitButton from "../../common/buttons/form-submit-button";
import SelectInput from "../fields/simple-select-input";

// Mutations
import {
  createCommercialProperty,
  createCommercialPropertyBrokers,
} from "@/lib/models/properties/mutations";
import { useMemo } from "react";
import Checkboxes from "../fields/checkboxes";
import ImageUpload from "../fields/image-uploader";

type CommercialPropertyFormProps = {
  propertyTypes: { name: string; id: number }[];
  currencyOptions: { name: string; value: string }[];
  broker?: boolean;
};

const CommercialPropertyForm = ({
  propertyTypes,
  currencyOptions,
  broker,
}: CommercialPropertyFormProps) => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login?callbackUrl=/admin/properties/add-property");
    },
  });

  const methods = useForm<CommercialPropertyFormData>({
    resolver: zodResolver(commercialPropertySchema),
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

  const onSubmit = async (data: CommercialPropertyFormData) => {
    try {
      let res;
      if (broker) {
        res = await createCommercialPropertyBrokers(
          data,
          session?.user?.accessToken,
        );
      } else {
        res = await createCommercialProperty(data, session?.user?.accessToken);
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
        <TextInput name="type_of_business" label="Type of Business" />
        <NumberInput
          name="square_footage_of_building"
          label="Commercial Space Size"
        />
        {/* <NumberInput name="size_of_land" label="Lot Size" /> */}
        <TextInput name="zoning" label="Zoning" />
        <NumberInput name="rental_income" label="Rental Income" />
        {/* <NumberInput name="year_built" label="Year Built" /> */}
        <TextArea
          name="commercial_lease_terms"
          label="Commercial Lease Terms"
        />
        <Checkboxes
          name="create_listing"
          label="Make Listing Public"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <FormSubmitButton text="Create Commercial Property" />
      </form>
    </FormProvider>
  );
};

export default CommercialPropertyForm;
