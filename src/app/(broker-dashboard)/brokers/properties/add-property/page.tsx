import CreatePropertyForm from "@/components/forms/create-property";
import { getAllProperties } from "@/lib/models/properties/queries";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

const mockPropertyTypes = [
  { name: "House", id: 1 },
  { name: "Apartment", id: 2 },
  { name: "Condo", id: 3 },
  { name: "Townhouse", id: 4 },
];

export default async function ListingsPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login?callbackUrl=/brokers/properties/add-property");
  }

  // const properties = await getAllProperties(session.user.accessToken);

  return (
    <div>
      <h1>Create Broker Properties Page</h1>
      <CreatePropertyForm propertyTypes={mockPropertyTypes} />
    </div>
  );
}
