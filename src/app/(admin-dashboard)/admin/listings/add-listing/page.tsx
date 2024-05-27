// import Header from "@/components/common/layout/header";
// import PageHeader from "@/components/common/layout/page-header";
// import PageWrapper from "@/components/common/layout/page-wrapper";
// import CreateProperty from "@/components/forms/create-property";

import CreateListingForm from "@/components/forms/create-listings";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/admin/listings/add-listing");
  }

  return (
    <div>
      <h1>ADMIN Create Listing</h1>
      <CreateListingForm />
    </div>
  );
}
