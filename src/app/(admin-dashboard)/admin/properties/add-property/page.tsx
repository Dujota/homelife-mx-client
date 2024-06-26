// import Header from "@/components/common/layout/header";
// import PageHeader from "@/components/common/layout/page-header";
// import PageWrapper from "@/components/common/layout/page-wrapper";
import CreatePropertyForm from "@/components/forms/create-property";

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
    return redirect("/login?callbackUrl=/listings/add-listing");
  }

  return (
    <main>
      <h1>CREATE PROPERTY FORM ADMIN</h1>
      <CreatePropertyForm propertyTypes={mockPropertyTypes} />
    </main>
  );
}
