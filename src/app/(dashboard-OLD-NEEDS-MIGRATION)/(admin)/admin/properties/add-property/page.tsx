import PropertyFormTabs from "@/components/forms/properties/property-form-tabs";
import { getAddPropertyFormFieldsAdminAPIV1 } from "@/lib/forms/form-services";
import { transformApiResponseToFormOptions } from "@/lib/helpers/api-helpers";

import { auth } from "@/server/auth";
import { CreatePropertyFormFieldsResponse } from "@/types/property";
import { redirect } from "next/navigation";

const mockCurrencyTypes = [
  { name: "MXN", value: "MXN" },
  { name: "USD", value: "USD" },
  { name: "CAD", value: "CAD" },
];

export default async function AdminAddPropertyPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/admin/properties/add-property");
  }
  console.log(session.user);
  const res: CreatePropertyFormFieldsResponse =
    await getAddPropertyFormFieldsAdminAPIV1(session.user.accessToken);

  const { propertyTypes, amenities } = transformApiResponseToFormOptions(res);

  return (
    <main>
      <h1>CREATE PROPERTY FORM ADMIN</h1>
      <PropertyFormTabs
        propertyTypes={propertyTypes}
        currencyOptions={mockCurrencyTypes}
        amenities={amenities}
      />
    </main>
  );
}
