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
import FormSubmitButton from "../../common/buttons/form-submit-button";
import UploadFieldGroup from "./field-groups/upload-group";
import PricingFieldGroup from "./field-groups/pricing-group";
import AddressFieldGroup from "./field-groups/address-group";
import PublishListingFieldGroup from "./field-groups/publish-group";
import CommercialInformationGroup from "./field-groups/commercial-information-group";

// Mutations
import {
  createCommercialProperty,
  createCommercialPropertyBrokers,
} from "@/lib/models/properties/mutations";
import { useMemo } from "react";
import LoadingSpinner from "@/components/common/animations/loading-spinner";

type CommercialPropertyFormProps = {
  propertyTypes: { name: string; id: number | string }[];
  currencyOptions: { name: string; value: string }[];
  broker?: boolean;
  amenities: { label: string; value: number | string }[];
};

const CommercialPropertyForm = ({
  propertyTypes,
  currencyOptions,
  broker,
  amenities,
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

  const property_type_id = useMemo(() => {
    const type = propertyTypes.find(
      (type: { name: string; id: number | string }) =>
        type.name.toLowerCase() === "commercial",
    );
    return type?.id;
  }, [propertyTypes]);

  const onSubmit = async (data: CommercialPropertyFormData) => {
    try {
      let res;
      if (broker) {
        res = await createCommercialPropertyBrokers(
          { ...data, property_type_id },
          session?.user?.accessToken,
        );
      } else {
        res = await createCommercialProperty(
          { ...data, property_type_id },
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
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <UploadFieldGroup />
          <AddressFieldGroup />
          <PricingFieldGroup currencySelectOptions={currencySelectOptions} />
          <CommercialInformationGroup />
          <PublishListingFieldGroup />
          <FormSubmitButton text="Create Commercial Property" />
        </form>
      </FormProvider>
      <LoadingSpinner isLoading={methods.formState.isSubmitting} />
    </>
  );
};

export default CommercialPropertyForm;
