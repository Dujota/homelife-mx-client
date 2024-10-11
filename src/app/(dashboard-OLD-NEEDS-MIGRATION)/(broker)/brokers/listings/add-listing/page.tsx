import CreateListingForm from "@/components/forms/create-listings";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function CreateListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/brokers/listings/add-listing");
  }

  return (
    <div>
      <h1>Broker Create Listing</h1>
      <CreateListingForm />
    </div>
  );
}
