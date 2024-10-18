"use client";
import { useMemo } from "react";
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
import FormSubmitButton from "../../common/buttons/form-submit-button";
import LoadingSpinner from "@/components/common/animations/loading-spinner";
import UploadFieldGroup from "./field-groups/upload-group";
import AddressFieldGroup from "./field-groups/address-group";
import PricingFieldGroup from "./field-groups/pricing-group";
import AmenityFieldGroup from "./field-groups/amenity-group";
import PublishListingFieldGroup from "./field-groups/publish-group";
import PaymentOptionGroup from "../fields/payment-option-group";
import DeveloperInformationFieldGroup from "../fields/developer-information";
import PreConstructionInformationFieldGroup from "../fields/pre-construction-information";

// Services
import {
  createPreConstructionProject,
  createPreConstructionProjectBrokers,
} from "@/lib/models/properties/mutations";

type PreConstructionFormProps = {
  propertyTypes: { name: string; id: number | string }[];
  currencyOptions: { name: string; value: string }[];
  broker?: boolean;
  amenities: { label: string; value: number | string }[];
};

const PreConstructionForm = ({
  propertyTypes,
  currencyOptions,
  broker,
  amenities,
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

  const property_type_id = useMemo(() => {
    const type = propertyTypes.find(
      (type: { name: string; id: number | string }) =>
        type.name.toLowerCase() === "pre-construction",
    );
    return type?.id;
  }, [propertyTypes]);

  const onSubmit = async (data: PreConstructionFormData) => {
    try {
      let res;
      if (broker) {
        res = await createPreConstructionProjectBrokers(
          { ...data, property_type_id },
          session?.user?.accessToken,
        );
      } else {
        res = await createPreConstructionProject(
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

  const currencySelectOptions = useMemo(
    () =>
      currencyOptions?.map((currency: { name: string; value: string }) => ({
        label: currency.name,
        value: currency.value,
      })),
    [currencyOptions],
  );

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <UploadFieldGroup />
          <DeveloperInformationFieldGroup />
          <PreConstructionInformationFieldGroup />
          <AddressFieldGroup />
          <AmenityFieldGroup amenities={amenities} />
          <PricingFieldGroup
            currencySelectOptions={currencySelectOptions}
            range
          />
          <PaymentOptionGroup />
          <PublishListingFieldGroup />
          <FormSubmitButton text="Create Pre-construction Property" />
        </form>
      </FormProvider>
      <LoadingSpinner isLoading={methods.formState.isSubmitting} />
    </>
  );
};

export default PreConstructionForm;
