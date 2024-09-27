import PropertyFormTabs from "@/components/forms/properties/property-form-tabs";
import { getAddPropertyFormFieldsBrokersAPIV1 } from "@/lib/forms/form-services";
import { transformApiResponseToFormOptions } from "@/lib/helpers/api-helpers";
import { auth } from "@/server/auth";
import { CreatePropertyFormFieldsResponse } from "@/types/property";
import { redirect } from "next/navigation";

const mockCurrencyTypes = [
  { name: "MXN", value: "MXN" },
  { name: "USD", value: "USD" },
  { name: "CAD", value: "CAD" },
];

export default async function BrokerAddPropertyPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/brokers/properties/add-property");
  }

  const res: CreatePropertyFormFieldsResponse =
    await getAddPropertyFormFieldsBrokersAPIV1(session.user.accessToken);

  const formFields = transformApiResponseToFormOptions(res);

  return (
    <div>
      <h1>Create Broker Properties Page</h1>
      <PropertyFormTabs
        propertyTypes={formFields.propertyTypes}
        amenities={formFields.amenities}
        currencyOptions={mockCurrencyTypes}
      />
    </div>
  );
}
