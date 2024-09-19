import PropertyFormTabs from "@/components/forms/properties/property-form-tabs";

import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

const mockPropertyTypes = [
  { name: "House", id: 1 },
  { name: "Apartment", id: 2 },
  { name: "Condo", id: 3 },
  { name: "Townhouse", id: 4 },
];

export default async function AdminAddPropertyPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/admin/properties/add-property");
  }

  return (
    <main>
      <h1>CREATE PROPERTY FORM ADMIN</h1>
      <PropertyFormTabs propertyTypes={mockPropertyTypes} />
    </main>
  );
}
