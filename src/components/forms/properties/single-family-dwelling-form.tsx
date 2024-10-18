"use client";
import { useMemo } from "react";
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

import FormSubmitButton from "../../common/buttons/form-submit-button";
import toast from "react-hot-toast";
import UploadFieldGroup from "./field-groups/upload-group";
import PricingFieldGroup from "./field-groups/pricing-group";
import InformationFieldGroup from "./field-groups/information-group";
import AddressFieldGroup from "./field-groups/address-group";
import ConstructionSizeFieldGroup from "./field-groups/construction-size-group";
import PublishListingFieldGroup from "./field-groups/publish-group";
import AmenityFieldGroup from "./field-groups/amenity-group";

// Mutations
import {
  createSingleFamilyDwelling,
  createSingleFamilyDwellingBrokers,
} from "@/lib/models/properties/mutations";
import LoadingSpinner from "@/components/common/animations/loading-spinner";

type SingleFamilyDwellingFormProps = {
  propertyTypes: { name: string; id: number | string }[];
  currencyOptions: { name: string; value: string }[];
  broker?: boolean;
  amenities: { label: string; value: number | string }[];
};

const SingleFamilyDwellingForm = ({
  propertyTypes,
  currencyOptions,
  broker,
  amenities,
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

  const propertyTypeOptions = useMemo(
    () =>
      propertyTypes
        ?.map((type: { name: string; id: number | string }) => ({
          label: type.name,
          value: type.id,
        }))
        .filter(
          (type) =>
            !["commercial", "land", "pre-construction"].includes(
              type.label.toLowerCase(),
            ),
        ),
    [propertyTypes],
  );

  const currencySelectOptions = useMemo(
    () =>
      currencyOptions?.map((currency: { name: string; value: string }) => ({
        label: currency.name,
        value: currency.value,
      })),
    [currencyOptions],
  );

  const onSubmit = async (data: SingleFamilyDwellingFormData) => {
    try {
      let res;

      if (broker) {
        res = await createSingleFamilyDwellingBrokers(
          data,
          session?.user?.accessToken,
        );
      } else {
        res = await createSingleFamilyDwelling(
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
          // router.push(`/brokers/properties/${res.data.id}`);
          router.push(`/listings/${res.data.id}`);
        } else {
          // router.push(`/admin/properties/${res.data.id}`);
          router.push(`/listings/${res.data.id}`);
        }
      }

      toast.success("Property created successfully!");
    } catch (error) {
      toast.error("Failed to create property");
      console.error("Error creating property:", error);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <UploadFieldGroup />
          <PricingFieldGroup currencySelectOptions={currencySelectOptions} />
          <InformationFieldGroup propertyTypeOptions={propertyTypeOptions} />
          <AddressFieldGroup />
          <ConstructionSizeFieldGroup />
          <AmenityFieldGroup amenities={amenities} />
          <PublishListingFieldGroup />
          <FormSubmitButton text="Create Single Family Dwelling" />
        </form>
      </FormProvider>
      <LoadingSpinner isLoading={methods.formState.isSubmitting} />
    </>
  );
};

export default SingleFamilyDwellingForm;
