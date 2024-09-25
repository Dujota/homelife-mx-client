"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Hook Form
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  preConstructionSchema,
  type PreConstructionFormData,
} from "@/lib/zod/forms/pre-construction-schema";

// Components
import NumberInput from "../fields/number-input";
import TextArea from "../fields/text-area-input";
import TextInput from "../fields/text-input";
import SelectInput from "../fields/simple-select-input";
import FormSubmitButton from "../../common/buttons/form-submit-button";
import {
  createPreConstructionProject,
  createPreConstructionProjectBrokers,
} from "@/lib/models/properties/mutations";
import { useMemo } from "react";
import Checkboxes from "../fields/checkboxes";
import ImageUpload from "../fields/image-uploader";
import DateInput from "../fields/date-input";

type PreConstructionFormProps = {
  propertyTypes: { name: string; id: number }[];
  currencyOptions: { name: string; value: string }[];
  broker?: boolean;
};

const PreConstructionForm = ({
  propertyTypes,
  currencyOptions,
  broker,
}: PreConstructionFormProps) => {
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login?callbackUrl=/admin/properties/add-property");
    },
  });

  const methods = useForm<PreConstructionFormData>({
    resolver: zodResolver(preConstructionSchema),
  });

  const onSubmit = async (data: PreConstructionFormData) => {
    try {

      let res;
      if (broker) {
        res = await createPreConstructionProjectBrokers(
          data,
          session?.user?.accessToken,
        );
      } else {
        res = await createPreConstructionProject(
          data,
          session?.user?.accessToken,
        );
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

  const currencySelectOptions = useMemo(
    () =>
      currencyOptions?.map((currency: { name: string; value: string }) => ({
        label: currency.name,
        value: currency.value,
      })),
    [currencyOptions],
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ImageUpload name="images" label="Images" maxNumber={10} />
        <ImageUpload
          name="attachments"
          label="Legal Documents (images)"
          maxNumber={10}
        />
        <TextInput name="development_name" label="Name of Development" />
        <TextArea name="description" label="Project Description" />
        <TextInput
          name="developer_contact"
          label="Developer Contact Information"
        />
        <TextInput name="cadastral_number" label="Cadastral/Folio Number" />
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
        <TextArea name="plans" label="Plans" />
        <SelectInput
          name="rendering_available"
          label="Rendering Available"
          options={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
        />
        <DateInput
          name="estimated_completion_date"
          label="Estimated Completion Date"
        />
        <NumberInput name="min_price" label="Minimum Price" />
        <NumberInput name="max_price" label="Maximum Price" />
        <SelectInput
          name="currency"
          label="Currency"
          options={currencySelectOptions}
        />
        <TextArea name="deposit_structure" label="Deposit Structure" />
        <TextArea name="incentives" label="Incentives" />
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
        <Checkboxes
          name="create_listing"
          label="Make Listing Public"
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
        />
        <FormSubmitButton text="Create Pre-construction Property" />
      </form>
    </FormProvider>
  );
};

export default PreConstructionForm;
