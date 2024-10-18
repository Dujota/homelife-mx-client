import {
  getAddPropertyFormFieldsAdminAPIV1,
  getAddPropertyFormFieldsBrokersAPIV1,
} from "@/lib/forms/form-services";
import { transformApiResponseToFormOptions } from "@/lib/helpers/api-helpers";

import { auth } from "@/server/auth";
import { CreatePropertyFormFieldsResponse } from "@/types/property";
import { redirect } from "next/navigation";
import QuickActionToolbar from "./quick-action-toolbar";

const mockCurrencyTypes = [
  { name: "MXN", value: "MXN" },
  { name: "USD", value: "USD" },
  { name: "CAD", value: "CAD" },
];

export default async function QuickActions() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/admin/properties/add-property");
  }

  if (!session?.user) {
    return redirect("/login?callbackUrl=/brokers");
  } else if (session.user.roles?.find((role: any) => role.name === "admin")) {
    return redirect("/admin");
  } else if (!session.user.roles?.find((role: any) => role.name === "broker")) {
    return redirect("/login?callbackUrl=/brokers");
  }

  let res;

  if (session.user.roles?.find((role: any) => role.name === "admin")) {
    res = await getAddPropertyFormFieldsAdminAPIV1(session.user.accessToken);
  } else if (session.user.roles?.find((role: any) => role.name === "broker")) {
    res = await getAddPropertyFormFieldsBrokersAPIV1(session.user.accessToken);
  }

  const { propertyTypes, amenities } = transformApiResponseToFormOptions(res);

  return (
    <QuickActionToolbar
      propertyTypes={propertyTypes}
      currencyOptions={mockCurrencyTypes}
      amenities={amenities}
    />
  );
}
